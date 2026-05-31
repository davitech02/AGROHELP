# AgroHelp Backend — Render Deployment Guide

## Overview

This guide covers deploying the Flask backend to [Render](https://render.com) as a Web Service.

---

## Render Service Configuration

| Setting            | Value                                                                 |
|--------------------|-----------------------------------------------------------------------|
| **Service Type**   | Web Service                                                           |
| **Repository**     | https://github.com/davitech02/AGROHELP                               |
| **Root Directory** | `backend`                                                             |
| **Runtime**        | Python 3                                                              |
| **Build Command**  | `pip install -r requirements.txt`                                     |
| **Start Command**  | `gunicorn wsgi:application --bind 0.0.0.0:$PORT --workers 2 --timeout 120` |

---

## Environment Variables (set in Render dashboard)

| Variable              | Required | Description                                                  | Example Value                        |
|-----------------------|----------|--------------------------------------------------------------|--------------------------------------|
| `FLASK_ENV`           | Yes      | Set to `production` on Render                                | `production`                         |
| `SECRET_KEY`          | Yes      | Random secret string for Flask session security              | `a-long-random-string-here`          |
| `FRONTEND_URL`        | Yes      | Production URL of your deployed frontend (for CORS)          | `https://agrohelp.onrender.com`      |
| `MAIL_SERVER`         | Yes      | SMTP server for sending emails                               | `smtp.gmail.com`                     |
| `MAIL_PORT`           | Yes      | SMTP port                                                    | `587`                                |
| `MAIL_USE_TLS`        | Yes      | Enable TLS for SMTP                                          | `True`                               |
| `MAIL_USERNAME`       | Yes      | Your Gmail (or SMTP) address                                 | `your-email@gmail.com`               |
| `MAIL_PASSWORD`       | Yes      | Gmail App Password (not your login password)                 | `xxxx xxxx xxxx xxxx`                |
| `MAIL_DEFAULT_SENDER` | Yes      | "From" address shown on outgoing emails                      | `noreply@agrohelp.com`               |
| `ADMIN_EMAIL`         | Yes      | Where contact form submissions are delivered                 | `info@agrohelp.com`                  |

> **Note on Gmail:** Use a [Gmail App Password](https://support.google.com/accounts/answer/185833),
> not your regular login password. Enable 2-Step Verification first.

---

## Flask Entry Point

**File:** `backend/app.py`  
**Function:** `create_app()` (application factory pattern)  
**WSGI entry:** `backend/wsgi.py` → `application = create_app()`

Gunicorn runs: `gunicorn wsgi:application`

---

## API Endpoints

| Method | Endpoint          | Description                      |
|--------|-------------------|----------------------------------|
| GET    | `/api/health`     | Health check                     |
| GET    | `/api/services`   | List of services                 |
| POST   | `/api/contact`    | Contact form submission          |
| POST   | `/api/booking`    | Booking request                  |
| GET    | `/api/booking/<id>` | Retrieve a booking by ID       |

---

## Step-by-Step Deployment on Render

1. Log in to [render.com](https://render.com) and click **New → Web Service**
2. Connect your GitHub account and select the `davitech02/AGROHELP` repository
3. Fill in the settings from the table above
4. Scroll to **Environment Variables** and add every variable from the table above
5. Click **Create Web Service**
6. Render will build and deploy automatically — check the **Logs** tab for any errors
7. Once deployed, your backend will be live at `https://<your-service-name>.onrender.com`
8. Copy that URL and set it as `FRONTEND_URL` if your frontend is also on Render

---

## Local Development

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env            # then fill in .env values
python app.py                   # runs on http://localhost:5000
```
