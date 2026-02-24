# NewTeams - HTML5 Standalone Version

A fully functional Microsoft Teams-style application built with pure HTML5, CSS3, and JavaScript. **No server required!**

## ✨ Features

- 🏠 **Dashboard** - Overview with stats and recent activity
- 💬 **Chat** - Real-time messaging interface with conversations
- 👥 **Teams** - Team management and channel organization
- 📅 **Calendar** - Interactive calendar with event scheduling
- 📁 **Files** - File management and sharing interface
- ⚡ **Apps** - Integrated app marketplace
- 🌙 **Dark Mode** - Full theme switching support
- 📱 **Responsive** - Works on desktop, tablet, and mobile

## 🚀 How to Run

### Option 1: Direct Open (Simplest)
1. Navigate to the `NewTeams` folder
2. Double-click `index.html`
3. The app opens in your default browser
4. Done! ✅

### Option 2: Live Server (Recommended for Development)
1. Install **VS Code** (if you don't have it)
2. Install "Live Server" extension in VS Code
3. Right-click `index.html` → "Open with Live Server"
4. Enjoy auto-reload on changes!

### Option 3: Python HTTP Server
```bash
cd NewTeams
python -m http.server 8000
# Open browser to http://localhost:8000
```

### Option 4: Node.js HTTP Server
```bash
cd NewTeams
npx http-server
# Open browser to displayed URL
```

## 📂 File Structure

```
NewTeams/
├── index.html          # Main application page
├── styles.css          # All styling and themes
├── app.js              # JavaScript functionality
└── README_HTML5.md     # This file
```

## 🎨 Features Explained

### Navigation
- Click any icon in the left sidebar to switch views
- All navigation is instant and smooth

### Dark Mode
- Click "🌙 Dark Mode" button at the bottom of sidebar
- Theme preference is saved in browser

### Chat
- Type a message and click "Send" or press Enter
- Get automatic responses (simulated)
- Switch conversations in the sidebar

### Calendar
- Use ◀ ▶ buttons to navigate months
- Current day is highlighted
- Click any day to interact

### Teams
- View all your teams and channels
- Each team shows member count and channels

### Files
- Browse files with filters (All, Recent, Shared, Starred)
- See file details in table format

### Apps
- Browse available integrations
- Click "Open" to launch (shows alert for demo)

## 🎯 Customization

### Change Colors
Edit `styles.css` `:root` section:
```css
:root {
    --primary-color: #5B5FC7;  /* Main brand color */
    --success-color: #92C353;  /* Success messages */
    --danger-color: #E74856;   /* Error/warning */
}
```

### Add New Navigation Items
In `index.html`, add to `.sidebar .nav-menu`:
```html
<button class="nav-item" data-view="yourview">
    <span class="icon">🎉</span>
    <span>Your View</span>
</button>
```

Then create the view:
```html
<div id="yourview" class="view">
    <h1>Your Content Here</h1>
</div>
```

### Modify User Name
The app prompts for your name on first load. To reset:
- Open browser console (F12)
- Type: `localStorage.clear()`
- Reload the page

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, CSS Variables
- **Vanilla JavaScript** - No frameworks or libraries
- **LocalStorage** - For saving preferences

### Browser Compatibility
- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Opera (v76+)

### No Dependencies
- Zero npm packages
- Zero build process
- Zero server requirements
- Just open and run!

## 🎓 Learning Resources

This project demonstrates:
- CSS Grid and Flexbox layouts
- CSS custom properties (variables)
- Theme switching with CSS
- DOM manipulation
- Event handling
- LocalStorage API
- Responsive design principles

## 📱 Mobile Support

The app is fully responsive:
- Sidebar collapses on mobile
- Grid layouts adapt to screen size
- Touch-friendly interface
- Optimized for small screens

## 🐛 Known Limitations

- Chat messages are simulated (not real backend)
- File uploads don't actually upload
- Calendar events are static
- No real authentication
- Data is stored locally only

## 🚀 Future Enhancements

Want to extend this? Ideas:
- Connect to real Microsoft Teams API
- Add Firebase for real-time chat
- Implement actual file storage
- Add video call integration
- Create mobile app wrapper (Cordova/Capacitor)
- Add more themes

## 💡 Tips

1. **Bookmark it**: Add to browser favorites for quick access
2. **Fullscreen**: Press F11 for immersive experience
3. **Multiple tabs**: Open different views in different tabs
4. **Export**: Works offline - save to USB drive!

## 🎉 Enjoy!

You now have a fully functional Teams-like app running entirely in your browser. No server, no installation, no configuration needed!

**Just open and use!** 🚀
