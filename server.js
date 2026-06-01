require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT, 10),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
});

app.post('/api/send-email', async (req, res) => {
  const { name, company, phone, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields.' });
  }

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#1B4332;border-bottom:2px solid #E07B39;padding-bottom:8px">
        New Contact Form Submission — AgroHelp
      </h2>
      <table style="width:100%;border-collapse:collapse;margin-top:16px">
        <tr><td style="padding:8px 0;color:#555;width:140px"><strong>Full Name</strong></td><td style="padding:8px 0">${name}</td></tr>
        <tr><td style="padding:8px 0;color:#555"><strong>Company</strong></td><td style="padding:8px 0">${company || '—'}</td></tr>
        <tr><td style="padding:8px 0;color:#555"><strong>Phone</strong></td><td style="padding:8px 0">${phone || '—'}</td></tr>
        <tr><td style="padding:8px 0;color:#555"><strong>Email</strong></td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px 0;color:#555"><strong>Subject</strong></td><td style="padding:8px 0">${subject}</td></tr>
      </table>
      <div style="margin-top:20px;padding:16px;background:#f7f3ed;border-radius:8px">
        <strong style="color:#1B4332">Message:</strong>
        <p style="margin-top:8px;color:#333;white-space:pre-wrap">${message}</p>
      </div>
      <p style="margin-top:24px;font-size:12px;color:#999">
        Sent via AgroHelp contact form · agrohelp.farm
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"AgroHelp Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html,
    });
    res.json({ success: true });
  } catch (err) {
    console.error('Nodemailer error:', err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// Serve built frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API server listening on port ${PORT}`));
