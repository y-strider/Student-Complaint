# API Documentation - Student Complaint Tracking System

## Base URL
```
Development: http://localhost:5000/api
Production: https://your-domain.com/api
```

## Authentication
All authenticated endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## Response Format
All responses are in JSON format with the following structure:
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": { /* response data */ },
  "error": null
}
```

---

## Authentication Endpoints

### 1. User Registration
**POST** `/auth/register`

Registers a new student user.

**Request Body:**
```json
{
  "student_id": "2024-00123",
  "email": "student@university.edu",
  "password": "securePassword123",
  "full_name": "Juan Dela Cruz",
  "department": "Computer Science"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user_id": 1,
    "student_id": "2024-00123",
    "email": "student@university.edu",
    "full_name": "Juan Dela Cruz",
    "role": "student",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Validation error",
  "error": {
    "email": "Email already exists"
  }
}
```

---

### 2. User Login
**POST** `/auth/login`

Authenticates user and returns JWT token.

**Request Body:**
```json
{
  "email": "student@university.edu",
  "password": "securePassword123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user_id": 1,
    "email": "student@university.edu",
    "full_name": "Juan Dela Cruz",
    "role": "student",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

### 3. Password Reset Request
**POST** `/auth/forgot-password`

Sends password reset email.

**Request Body:**
```json
{
  "email": "student@university.edu"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Password reset email sent"
}
```

---

### 4. Password Reset
**POST** `/auth/reset-password/:token`

Resets password using reset token.

**Request Body:**
```json
{
  "password": "newSecurePassword123",
  "confirm_password": "newSecurePassword123"
}
```

---

## Complaint Endpoints

### 1. Submit New Complaint
**POST** `/complaints`

Creates a new complaint ticket.

**Request Body:**
```json
{
  "category": "network",
  "priority": "medium",
  "subject": "WiFi not working in Library",
  "description": "The WiFi connection in the main library keeps dropping every 5 minutes. This has been happening for the past 3 days.",
  "attachments": ["file1.pdf", "screenshot.png"]
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Complaint submitted successfully",
  "data": {
    "complaint_id": 1,
    "tracking_number": "CMP-2024-00001",
    "category": "network",
    "priority": "medium",
    "subject": "WiFi not working in Library",
    "status": "submitted",
    "created_at": "2024-04-07T10:30:00Z",
    "estimated_resolution": "2024-04-09T10:30:00Z"
  }
}
```

---

### 2. Get All Complaints
**GET** `/complaints`

Retrieves complaints with pagination and filters.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `status` (optional): Filter by status
- `category` (optional): Filter by category
- `priority` (optional): Filter by priority
- `date_from` (optional): Filter from date
- `date_to` (optional): Filter to date

**Example:**
```
GET /complaints?status=in_progress&priority=high&page=1&limit=20
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "complaints": [
      {
        "complaint_id": 1,
        "tracking_number": "CMP-2024-00001",
        "subject": "WiFi not working in Library",
        "category": "network",
        "priority": "high",
        "status": "in_progress",
        "assigned_to": 5,
        "assigned_to_name": "IT Staff Member",
        "created_at": "2024-04-07T10:30:00Z",
        "updated_at": "2024-04-07T14:20:00Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 5,
      "total_items": 50,
      "items_per_page": 10
    }
  }
}
```

---

### 3. Get Complaint Details
**GET** `/complaints/:id`

Retrieves detailed information about a specific complaint.

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "complaint_id": 1,
    "tracking_number": "CMP-2024-00001",
    "category": "network",
    "priority": "high",
    "subject": "WiFi not working in Library",
    "description": "The WiFi connection in the main library...",
    "status": "in_progress",
    "submitted_by": {
      "user_id": 1,
      "full_name": "Juan Dela Cruz",
      "email": "student@university.edu"
    },
    "assigned_to": {
      "user_id": 5,
      "full_name": "IT Staff Member",
      "email": "itstaff@university.edu"
    },
    "created_at": "2024-04-07T10:30:00Z",
    "updated_at": "2024-04-07T14:20:00Z",
    "history": [
      {
        "action": "submitted",
        "description": "Complaint submitted",
        "timestamp": "2024-04-07T10:30:00Z",
        "user": "Juan Dela Cruz"
      },
      {
        "action": "assigned",
        "description": "Assigned to IT Staff Member",
        "timestamp": "2024-04-07T11:00:00Z",
        "user": "System"
      }
    ],
    "messages": [
      {
        "message_id": 1,
        "sender": "IT Staff Member",
        "message": "We are investigating the issue",
        "timestamp": "2024-04-07T14:20:00Z"
      }
    ]
  }
}
```

---

### 4. Update Complaint Status
**PUT** `/complaints/:id/status`

Updates the status of a complaint (IT Staff only).

**Request Body:**
```json
{
  "status": "resolved",
  "resolution_notes": "Issue resolved by resetting the access point. WiFi is now stable."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Complaint status updated",
  "data": {
    "complaint_id": 1,
    "status": "resolved",
    "resolved_at": "2024-04-07T16:45:00Z",
    "resolution_notes": "Issue resolved by resetting the access point..."
  }
}
```

---

### 5. Send Message on Complaint
**POST** `/complaints/:id/messages`

Sends a message related to a complaint.

**Request Body:**
```json
{
  "message": "Can you please provide an update on this issue?",
  "is_internal": false
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "data": {
    "message_id": 2,
    "sender": "Juan Dela Cruz",
    "message": "Can you please provide an update on this issue?",
    "timestamp": "2024-04-07T15:30:00Z"
  }
}
```

---

## Analytics Endpoints

### 1. Dashboard Summary
**GET** `/analytics/summary`

Returns summary statistics for dashboard.

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "total_complaints": 150,
    "open_complaints": 25,
    "resolved_this_week": 18,
    "average_response_time": "2.5 hours",
    "average_resolution_time": "24 hours",
    "user_satisfaction": 4.2,
    "complaints_by_category": {
      "network": 45,
      "hardware": 30,
      "software": 25,
      "account": 40,
      "other": 10
    },
    "complaints_by_priority": {
      "low": 40,
      "medium": 60,
      "high": 35,
      "critical": 15
    }
  }
}
```

