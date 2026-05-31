# AgroHelp Group - Full-Stack Website

A premium, modern website for **AgroHelp Group**, a strategic agricultural consulting firm focused on transforming African agriculture.

## 🎯 Project Overview

This is a full-stack professional website built with:

- **Frontend**: React 18, Tailwind CSS, Framer Motion, React Router
- **Backend**: Flask (Python), Flask-CORS, Flask-Mail
- **Design**: Apple-standard quality with premium, clean aesthetics
- **Color Palette**: Deep Green (#1B4332), Gold (#C9A84C), White (#FFFFFF), Light Gray (#F5F5F5)
- **Typography**: Inter font family (Google Fonts)

## 📁 Project Structure

```
AGROHELP/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── WhyAgroHelp.jsx
│   │   │   ├── WhoWeServe.jsx
│   │   │   ├── BookConsultation.jsx
│   │   │   ├── Team.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── Home.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env                  # Environment variables
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── backend/                  # Flask application
    ├── app.py                # Main Flask application
    ├── config.py             # Configuration
    ├── routes/
    │   ├── __init__.py
    │   ├── contact.py        # Contact form handling
    │   └── booking.py        # Booking management
    ├── .env                  # Environment variables
    ├── .env.example          # Example env file
    ├── requirements.txt      # Python dependencies
    └── README.md
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher) and npm
- **Python** (v3.8 or higher) and pip
- **Git**

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create/update the `.env` file:

   ```bash
   VITE_API_URL=http://localhost:5000
   VITE_APP_NAME=AgroHelp Group
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The frontend will run at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Create a virtual environment (recommended):

   ```bash
   # Windows
   python -m venv venv
   venv\Scripts\activate

   # macOS/Linux
   python -m venv venv
   source venv/bin/activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Create/update the `.env` file with your configuration:

   ```bash
   FLASK_ENV=development
   SECRET_KEY=your-secret-key-here
   MAIL_SERVER=smtp.gmail.com
   MAIL_PORT=587
   MAIL_USE_TLS=True
   MAIL_USERNAME=your-email@gmail.com
   MAIL_PASSWORD=your-app-password
   MAIL_DEFAULT_SENDER=noreply@agrohelp.com
   ADMIN_EMAIL=info@agrohelp.com
   ```

5. Start the Flask development server:

   ```bash
   python app.py
   ```

   The backend will run at `http://localhost:5000`

## 🔧 Configuration

### Email Setup (Gmail)

To enable email functionality:

1. Enable 2-Step Verification on your Gmail account
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Add these credentials to your `.env` file

### API Endpoints

#### Contact Form

- **Endpoint**: `POST /api/contact`
- **Body**:
  ```json
  {
    "name": "Your Name",
    "email": "your.email@example.com",
    "subject": "Inquiry Subject",
    "message": "Your message here"
  }
  ```

#### Booking

- **Endpoint**: `POST /api/booking`
- **Body**:
  ```json
  {
    "name": "Your Name",
    "email": "your.email@example.com",
    "appointmentType": "60-Minute Strategy",
    "preferredDate": "2026-06-15",
    "notes": "Optional notes"
  }
  ```

#### Services

- **Endpoint**: `GET /api/services`
- **Returns**: List of all services offered

#### Health Check

- **Endpoint**: `GET /api/health`
- **Returns**: Server status

## 🎨 Key Features

### Frontend Features

- ✅ **Responsive Design**: Mobile, tablet, and desktop optimized
- ✅ **Smooth Animations**: Framer Motion scroll triggers and fade-in effects
- ✅ **Dark-to-Light Navigation**: Sticky navbar with color transitions
- ✅ **Smooth Scrolling**: Site-wide smooth scroll behavior
- ✅ **Hero Section**: Full-viewport with background image and overlay
- ✅ **Service Cards**: Interactive hover effects with gold accent borders
- ✅ **Team Profiles**: Image galleries with team member details
- ✅ **Contact Form**: Integrated contact page with validation
- ✅ **Booking Section**: Multiple appointment type options
- ✅ **Newsletter Signup**: Email subscription form
- ✅ **Social Links**: Footer with social media connections

### Backend Features

- ✅ **CORS Support**: Enabled for frontend communication
- ✅ **Email Notifications**: Contact form and booking confirmations
- ✅ **Booking Management**: Track and manage bookings
- ✅ **API Health Checks**: Monitor service status
- ✅ **Error Handling**: Comprehensive error responses
- ✅ **Environment Configuration**: Easy deployment configuration
- ✅ **Static Data**: Services endpoint for dynamic content

## 📦 Dependencies

### Frontend

- React 18
- React Router DOM
- Tailwind CSS
- Framer Motion
- Lucide React
- Axios

### Backend

- Flask 2.3.2
- Flask-CORS 4.0.0
- Flask-Mail 0.9.1
- python-dotenv 1.0.0

## 🌐 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider

### Backend Deployment (Heroku/AWS/Digital Ocean)

1. Set environment variables on your hosting platform
2. Push the backend folder to your server
3. Install dependencies: `pip install -r requirements.txt`
4. Run the Flask app with a production WSGI server (Gunicorn)

## 📝 Environment Variables

### Frontend (.env)

```
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=AgroHelp Group
```

### Backend (.env)

```
FLASK_ENV=development
SECRET_KEY=your-secret-key
MAIL_SERVER=smtp.gmail.com
MAIL_PORT=587
MAIL_USE_TLS=True
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_DEFAULT_SENDER=noreply@agrohelp.com
ADMIN_EMAIL=info@agrohelp.com
```

## 🎓 Component Documentation

### Navbar

- Sticky positioning with transparent-to-solid background on scroll
- Mobile hamburger menu with smooth drawer animation
- Logo and navigation links
- CTA "Book a Call" button

### Hero

- Full-viewport section with background image
- Dark overlay for text contrast
- Framer Motion fade-in animations
- Two CTA buttons
- Animated scroll indicator

### About

- Two-column split layout
- Mission and vision statement
- Three animated stat cards with scroll triggers
- Responsive grid layout

### Services

- 6-card responsive grid
- Icon, title, and description for each service
- Hover effects with shadow and border accent
- Staggered animation on scroll

### Contact Form

- Name, email, subject, and message fields
- Form validation
- Success message display
- Axios integration with backend API

### Team

- Circular image placeholders
- Name and role display
- Social media links
- Hover effects

### Footer

- Company information and branding
- Navigation links
- Contact information with icons
- Newsletter subscription
- Social media links

## 🤝 Contributing

When contributing to this project:

1. Follow the existing code structure
2. Use Tailwind CSS for styling (no inline styles)
3. Implement responsive design from the start
4. Add Framer Motion animations for smooth UX
5. Test across different screen sizes

## 📄 License

This project is proprietary to AgroHelp Group.

## 📞 Support

For support or inquiries, contact:

- Email: info@agrohelp.com
- Phone: +1 (234) 567-8900

---

**Built with ❤️ for AgroHelp Group | Transforming African Agriculture**
