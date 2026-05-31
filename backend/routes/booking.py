from flask import Blueprint, request, jsonify
from datetime import datetime
import os

booking_bp = Blueprint('booking', __name__)

# In-memory storage for bookings (in production, use a database)
bookings = []

@booking_bp.route('/api/booking', methods=['POST'])
def create_booking():
    """Handle booking requests."""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'appointmentType', 'preferredDate']
        if not all(field in data for field in required_fields):
            return jsonify({'error': 'Missing required fields'}), 400
        
        booking = {
            'id': len(bookings) + 1,
            'name': data.get('name', '').strip(),
            'email': data.get('email', '').strip(),
            'appointmentType': data.get('appointmentType', '').strip(),
            'preferredDate': data.get('preferredDate', ''),
            'notes': data.get('notes', '').strip(),
            'createdAt': datetime.now().isoformat(),
            'status': 'pending'
        }
        
        # Validate email format
        if '@' not in booking['email']:
            return jsonify({'error': 'Invalid email address'}), 400
        
        # Store booking
        bookings.append(booking)
        
        # In production, you would:
        # 1. Save to database
        # 2. Send confirmation email
        # 3. Sync with Calendly or calendar system
        
        return jsonify({
            'success': True,
            'message': 'Booking request received! We will confirm your appointment shortly.',
            'bookingId': booking['id']
        }), 201
        
    except Exception as e:
        print(f"Error in booking endpoint: {str(e)}")
        return jsonify({'error': 'An error occurred while processing your booking'}), 500

@booking_bp.route('/api/booking/<int:booking_id>', methods=['GET'])
def get_booking(booking_id):
    """Get booking details."""
    try:
        booking = next((b for b in bookings if b['id'] == booking_id), None)
        
        if not booking:
            return jsonify({'error': 'Booking not found'}), 404
        
        return jsonify(booking), 200
        
    except Exception as e:
        print(f"Error retrieving booking: {str(e)}")
        return jsonify({'error': 'An error occurred while retrieving the booking'}), 500

@booking_bp.route('/api/bookings', methods=['GET'])
def get_all_bookings():
    """Get all bookings (admin endpoint)."""
    try:
        # In production, verify admin authorization
        return jsonify(bookings), 200
        
    except Exception as e:
        print(f"Error retrieving bookings: {str(e)}")
        return jsonify({'error': 'An error occurred while retrieving bookings'}), 500