---

### 2. Complaint Trends
**GET** `/analytics/trends`

Returns complaint trends over time.

**Query Parameters:**
- `period`: day, week, month (default: month)
- `duration`: Number of periods (default: 6)

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "trends": [
      {
        "period": "2024-01",
        "submitted": 25,
        "resolved": 20,
        "average_resolution_hours": 28
      },
      {
        "period": "2024-02",
        "submitted": 30,
        "resolved": 28,
        "average_resolution_hours": 22
      }
    ]
  }
}
```

---

### 3. Staff Performance
**GET** `/analytics/performance`

Returns staff performance metrics.

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "staff_performance": [
      {
        "staff_id": 5,
        "staff_name": "IT Staff Member",
        "complaints_handled": 25,
        "average_response_time": "1.5 hours",
        "average_resolution_time": "18 hours",
        "satisfaction_score": 4.5
      }
    ]
  }
}
```

---

### 4. Generate Report
**GET** `/reports/generate`

Generates a custom report.

**Query Parameters:**
- `type`: summary, detailed, performance
- `date_from`: Start date (YYYY-MM-DD)
- `date_to`: End date (YYYY-MM-DD)
- `format`: pdf, excel, csv (default: pdf)

**Success Response (200):**
```json
{
  "success": true,
  "message": "Report generated successfully",
  "data": {
    "report_url": "/reports/download/report-2024-04-07.pdf",
    "generated_at": "2024-04-07T16:00:00Z"
  }
}
```

---

## User Management Endpoints (Admin Only)

### 1. Get All Users
**GET** `/users`

Retrieves all users with pagination.

**Query Parameters:**
- `role`: Filter by role
- `department`: Filter by department
- `page`: Page number
- `limit`: Items per page

---

### 2. Get User Profile
**GET** `/users/:id`

Retrieves user profile information.

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "user_id": 1,
    "student_id": "2024-00123",
    "email": "student@university.edu",
    "full_name": "Juan Dela Cruz",
    "role": "student",
    "department": "Computer Science",
    "created_at": "2024-01-15T08:00:00Z",
    "complaints_submitted": 5,
    "last_login": "2024-04-07T09:30:00Z"
  }
}
```

---

### 3. Update User Profile
**PUT** `/users/:id`

Updates user profile information.

**Request Body:**
```json
{
  "full_name": "Juan P. Dela Cruz",
  "department": "Information Technology"
}
```

---

### 4. Change User Role
**PUT** `/users/:id/role`

Changes user role (Admin only).

**Request Body:**
```json
{
  "role": "it_staff"
}
```

---

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Invalid or missing token |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource doesn't exist |
| 409 | Conflict - Resource already exists |
| 500 | Internal Server Error |

## Rate Limiting

- **Authentication endpoints**: 5 requests per minute
- **Complaint endpoints**: 30 requests per minute
- **Analytics endpoints**: 10 requests per minute

## WebSocket Events

### Client Events
```javascript
// Join a complaint room for real-time updates
socket.emit('join_complaint', complaintId);

// Send a message
socket.emit('send_message', { complaintId, message });
```

### Server Events
```javascript
// Complaint status updated
socket.on('complaint_updated', (data) => {
  console.log('Complaint updated:', data);
});

// New message received
socket.on('new_message', (data) => {
  console.log('New message:', data);
});

// Real-time notification
socket.on('notification', (data) => {
  console.log('Notification:', data);
});
```

---

## Best Practices

1. **Always include authentication token** for protected endpoints
2. **Handle errors gracefully** with proper error messages
3. **Implement request debouncing** to avoid rate limiting
4. **Use HTTPS** in production environments
5. **Validate all inputs** on both client and server side
6. **Store tokens securely** (not in localStorage for production)
7. **Implement token refresh** mechanism
8. **Log all API calls** for debugging and auditing

This API documentation provides comprehensive details for integrating with the Student Complaint Tracking System.