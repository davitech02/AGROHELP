# AgroHelp Group - Startup Guide

This guide will help you get the AgroHelp Group website up and running on your local machine.

## 🎯 Quick Start (5 minutes)

### Terminal 1: Start the Backend

```bash
# Navigate to backend directory
cd backend

# Activate virtual environment (if created)
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the Flask server
python app.py
```

**Expected Output:**

```
 * Running on http://0.0.0.0:5000
```

### Terminal 2: Start the Frontend

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

**Expected Output:**

```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

## 🌐 Access the Website

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **API Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

## ✅ Testing the Integration

### 1. Check API is Working

Visit: `http://localhost:5000/api/health`

Expected response:

```json
{
  "status": "healthy",
  "service": "AgroHelp API"
}
```

### 2. Get Services Data

Visit: `http://localhost:5000/api/services`

You should see a JSON array of all services.

### 3. Test Contact Form

1. Go to [http://localhost:5173/contact](http://localhost:5173/contact)
2. Fill out and submit the contact form
3. Check the backend terminal for any messages
4. In production, emails would be sent (requires SMTP configuration)

### 4. Test Booking

Try submitting a booking from the "Book Consultation" section on the home page.

## 🔧 Configuration

### Backend Email Setup

To enable email functionality:

1. **Using Gmail:**
   - Enable 2-Step Verification
   - Generate an [App Password](https://myaccount.google.com/apppasswords)
   - Update `backend/.env`:
     ```
     MAIL_USERNAME=your-email@gmail.com
     MAIL_PASSWORD=your-app-password
     ```

2. **Using Other Email Services:**
   - Update the `MAIL_SERVER` and `MAIL_PORT` in `.env`
   - Provide valid credentials

### Frontend Environment Variables

Edit `frontend/.env`:

```
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=AgroHelp Group
```

## 🐛 Troubleshooting

### Port Already in Use

**Frontend (5173):**

```bash
# Find process using port 5173
lsof -i :5173  # macOS/Linux
netstat -ano | findstr :5173  # Windows

# Kill the process (example)
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

**Backend (5000):**

```bash
# Find process using port 5000
lsof -i :5000  # macOS/Linux
netstat -ano | findstr :5000  # Windows

# Kill the process (example)
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

Or use different ports:

```bash
# Frontend (change in terminal)
npm run dev -- --port 3000

# Backend (modify app.py)
app.run(debug=True, port=8000)
```

### CORS Errors

Make sure both servers are running:

1. Backend should be running at `http://localhost:5000`
2. Frontend should be running at `http://localhost:5173`

If you're running them on different machines, update the CORS settings in `backend/app.py`.

### Module Not Found Errors

**Frontend:**

```bash
cd frontend
npm install
```

**Backend:**

```bash
cd backend
pip install -r requirements.txt
```

### Python Virtual Environment

If you have issues with the virtual environment:

```bash
# Delete old environment
rm -rf venv  # macOS/Linux
rmdir /s venv  # Windows

# Create new environment
python -m venv venv

# Activate it
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate  # Windows

# Install dependencies
pip install -r requirements.txt
```

## 📱 Testing Responsive Design

1. Open DevTools (F12 or Cmd+Option+I)
2. Toggle Device Toolbar (Ctrl+Shift+M or Cmd+Shift+M)
3. Test on various device sizes:
   - Mobile (375px, 768px)
   - Tablet (768px, 1024px)
   - Desktop (1920px+)

## 🚀 Building for Production

### Frontend

```bash
cd frontend
npm run build
```

Output will be in `frontend/dist/`

### Backend

No build needed, but prepare by:

1. Setting `FLASK_ENV=production`
2. Using a production WSGI server (Gunicorn)
3. Configuring a real database for bookings

## 📚 Useful Commands

### Frontend

```bash
npm install              # Install dependencies
npm run dev             # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Lint code
```

### Backend

```bash
pip install -r requirements.txt  # Install dependencies
python app.py                    # Run development server
python -m flask shell            # Interactive shell
python -m pytest                 # Run tests (if configured)
```

## 🔗 API Quick Reference

### Health Check

```
GET /api/health
```

### Services

```
GET /api/services
```

### Contact Form

```
POST /api/contact
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

### Booking

```
POST /api/booking
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "appointmentType": "string",
  "preferredDate": "YYYY-MM-DD",
  "notes": "string (optional)"
}
```

## 📞 Support

For issues or questions:

1. Check the error message in the terminal
2. Review the Troubleshooting section above
3. Check browser console (DevTools)
4. Review backend logs
5. Contact: info@agrohelp.com

## ✨ Next Steps

After getting the local environment running:

1. **Customize Content**: Update text, images, and branding
2. **Add Real Data**: Replace placeholder data with actual services
3. **Configure Email**: Set up SMTP credentials
4. **Add Database**: Move bookings to a real database
5. **Deploy**: Push to production hosting

---

**Happy coding! 🌾🚀**
