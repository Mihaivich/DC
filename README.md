# Diversity Connected Website Redesign

**ITC4850: Information Technology Project - Capstone Course**  
Northeastern University | Fall 2025


## 📋 Project Overview

This repository contains the capstone project for ITC4850, where our team redesigned and rebuilt the Diversity Connected website using modern web technologies. This project represents the capstone of our IT program, combining technical skills with real-world project management practices.

### Course Objectives
- Execute a complete IT project in a collaborative team environment
- Apply skills from across the IT discipline to solve real-world problems
- Demonstrate effective project management and team coordination
- Deliver a production-ready solution with proper documentation


## 🌐 Project Status

**Current Phase**: Development in Progress  
**Deployment**: Live on Netlify at [https://diversityconnected.netlify.app/](https://diversityconnected.netlify.app/)

> **Note**: This redesigned website is an independent educational project created for ITC4850. Due to lack of sponsor response, this version has no official affiliation with Diversity Connected organization.


## 🎯 Project Goals

### Primary Objective
Redesign and rebuild the Diversity Connected website using a modern React-based technology stack to address critical performance, maintainability, and user experience issues present in the legacy WordPress implementation.

### Key Improvements
- **Performance**: Eliminate frontend bloat and reduce page load times
- **Modern Stack**: Migrate from outdated PHP/WordPress to React ecosystem
- **Maintainability**: Replace complex page builder dependencies with clean, maintainable code
- **Responsiveness**: Ensure optimal user experience across all devices
- **Security**: Move away from end-of-life PHP 7.4 to modern, secure technologies

## 🛠️ Technology Stack

### Legacy Stack (Original Website)
- **CMS**: WordPress 6.7.2 with Elementor 3.28.3
- **Backend**: PHP 7.4.33 (End-of-Life) + MySQL
- **Frontend**: jQuery, Backbone.js, multiple legacy libraries
- **Theme**: Astra 4.8.13

**Critical Issues Identified:**
- Outdated PHP version (no security updates)
- Heavy frontend bloat from Elementor
- Multiple redundant JavaScript libraries
- Poor performance optimization
- Suboptimal mobile responsiveness

### New Stack (Redesigned Website)
- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Routing**: React Router DOM 7.9.4
- **Styling**: TailwindCSS 3.x (Utility-first CSS framework)
- **Component Architecture**: Modular, reusable component design
- **Icons**: Font Awesome
- **Performance**: Optimized asset loading and code splitting
- **Responsive Design**: Mobile-first approach with TailwindCSS responsive utilities
- **Deployment**: Netlify (Continuous Deployment)


## 🏗️ Architecture & Design Improvements

### TailwindCSS Migration
The project underwent a complete styling migration from CSS modules to TailwindCSS, bringing significant benefits:

- **Utility-First Approach**: Replaced custom CSS with utility classes for faster development
- **Consistent Design System**: Unified spacing, colors, and typography across all components
- **Reduced Bundle Size**: Eliminated unused CSS through TailwindCSS's purge functionality
- **Enhanced Responsiveness**: Leveraged TailwindCSS's responsive utilities for better mobile experience
- **Developer Experience**: Improved maintainability with inline styling approach

### Component-Based Architecture
Implemented a modular component system to improve code reusability and maintainability:

#### Core Components Created:
- **ServiceCard**: Reusable service display cards with icons, titles, descriptions, and feature lists
- **ProcessStep**: Numbered process step components for workflow visualization
- **StatCard**: Statistical display cards with main numbers, titles, and subtitles
- **TeamMember**: Team member profile cards with avatars, names, and positions
- **ContactInfo**: Contact information display components with icons, titles, and content
- **PageHeader**: Consistent page header component with titles and descriptions

#### Benefits Achieved:
- **Code Reduction**: Eliminated ~400 lines of repetitive code across pages
- **Consistency**: Ensured uniform styling and behavior across similar elements
- **Maintainability**: Centralized component logic for easier updates and bug fixes
- **Scalability**: Easy to extend and modify components for future requirements
- **Reusability**: Components can be easily reused across different pages and contexts


## 👥 Team & Project Management

### Collaboration Tools
- **Project Management**: Jira
- **Version Control**: Git/GitHub
- **Communication**: Discord

### Project Methodology
This project follows **Agile methodology** with emphasis on:
- Sprint planning and execution
- Task tracking and burndown charts
- Code reviews and quality assurance
- Team collaboration and communication
- Stakeholder management
- Iterative development and continuous improvement

## 🚀 Getting Started

### Prerequisites
```bash
Node.js (v18 or higher)
pnpm (recommended) or npm
Git
```

### Installation
```bash
# Clone the repository
git clone https://github.com/Mihaivich/DC.git

# Navigate to project directory
cd DC

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Available Scripts
```bash
pnpm run dev       # Run development server (http://localhost:5173)
pnpm run build     # Create production build
pnpm run lint      # Run ESLint for code quality
pnpm run preview   # Preview production build locally
```

### Deployment
The project is automatically deployed to Netlify on every push to the main branch.


## 📁 Project Structure

```
DC/
├── public/              # Static assets
├── src/
│   ├── components/      # React components (Navbar, Footer)
│   ├── pages/          # Page components (Home, About, etc.)
│   ├── assets/         # Images, fonts, etc.
│   ├── styles/         # CSS/styling files
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies and scripts
├── pnpm-lock.yaml      # Lock file for pnpm
└── README.md           # Project documentation
```

## 🔍 Key Features

- **Modern React Architecture**: Component-based design for better maintainability
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **Fully Responsive**: Mobile-first design ensuring great UX on all devices
- **Accessible**: WCAG compliance for inclusive user experience
- **SEO Friendly**: Proper meta tags and semantic HTML structure


## 🤝 Contributing

This is an academic project for ITC4850. Team members should follow these guidelines:

1. Create a feature branch from `main`
2. Make your changes and commit with clear messages
3. Submit a pull request for review
4. Ensure all tests pass before merging
5. Update Jira tickets accordingly

### Commit Message Convention
```
feat: Add new feature
fix: Bug fix
docs: Documentation changes
style: Code style changes
refactor: Code refactoring
test: Test additions or changes
chore: Build process or auxiliary tool changes
```

## 🎓 Learning Outcomes

Through this project, team members developed skills in:
- Full-stack web development with React
- Project management using Agile methodologies
- Team collaboration and version control
- Technical documentation and communication
- Problem-solving and critical thinking
- Quality assurance and testing strategies

## 📝 License

This project is created for educational purposes as part of the ITC4850 capstone course at Northeastern University.

## 👨‍🏫 Course Information

**Course**: ITC4850 - Information Technology Project  
**Institution**: Northeastern University  
**Semester**: Fall 2025  
**Instructor**: Professor David Leussler  
**Methodology**: Agile Project Management

## 📞 Contact

For questions about this project, please contact the team through:
- GitHub Issues
- Jira Project Board

---

**Northeastern University** | Information Technology Program