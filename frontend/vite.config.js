import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// CJS helpers so we can require() root node_modules from this ESM file
const _require = createRequire(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))

// Load .env from project root (one level up from frontend/)
_require('dotenv').config({ path: resolve(__dirname, '../.env') })

// Build the Nodemailer transporter once at startup
const nodemailer = _require('nodemailer')
const transporter = nodemailer.createTransport({
  host:   process.env.EMAIL_HOST,
  port:   parseInt(process.env.EMAIL_PORT || '587', 10),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
})

function emailApiPlugin() {
  return {
    name: 'email-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/send-email', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          return res.end()
        }

        let body = ''
        req.on('data', chunk => (body += chunk.toString()))
        req.on('end', async () => {
          try {
            const { name, company, phone, email, subject, message } = JSON.parse(body)

            if (!name || !email || !subject || !message) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              return res.end(JSON.stringify({ success: false, message: 'Missing required fields.' }))
            }

            const html = `
              <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
                <h2 style="color:#1B4332;border-bottom:2px solid #E07B39;padding-bottom:8px">
                  New Contact Form — AgroHelp
                </h2>
                <table style="width:100%;border-collapse:collapse;margin-top:16px">
                  <tr><td style="padding:8px 0;color:#555;width:140px"><strong>Full Name</strong></td><td>${name}</td></tr>
                  <tr><td style="padding:8px 0;color:#555"><strong>Company</strong></td><td>${company || '—'}</td></tr>
                  <tr><td style="padding:8px 0;color:#555"><strong>Phone</strong></td><td>${phone || '—'}</td></tr>
                  <tr><td style="padding:8px 0;color:#555"><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
                  <tr><td style="padding:8px 0;color:#555"><strong>Subject</strong></td><td>${subject}</td></tr>
                </table>
                <div style="margin-top:20px;padding:16px;background:#f7f3ed;border-radius:8px">
                  <strong style="color:#1B4332">Message:</strong>
                  <p style="margin-top:8px;color:#333;white-space:pre-wrap">${message}</p>
                </div>
                <p style="margin-top:24px;font-size:12px;color:#999">
                  Sent via AgroHelp contact form · agrohelp.farm
                </p>
              </div>
            `

            await transporter.sendMail({
              from:    `"AgroHelp Contact" <${process.env.EMAIL_USER}>`,
              to:      process.env.EMAIL_USER,
              replyTo: email,
              subject: `[Contact] ${subject}`,
              html,
            })

            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: true }))
          } catch (err) {
            console.error('[email-api] Error:', err.message)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: false, message: err.message }))
          }
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), emailApiPlugin()],
})
