OfficeVerse - Employee Dashboard
A sleek, responsive intranet dashboard built with vanilla HTML, CSS, and JavaScript, featuring a captivating space-themed design with an animated starfield background and glassmorphism effects.
🌌 Features

Single-Page Dashboard: Comprehensive employee portal with dedicated sections for key functionalities.
Space-Inspired Theme: Deep blue gradient with animated stars and neon accents.
Responsive Design: Optimized for desktop, tablet, and mobile devices.
Dark/Light Mode: Seamless theme toggle with persistent user preferences.
Glassmorphism UI: Modern, translucent cards and navigation with blur effects.
Interactive Components: Smooth hover animations and transitions.
No Dependencies: Pure vanilla JavaScript, no frameworks required.

📱 Pages

Dashboard: Centralized hub with quick stats and overview.
Events: Interactive calendar for company events.
Announcements: Latest company news and updates.
Directory: Searchable employee contact information.
Resources: Centralized access to company tools and documents.

🚀 Quick Start

Clone the Repository
git clone https://github.com/yourusername/officeverse-dashboard.git
cd officeverse-dashboard


Serve LocallyRun a local server to preview the dashboard:
# Using Python
python3 -m http.server 5000

# Or using npm
npx serve .


Open in BrowserVisit http://localhost:5000 to explore the dashboard.


🛠️ Technology Stack

Frontend: HTML5, CSS3, Vanilla JavaScript
Icons: Font Awesome 6.0.0
Fonts: Google Fonts (Exo 2, Inter)
Build: No build process required, ready for static hosting

🎨 Design Highlights
Cosmic Theme

Animated starfield background with smooth gradient transitions.
Glassmorphism effects on cards, sidebar, and widgets.
Neon color palette with glowing hover effects for a futuristic vibe.

Responsive Layout

Mobile-first design with touch-friendly interactions.
Collapsible sidebar for smaller screens.
Flexible grid system for consistent layouts across devices.

Accessibility

Semantic HTML with ARIA labels for screen reader support.
Keyboard navigation for all interactive elements.
High-contrast text and visuals for readability.

📁 Project Structure
officeverse-dashboard/
├── index.html          # Main dashboard page
├── events.html         # Events and calendar page
├── announcements.html  # Company announcements page
├── directory.html      # Employee directory page
├── resources.html      # Resources and tools page
├── styles.css          # Global styles with theme support
├── script.js           # Core JavaScript functionality
└── README.md           # Project documentation

🌐 Deployment
GitHub Pages

Push the repository to GitHub.
Navigate to Settings > Pages in your repository.
Select Deploy from a branch and choose the main branch.
Access your live site at https://yourusername.github.io/officeverse-dashboard.

Other Hosting Options

Netlify: Drag and drop the project folder or connect via Git.
Vercel: Link your GitHub repository for automatic deployment.
Static Hosting: Upload files to any static file host (e.g., AWS S3, Firebase Hosting).

🔧 Customization
Theme Colors
Modify the color palette in styles.css:
:root {
  --primary-color: #00BFFF; /* Deep Sky Blue */
  --accent-color: #FF69B4;  /* Neon Pink */
  --bg-primary: #0A0B1A;    /* Cosmic Blue */
  /* Customize as needed */
}

Adding Pages

Create a new HTML file using the existing page structure (e.g., template.html).
Update the sidebar navigation in all HTML files to include the new page link.
Add page-specific logic in script.js if required.

Updating Content

Employee Data: Edit directory.html to update employee profiles.
Events: Modify events.html to add or update events in the calendar.
Announcements: Update announcements.html with new posts or news.
Resources: Add tools or documents in resources.html.

🎯 Use Cases

Corporate Intranets: Centralized employee portal for internal communication.
Team Collaboration: Share project updates and team announcements.
Event Management: Organize and display company events.
Resource Hub: Provide access to tools, documents, and links.
Employee Directory: Facilitate contact lookup and team networking.

📄 License
OfficeVerse is open-source and licensed under the MIT License.
🤝 Contributing
We welcome contributions to enhance OfficeVerse! Follow these steps:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a Pull Request with a clear description of your changes.

Please adhere to the Code of Conduct and ensure your code follows the project's styling conventions.
📧 Support
For questions, bug reports, or feature requests, please open an issue on GitHub.
🌟 Acknowledgments

Built with ❤️ using vanilla web technologies.
Inspired by sci-fi aesthetics and modern intranet designs.
Icons provided by Font Awesome.
Fonts sourced from Google Fonts.


Explore the cosmos of productivity with OfficeVerse!