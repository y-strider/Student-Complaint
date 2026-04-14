// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Update icon
            const icon = mobileMenuBtn.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (nav && nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            nav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Form validation
    const complaintForm = document.getElementById('complaintForm');
    if (complaintForm) {
        complaintForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const category = document.getElementById('category').value;
            const priority = document.getElementById('priority').value;
            const subject = document.getElementById('subject').value;
            const description = document.getElementById('description').value;
            
            // Validate
            if (!category || !subject || !description) {
                showAlert('Please fill in all required fields', 'error');
                return;
            }
            
            // Generate tracking number
            const trackingNumber = 'CMP-' + new Date().getFullYear() + '-' + 
                Math.floor(Math.random() * 100000).toString().padStart(5, '0');
            
            // Show success message
            showSuccess(trackingNumber);
        });
    }
    
    // Track complaint form
    const trackForm = document.getElementById('trackForm');
    if (trackForm) {
        trackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const trackingNumber = document.getElementById('trackingNumber').value.trim();
            
            if (!trackingNumber) {
                showAlert('Please enter a tracking number', 'error');
                return;
            }
            
            // Simulate finding complaint
            if (trackingNumber.startsWith('CMP-')) {
                showTrackingResult(trackingNumber);
            } else {
                showAlert('Complaint not found. Please check your tracking number.', 'error');
            }
        });
    }
    
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (!email || !password) {
                showAlert('Please enter email and password', 'error');
                return;
            }
            
            // Simulate login (redirect to dashboard)
            window.location.href = 'dashboard.html';
        });
    }
});

// Show alert message
function showAlert(message, type) {
    const alertContainer = document.getElementById('alertContainer');
    if (!alertContainer) return;
    
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    alertContainer.innerHTML = '';
    alertContainer.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// Show success with tracking number
function showSuccess(trackingNumber) {
    const formContainer = document.querySelector('.form-container');
    if (!formContainer) return;
    
    formContainer.innerHTML = `
        <div class="form-card">
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i>
                <span>Complaint submitted successfully!</span>
            </div>
            <div class="success-content text-center mt-4">
                <i class="fas fa-ticket-alt" style="font-size: 4rem; color: var(--primary-color); margin-bottom: 1rem;"></i>
                <h2 style="color: var(--gray-900); margin-bottom: 1rem;">Your Complaint Has Been Submitted</h2>
                <p style="color: var(--gray-600); margin-bottom: 2rem;">Please save your tracking number to monitor your complaint status.</p>
                <div style="background: var(--gray-100); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 2rem;">
                    <p style="color: var(--gray-600); margin-bottom: 0.5rem;">Tracking Number:</p>
                    <p style="font-size: 2rem; font-weight: 700; color: var(--primary-color);">${trackingNumber}</p>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="track-complaint.html" class="btn btn-primary">
                        <i class="fas fa-search"></i> Track Complaint
                    </a>
                    <a href="index.html" class="btn btn-secondary">
                        <i class="fas fa-home"></i> Back to Home
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Show tracking result
function showTrackingResult(trackingNumber) {
    const trackResult = document.getElementById('trackResult');
    if (!trackResult) return;
    
    trackResult.innerHTML = `
        <div class="track-result">
            <div class="alert alert-info mb-3">
                <i class="fas fa-info-circle"></i>
                <span>Tracking Number: ${trackingNumber}</span>
            </div>
            
            <div class="complaint-details" style="background: var(--white); padding: 2rem; border-radius: var(--radius-lg); margin-bottom: 2rem;">
                <h3 style="color: var(--gray-900); margin-bottom: 1rem;">Complaint Details</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <p style="color: var(--gray-500); font-size: 0.9rem;">Category:</p>
                        <p style="font-weight: 500;">Network Issues</p>
                    </div>
                    <div>
                        <p style="color: var(--gray-500); font-size: 0.9rem;">Priority:</p>
                        <span class="priority-badge priority-high">High</span>
                    </div>
                    <div>
                        <p style="color: var(--gray-500); font-size: 0.9rem;">Submitted:</p>
                        <p style="font-weight: 500;">April 5, 2026</p>
                    </div>
                    <div>
                        <p style="color: var(--gray-500); font-size: 0.9rem;">Status:</p>
                        <span class="status-badge status-in_progress">In Progress</span>
                    </div>
                </div>
            </div>
            
            <h3 style="color: var(--gray-900); margin-bottom: 1.5rem;">Progress Timeline</h3>
            <div class="timeline">
                <div class="timeline-item completed">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h4>Complaint Submitted</h4>
                        <p>Your complaint has been received and registered in our system.</p>
                        <span class="timeline-date">April 5, 2026 at 10:30 AM</span>
                    </div>
                </div>
                
                <div class="timeline-item completed">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h4>Acknowledged</h4>
                        <p>Your complaint has been acknowledged by our support team.</p>
                        <span class="timeline-date">April 5, 2026 at 11:15 AM</span>
                    </div>
                </div>
                
                <div class="timeline-item active">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h4>In Progress</h4>
                        <p>Our technical team is currently working on resolving your issue.</p>
                        <span class="timeline-date">April 6, 2026 at 9:00 AM</span>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h4>Resolved</h4>
                        <p>Issue resolved and solution implemented.</p>
                        <span class="timeline-date">Pending</span>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h4>Closed</h4>
                        <p>Complaint closed after confirmation.</p>
                        <span class="timeline-date">Pending</span>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 2rem; text-align: center;">
                <a href="track-complaint.html" class="btn btn-secondary">
                    <i class="fas fa-search"></i> Track Another
                </a>
            </div>
        </div>
    `;
}

// Animate stats on scroll
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = stat.textContent;
        const hasPlus = target.includes('+');
        const hasPercent = target.includes('%');
        const hasHours = target.includes('hrs');
        const has247 = target.includes('24/7');
        
        let numValue = parseInt(target.replace(/[^0-9]/g, ''));
        
        if (has247) return; // Skip 24/7
        
        let current = 0;
        const increment = numValue / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= numValue) {
                current = numValue;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current);
            if (hasPlus) displayValue += '+';
            if (hasPercent) displayValue += '%';
            if (hasHours) displayValue = current.toFixed(1) + ' hrs';
            
            stat.textContent = displayValue;
        }, 30);
    });
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stats')) {
                animateStats();
            }
            entry.target.classList.add('animate-in');
        }
    });
}, { threshold: 0.1 });

// Observe elements
document.querySelectorAll('.feature-card, .step, .category-card, .stats').forEach(el => {
    observer.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to current nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});