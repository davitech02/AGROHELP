import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const _require = createRequire(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))

function emailApiPlugin() {
  return {
    name: 'email-api-dev',

    configureServer(server) {
      // Load .env from project root every time the server starts
      _require('dotenv').config({ path: resolve(__dirname, '../.env') })

      const { EMAIL_HOST, EMAIL_PORT, EMAIL_SECURE, EMAIL_USER, EMAIL_PASS } = process.env
      const port   = Number(EMAIL_PORT) || 465
      const secure = EMAIL_SECURE === 'true'

      // Confirm env vars are loaded
      console.log('\n[email-api] SMTP config loaded:')
      console.log('  HOST   :', EMAIL_HOST)
      console.log('  PORT   :', port)
      console.log('  SECURE :', secure)
      console.log('  USER   :', EMAIL_USER)
      console.log('  PASS   :', EMAIL_PASS ? '***set***' : '!!! NOT SET !!!')

      const nodemailer = _require('nodemailer')

      const transporter = nodemailer.createTransport({
        host:   EMAIL_HOST,
        port,
        secure,
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
        tls: { rejectUnauthorized: false },
      })

      // Verify SMTP connection immediately on server start
      transporter.verify((error) => {
        if (error) {
          console.error('\n[email-api] ❌ SMTP Connection Error:', error.message)
          console.error('[email-api] Full error:', error)
        } else {
          console.log('[email-api] ✅ SMTP Server is ready to send emails\n')
        }
      })

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

            const mailOptions = {
              from:    `"AgroHelp Contact" <${EMAIL_USER}>`,
              to:      EMAIL_USER,
              replyTo: email,
              subject: `[Contact] ${subject}`,
              html: `
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
              `,
            }

            await transporter.sendMail(mailOptions)
            console.log(`[email-api] ✅ Email sent — from: ${email}, subject: ${subject}`)

            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: true }))
          } catch (err) {
            console.error('[email-api] ❌ Email sending failed:', err.message)
            console.error('[email-api] Full error:', err)
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
