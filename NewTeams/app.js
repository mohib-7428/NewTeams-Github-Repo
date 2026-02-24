// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Hide all views
        document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
        
        // Show selected view
        const viewName = this.getAttribute('data-view');
        document.getElementById(viewName).classList.add('active');
    });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
let isDarkTheme = false;

themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = isDarkTheme ? '☀️ Light Mode' : '🌙 Dark Mode';
    
    // Save preference
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    isDarkTheme = true;
    document.body.classList.add('dark-theme');
    themeToggle.textContent = '☀️ Light Mode';
}

// Chat functionality
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const messageContainer = document.getElementById('messageContainer');

function addMessage(text, isSent = true) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isSent ? 'sent' : 'received'}`;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${text}</p>
            <span class="message-time">${timeString}</span>
        </div>
    `;
    
    messageContainer.appendChild(messageDiv);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

sendMessage.addEventListener('click', () => {
    const text = chatInput.value.trim();
    if (text) {
        addMessage(text, true);
        chatInput.value = '';
        
        // Simulate response
        setTimeout(() => {
            const responses = [
                "Thanks for the message!",
                "Got it, I'll look into that.",
                "Sounds good!",
                "Let me check and get back to you.",
                "Perfect, thanks for the update!"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, false);
        }, 1000);
    }
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage.click();
    }
});

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    console.log('Searching for:', searchTerm);
    // Add your search logic here
});

// Calendar generation
function generateCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Days of week header
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.textContent = day;
        dayHeader.style.fontWeight = '600';
        dayHeader.style.textAlign = 'center';
        dayHeader.style.padding = '10px';
        dayHeader.style.color = 'var(--text-secondary)';
        calendarGrid.appendChild(dayHeader);
    });
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.style.padding = '15px';
        calendarGrid.appendChild(emptyCell);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = day;
        dayCell.style.padding = '15px';
        dayCell.style.textAlign = 'center';
        dayCell.style.borderRadius = '6px';
        dayCell.style.cursor = 'pointer';
        
        // Highlight today
        if (day === currentDate.getDate()) {
            dayCell.style.backgroundColor = 'var(--primary-color)';
            dayCell.style.color = 'white';
            dayCell.style.fontWeight = '600';
        } else {
            dayCell.style.backgroundColor = 'var(--hover-bg)';
        }
        
        dayCell.addEventListener('mouseenter', () => {
            if (day !== currentDate.getDate()) {
                dayCell.style.backgroundColor = 'var(--border-color)';
            }
        });
        
        dayCell.addEventListener('mouseleave', () => {
            if (day !== currentDate.getDate()) {
                dayCell.style.backgroundColor = 'var(--hover-bg)';
            }
        });
        
        calendarGrid.appendChild(dayCell);
    }
}

// Month navigation
let currentMonth = new Date();

document.getElementById('prevMonth')?.addEventListener('click', () => {
    currentMonth.setMonth(currentMonth.getMonth() - 1);
    updateCalendar();
});

document.getElementById('nextMonth')?.addEventListener('click', () => {
    currentMonth.setMonth(currentMonth.getMonth() + 1);
    updateCalendar();
});

function updateCalendar() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementById('currentMonth').textContent = 
        `${monthNames[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`;
    
    const calendarGrid = document.getElementById('calendarGrid');
    calendarGrid.innerHTML = '';
    generateCalendar();
}

// Initialize calendar
if (document.getElementById('calendarGrid')) {
    generateCalendar();
}

// User name prompt
window.addEventListener('load', () => {
    let userName = localStorage.getItem('userName');
    
    if (!userName) {
        userName = prompt('Welcome to NewTeams! What\'s your name?', 'Guest User');
        if (userName) {
            localStorage.setItem('userName', userName);
        } else {
            userName = 'Guest User';
        }
    }
    
    document.getElementById('userName').textContent = userName;
});

// File filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// App buttons
document.querySelectorAll('.app-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const appName = this.parentElement.querySelector('h3').textContent;
        alert(`Opening ${appName}...`);
    });
});

// Conversation items click
document.querySelectorAll('.conversation-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.conversation-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        // Update chat header
        const name = this.querySelector('h4').textContent;
        const avatar = this.querySelector('.avatar').textContent;
        document.querySelector('.chat-main .chat-header h3').textContent = name;
        document.querySelector('.chat-main .chat-header .avatar').textContent = avatar;
    });
});

// Add some animations
document.querySelectorAll('.stat-card, .team-card, .app-card').forEach(card => {
    card.style.transition = 'transform 0.2s, box-shadow 0.2s';
    
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    });
});

console.log('NewTeams HTML5 App initialized successfully!');
