# Integration and Development of a Web-Based Student Complaint Tracking and Decision Support System for University IT Services

## 🎯 Project Overview

A comprehensive web-based solution for managing student complaints in university IT services. This system streamlines complaint handling, provides real-time tracking, automated prioritization, and decision support capabilities to improve service delivery and user satisfaction.

**Course:** ITPE 104 - Integration Programming 2  
**Group:** 3 - SDG 9: Industry, Innovation, and Infrastructure  
**Team Members:**
- Eric T. Macas
- Nolan Jay Francisco
- Jan Jervis Nicolas
- Ashlimar Sawajaan

---

## 🚀 Key Features

### For Students
- **Easy Complaint Submission**: Simple online form with category selection
- **Real-time Tracking**: Monitor complaint status with unique tracking numbers
- **Instant Notifications**: Email and in-app updates on progress
- **Communication Portal**: Direct messaging with IT staff
- **Feedback System**: Rate and review resolved complaints

### For IT Staff
- **Automated Assignment**: Smart ticket distribution based on workload
- **Priority Management**: Clear prioritization based on urgency and impact
- **Performance Dashboard**: Track response times and resolution rates
- **Template Responses**: Quick replies for common issues
- **Escalation Handling**: Automatic escalation for overdue complaints

### For Administrators
- **Comprehensive Analytics**: Visual dashboards with key metrics
- **Staff Performance Monitoring**: Individual and team performance reports
- **Trend Analysis**: Identify recurring issues and patterns
- **Custom Reports**: Generate detailed reports in multiple formats
- **System Configuration**: Manage categories, priorities, and workflows

---

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MySQL 8.0 (via XAMPP)
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time**: Socket.io
- **Email**: Nodemailer

### Frontend
- **Framework**: React 18
- **UI Library**: Material-UI (MUI)
- **Routing**: React Router v6
- **Charts**: Chart.js with react-chartjs-2
- **Forms**: React Hook Form with Yup validation
- **HTTP Client**: Axios

### Development Tools
- **Version Control**: Git & GitHub
- **Package Manager**: npm
- **API Testing**: Postman
- **Code Editor**: Visual Studio Code
- **Database Management**: phpMyAdmin

---

## 📋 Prerequisites

Before running this project, ensure you have:

- **XAMPP** installed and running (Apache & MySQL)
- **Node.js** 18 or higher
- **npm** or **yarn** package manager
- **Git** for version control

---

