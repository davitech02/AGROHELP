from flask import Blueprint, request, jsonify
from flask_mail import Mail, Message
import os

contact_bp = Blueprint('contact', __name__)

def send_contact_email(name, email, subject, message):
    """Send contact form email."""
    try:
        mail = Mail()
        
        # Email to admin
        msg_to_admin = Message(
            subject=f'New Contact Form Submission: {subject}',
            sender=os.getenv('MAIL_DEFAULT_SENDER', 'noreply@agrohelp.com'),
            recipients=[os.getenv('ADMIN_EMAIL', 'info@agrohelp.com')],
            body=f"""
New contact form submission:

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
            """
        )
        
        # Confirmation email to user
        msg_to_user = Message(
            subject='We received your message - AgroHelp Group',
            sender=os.getenv('MAIL_DEFAULT_SENDER', 'noreply@agrohelp.com'),
            recipients=[email],
            body=f"""
Dear {name},

Thank you for reaching out to AgroHelp Group. We have received your message and will get back to you as soon as possible.

Best regards,
AgroHelp Group Team
            """
        )
        
        # In production, you would use the mail extension to send
        # For now, we'll just log success
        return True
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return False

@contact_bp.route('/api/contact', methods=['POST'])
def contact():
    """Handle contact form submissions."""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'message']
        if not all(field in data for field in required_fields):
            return jsonify({'error': 'Missing required fields'}), 400
        
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        subject = data.get('subject', 'Contact Form Inquiry').strip()
        message = data.get('message', '').strip()
        
        # Validate email format (basic validation)
        if '@' not in email:
            return jsonify({'error': 'Invalid email address'}), 400
        
        # Validate message length
        if len(message) < 10:
            return jsonify({'error': 'Message must be at least 10 characters long'}), 400
        
        # Send emails
        send_contact_email(name, email, subject, message)
        
        return jsonify({
            'success': True,
            'message': 'Your message has been received. We will contact you soon!'
        }), 200
        
    except Exception as e:
        print(f"Error in contact endpoint: {str(e)}")
        return jsonify({'error': 'An error occurred while processing your request'}), 500
