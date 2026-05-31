from flask import Flask, jsonify
from flask_cors import CORS
from flask_mail import Mail
from config import get_config, MailConfig
from routes.contact import contact_bp
from routes.booking import booking_bp
import os
from dotenv import load_dotenv

load_dotenv()

def create_app(config=None):
    """Application factory."""
    app = Flask(__name__)
    
    # Load configuration
    if config is None:
        config = get_config()
    app.config.from_object(config)
    
    # Add mail configuration
    app.config.update({
        'MAIL_SERVER': MailConfig.MAIL_SERVER,
        'MAIL_PORT': MailConfig.MAIL_PORT,
        'MAIL_USE_TLS': MailConfig.MAIL_USE_TLS,
        'MAIL_USERNAME': MailConfig.MAIL_USERNAME,
        'MAIL_PASSWORD': MailConfig.MAIL_PASSWORD,
        'MAIL_DEFAULT_SENDER': MailConfig.MAIL_DEFAULT_SENDER,
    })
    
    # Initialize extensions
    allowed_origins = ["http://localhost:5173", "http://localhost:3000"]
    frontend_url = os.getenv('FRONTEND_URL', '')
    if frontend_url:
        allowed_origins.extend([u.strip() for u in frontend_url.split(',')])
    CORS(app, resources={r"/api/*": {"origins": allowed_origins}})
    mail = Mail(app)
    
    # Register blueprints
    app.register_blueprint(contact_bp)
    app.register_blueprint(booking_bp)
    
    # Error handlers
    @app.errorhandler(404)
    def not_found(error):
        return jsonify({'error': 'Endpoint not found'}), 404
    
    @app.errorhandler(500)
    def server_error(error):
        return jsonify({'error': 'Internal server error'}), 500
    
    # Health check endpoint
    @app.route('/api/health', methods=['GET'])
    def health_check():
        return jsonify({'status': 'healthy', 'service': 'AgroHelp API'}), 200
    
    # Services endpoint
    @app.route('/api/services', methods=['GET'])
    def get_services():
        services = [
            {
                'id': 1,
                'title': 'Strategic Consulting',
                'description': 'Tailored strategies for your agricultural enterprise, from market analysis to implementation.',
                'icon': 'Lightbulb'
            },
            {
                'id': 2,
                'title': 'Value Chain Development',
                'description': 'Building efficient, profitable value chains that connect farmers to markets.',
                'icon': 'Link'
            },
            {
                'id': 3,
                'title': 'Input Supply',
                'description': 'Reliable sourcing and distribution of quality agricultural inputs.',
                'icon': 'Package'
            },
            {
                'id': 4,
                'title': 'Agritech Solutions',
                'description': 'Leveraging technology to modernize agricultural operations and improve yields.',
                'icon': 'Zap'
            },
            {
                'id': 5,
                'title': 'Training & Capacity',
                'description': 'Comprehensive training programs for farmers and value chain actors.',
                'icon': 'BookOpen'
            },
            {
                'id': 6,
                'title': 'QHSE Compliance',
                'description': 'Ensuring quality, health, safety, and environmental standards.',
                'icon': 'CheckCircle'
            }
        ]
        return jsonify(services), 200
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000, host='0.0.0.0')