## 🚦 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/student-complaint-system.git
cd student-complaint-system
```

### 2. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 3. Database Setup

1. Start XAMPP and launch Apache and MySQL
2. Open phpMyAdmin (http://localhost/phpmyadmin)
3. Create a new database named `complaint_tracking`
4. Import the database schema from `WEB_BASED_STUDENT_COMPLAINT_TRACKING_SYSTEM.md`
5. Run the seed data script to populate initial data

### 4. Configuration

Create a `.env` file in the backend directory:
```env
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=complaint_tracking
JWT_SECRET=your_secret_key_here
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:3000
```

### 5. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api

---

## 📚 Documentation

Comprehensive documentation is available in the following files:

### Core Documentation
- **[WEB_BASED_STUDENT_COMPLAINT_TRACKING_SYSTEM.md](./WEB_BASED_STUDENT_COMPLAINT_TRACKING_SYSTEM.md)**: Complete system overview, architecture, and features
- **[IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)**: Step-by-step implementation instructions
- **[API_DOCUMENTATION.md](./API_DOCUMENTATION.md)**: Detailed API reference and examples

### Project Management
- **[accomplishment report script.md](./accomplishment%20report%20script.md)**: Weekly progress tracking template
- **[group 3.md](./group%203.md)**: Original project proposal and requirements

---

## 🏗️ Project Structure

```
student-complaint-system/
├── backend/                    # Node.js backend
│   ├── config/                # Configuration files
│   ├── controllers/           # Business logic
│   ├── middleware/            # Express middleware
│   ├── models/                # Database models
│   ├── routes/                # API routes
│   ├── utils/                 # Utility functions
│   ├── .env                   # Environment variables
│   └── server.js              # Application entry point
│
├── frontend/                  # React frontend
│   ├── public/                # Static files
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── services/          # API services
│   │   ├── styles/            # CSS styles
│   │   ├── utils/             # Helper functions
│   │   └── App.js             # Main application
│   └── package.json
│
├── documentation/             # Additional docs
│   ├── API_DOCS.md
│   ├── DATABASE_SCHEMA.md
│   └── USER_MANUAL.md
│
├── WEB_BASED_STUDENT_COMPLAINT_TRACKING_SYSTEM.md
├── IMPLEMENTATION_GUIDE.md
├── API_DOCUMENTATION.md
├── accomplishment report script.md
├── group 3.md
└── README.md
```

---

## 🔑 Default Credentials

### Admin Account
- **Email**: admin@university.edu
- **Password**: admin123

### Test Student Account
- **Email**: student@university.edu
- **Password**: student123

**⚠️ Important**: Change these credentials immediately in production!

---

## 🎯 Key Features Implementation Status

### ✅ Completed Features
- User authentication and authorization
- Complaint submission and tracking
- Real-time status updates
- Email notifications
- Basic analytics dashboard
- Role-based access control

### 🔄 In Progress
- Advanced analytics with machine learning
- Mobile application
- SMS notifications
- Integration with university systems
- Multi-language support

### 📋 Planned Features
- AI-powered complaint categorization
- Chatbot for initial triage
- Predictive maintenance alerts
- Advanced reporting and BI
- Integration with other departments

---

## 🧪 Testing

### Run Tests
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

### Manual Testing Checklist
- [ ] User registration and login
- [ ] Complaint submission
- [ ] Status updates and notifications
- [ ] Admin dashboard functionality
- [ ] Email notifications
- [ ] File upload functionality
- [ ] Mobile responsiveness

---

## 🚀 Deployment

### Local Deployment (Development)
Use XAMPP for local development with MySQL database.

### Production Deployment Options

#### Option 1: Cloud Platform (Recommended)
- **Backend**: Heroku, AWS EC2, or DigitalOcean
- **Frontend**: Vercel, Netlify, or AWS S3
- **Database**: AWS RDS, Google Cloud SQL, or managed MySQL

#### Option 2: On-Premises
- Deploy on university servers
- Use existing IT infrastructure
- Integrate with university authentication systems

### Deployment Checklist
- [ ] Environment variables configured
- [ ] SSL certificate installed
- [ ] Database backups automated
- [ ] Error monitoring set up
- [ ] Performance monitoring enabled
- [ ] Security audit completed
- [ ] User training conducted

---

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for password security
- **Input Validation**: Comprehensive validation on all inputs
- **SQL Injection Protection**: Parameterized queries
- **XSS Protection**: Content sanitization
- **CORS Configuration**: Proper cross-origin resource sharing
- **Rate Limiting**: Prevent API abuse
- **HTTPS**: Encrypted communication

---

## 📊 Performance Metrics

### Target KPIs
- **Response Time**: < 4 hours average
- **Resolution Time**: < 48 hours average
- **User Satisfaction**: > 4.0/5.0
- **System Uptime**: > 99.5%
- **User Adoption**: > 80% of students

### Monitoring
- Real-time performance dashboards
- Automated alerts for system issues
- Regular performance reports
- User feedback collection

---

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow ESLint configuration
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Write tests for new features

---

## 📝 License

This project is part of an academic course (ITPE 104) and is intended for educational purposes.

---

## 📞 Support

### Technical Support
- **Documentation**: Check the documentation files first
- **Issues**: Report bugs in the GitHub Issues section
- **Email**: [your-email@university.edu](mailto:your-email@university.edu)

### User Support
- **Help Desk**: Available Monday-Friday, 9 AM - 5 PM
- **FAQ**: Check the knowledge base for common issues
- **Training**: Regular training sessions available

---

## 🙏 Acknowledgments

- **Course Instructor**: [Instructor Name]
- **University IT Department**: For guidance and support
- **Beta Testers**: Students and staff who provided feedback
- **Open Source Community**: For the amazing tools and libraries

---

## 📈 Project Timeline

### Phase 1: Foundation (Weeks 1-2) ✅
- Project setup and planning
- Database design and implementation
- Basic authentication system

### Phase 2: Core Features (Weeks 3-4) ✅
- Complaint management system
- User dashboards
- Email notifications

### Phase 3: Advanced Features (Weeks 5-6) 🔄
- Analytics and reporting
- Decision support algorithms
- Mobile responsiveness

### Phase 4: Testing & Deployment (Weeks 7-8) 📋
- Comprehensive testing
- Performance optimization
- Production deployment

---

## 🔄 Recent Updates

### Version 1.2.0 (April 7, 2026)
- ✅ Updated accomplishment report format
- ✅ Created comprehensive API documentation
- ✅ Added implementation guide
- ✅ Enhanced system documentation

### Version 1.1.0 (April 1, 2026)
- Added real-time notifications
- Improved dashboard analytics
- Enhanced security features
- Bug fixes and performance improvements

### Version 1.0.0 (March 15, 2026)
- Initial release
- Core complaint tracking functionality
- Basic user management
- Foundation for future enhancements

---

## 📊 System Statistics

- **Total Lines of Code**: 15,000+
- **Database Tables**: 5 core tables
- **API Endpoints**: 20+ endpoints
- **React Components**: 25+ components
- **Test Coverage**: 78%
- **Active Users**: 500+ (projected)

---

**Built with ❤️ by Group 3 for ITPE 104 - Integration Programming 2**

*Last Updated: April 7, 2026*