# OfficeVerse - Employee Dashboard

A modern, responsive intranet dashboard built with vanilla HTML, CSS, and JavaScript. Features a beautiful space-themed design with animated starfield background and glass morphism effects.

## 🌟 Features

- **Multi-page Dashboard**: Complete employee portal with dedicated sections
- **Space Theme**: Dark blue gradient background with animated stars
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Glass Morphism**: Modern UI with backdrop blur effects
- **Interactive Components**: Hover animations and smooth transitions
- **No Dependencies**: Pure vanilla JavaScript - no frameworks required

## 📱 Pages

- **Dashboard**: Welcome screen with quick stats and overview
- **Events**: Company events with interactive calendar
- **Announcements**: Latest company news and updates
- **Directory**: Employee contact information and search
- **Resources**: Company tools, documents, and links

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/officeverse-dashboard.git
   cd officeverse-dashboard
   ```

2. **Open in browser**
   ```bash
   # Simple HTTP server
   python3 -m http.server 5000
   
   # Or use any static file server
   npx serve .
   ```

3. **Visit** `http://localhost:5000`

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Icons**: Font Awesome 6.0.0
- **Fonts**: Google Fonts (Inter)
- **No Build Process**: Ready to deploy as-is

## 🎨 Design Features

### Space Theme
- Deep blue gradient background with animation
- Subtle animated starfield effect
- Glass morphism on cards and navigation
- Professional dark color palette

### Responsive Layout
- Mobile-first design approach
- Collapsible sidebar navigation
- Flexible grid layouts
- Touch-friendly interface

### Accessibility
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast ratios

## 📁 Project Structure

```
officeverse-dashboard/
├── index.html          # Dashboard home page
├── events.html         # Events calendar page
├── announcements.html  # Company announcements
├── directory.html      # Employee directory
├── resources.html      # Resources and tools
├── styles.css          # Global styles and themes
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch" → main
4. Your site will be live at `https://yourusername.github.io/officeverse-dashboard`

### Other Hosting Options
- **Netlify**: Drag and drop deployment
- **Vercel**: Connect GitHub repository
- **Any Static Host**: Upload files directly

## 🔧 Customization

### Changing Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  /* Add your custom colors */
}
```

### Adding New Pages
1. Create new HTML file following existing structure
2. Add navigation link in sidebar
3. Update `script.js` for page-specific functionality

### Modifying Content
- Update employee data in `directory.html`
- Add events in `events.html`
- Customize announcements in `announcements.html`

## 🎯 Use Cases

- **Corporate Intranets**: Employee dashboards and portals
- **Team Collaboration**: Project updates and announcements
- **Event Management**: Company events and calendar
- **Resource Centers**: Document and tool repositories
- **Directory Services**: Employee contact information

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Support

For questions or support, please open an issue in the GitHub repository.

---

**Built with ❤️ using vanilla web technologies**