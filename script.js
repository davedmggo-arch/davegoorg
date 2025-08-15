/* styles.css - Complete Stylesheet */

:root {
    --primary-dark: #0A192F;
    --primary-light: #14FFEC;
    --secondary: #172A45;
    --accent: #CCD6F6;
    --text-light: #E6F1FF;
    --success: #64FFDA;
    --warning: #FFB74D;
    --danger: #FF5252;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--primary-dark);
    color: var(--text-light);
    line-height: 1.6;
    overflow-x: hidden;
    padding-top: 60px;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

/* Header Styles */
header {
    background-color: rgba(10, 25, 47, 0.95);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    padding: 10px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    height: 60px;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--primary-light);
}

.logo i {
    font-size: 1.5rem;
}

/* Mobile Menu Toggle */
.menu-toggle {
    display: block;
    background: none;
    border: none;
    color: var(--accent);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    transition: all 0.3s;
}

.menu-toggle:hover {
    background: rgba(20, 255, 236, 0.1);
    color: var(--primary-light);
}

/* Sidebar Navigation */
.sidebar {
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100vh;
    background-color: var(--secondary);
    z-index: 1001;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
    transition: right 0.3s ease;
    overflow-y: auto;
    padding-top: 60px;
}

.sidebar.active {
    right: 0;
}

.sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-light);
}

.sidebar-close {
    background: none;
    border: none;
    color: var(--accent);
    font-size: 1.2rem;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    transition: all 0.3s;
}

.sidebar-close:hover {
    background: rgba(20, 255, 236, 0.1);
    color: var(--primary-light);
}

.sidebar-nav {
    padding: 20px 0;
}

.nav-section {
    margin-bottom: 25px;
}

.nav-section h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--primary-light);
    margin-bottom: 10px;
    padding: 0 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.nav-section ul {
    list-style: none;
}

.nav-section li {
    margin-bottom: 5px;
}

.nav-section a {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    color: var(--accent);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    border-left: 3px solid transparent;
}

.nav-section a:hover {
    background: rgba(20, 255, 236, 0.1);
    color: var(--primary-light);
    border-left-color: var(--primary-light);
    padding-left: 25px;
}

.nav-section a.active {
    background: rgba(20, 255, 236, 0.15);
    color: var(--primary-light);
    border-left-color: var(--primary-light);
    font-weight: 600;
}

.nav-section a::after {
    content: '→';
    position: absolute;
    right: 20px;
    opacity: 0;
    transition: all 0.3s ease;
}

.nav-section a:hover::after {
    opacity: 1;
    right: 15px;
}

/* Main Content Area */
.main-content {
    padding: 15px;
    min-height: calc(100vh - 60px);
}

/* Hero Section */
.hero {
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    overflow: hidden;
    padding-top: 0;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(10, 25, 47, 0.9), rgba(23, 42, 69, 0.85)), url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80');
    background-size: cover;
    background-position: center;
    z-index: -1;
}

.floating-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
}

.shape {
    position: absolute;
    opacity: 0.1;
    border: 2px solid var(--primary-light);
    border-radius: 50%;
}

.shape-1 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 10%;
    animation: float 15s infinite ease-in-out;
}

.shape-2 {
    width: 200px;
    height: 200px;
    top: 60%;
    right: 15%;
    animation: float 12s infinite ease-in-out reverse;
}

.shape-3 {
    width: 150px;
    height: 150px;
    bottom: 15%;
    left: 20%;
    animation: float 18s infinite ease-in-out;
}

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
}

.hero-content {
    max-width: 90%;
    z-index: 2;
    margin: 0 auto;
    padding: 0 15px;
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    background: linear-gradient(to right, var(--primary-light), var(--accent));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 30px rgba(20, 255, 236, 0.3);
}

.hero p {
    font-size: 1rem;
    margin-bottom: 20px;
    color: var(--accent);
}

/* Enhanced Link Styles */
a {
    color: var(--primary-light);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
}

a:hover {
    color: var(--text-light);
}

/* CTA Button */
.cta-button {
    display: inline-block;
    background: linear-gradient(45deg, var(--primary-light), #00D9FF);
    color: var(--primary-dark);
    padding: 15px 30px;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(20, 255, 236, 0.3);
    position: relative;
    overflow: hidden;
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(20, 255, 236, 0.5);
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: left 0.5s ease;
}

.cta-button:hover::before {
    left: 100%;
}

/* Section Styles */
section {
    padding: 40px 0;
}

.section-title {
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--primary-light);
    border-radius: 2px;
}

/* Week Navigation */
.week-navigation {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    flex-wrap: wrap;
    gap: 15px;
}

.week-nav-button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 20px;
    background: rgba(20, 255, 236, 0.1);
    border: 1px solid var(--primary-light);
    color: var(--primary-light);
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.3s;
}

.week-nav-button:hover {
    background: rgba(20, 255, 236, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(20, 255, 236, 0.2);
}

.week-nav-button span {
    color: var(--primary-light);
    font-weight: 500;
    transition: color 0.3s ease;
}

.week-nav-button:hover span {
    color: var(--text-light);
}

.week-nav-button i {
    color: var(--primary-light);
    transition: all 0.3s ease;
}

.week-nav-button:hover i {
    color: var(--text-light);
    transform: scale(1.1);
}

.week-nav-button.prev {
    flex-direction: row;
}

.week-nav-button.next {
    flex-direction: row-reverse;
}

/* Pipeline Roadmap */
.roadmap {
    background-color: var(--secondary);
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.roadmap-timeline {
    position: relative;
    padding: 20px 0;
}

.timeline-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: rgba(20, 255, 236, 0.2);
    transform: translateX(-50%);
}

.timeline-item {
    position: relative;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
}

.timeline-item:nth-child(odd) {
    flex-direction: row-reverse;
}

.timeline-content {
    width: 45%;
    background: rgba(10, 25, 47, 0.7);
    padding: 20px;
    border-radius: 10px;
    border-left: 3px solid var(--primary-light);
    transition: transform 0.3s;
}

.timeline-item:nth-child(odd) .timeline-content {
    border-left: none;
    border-right: 3px solid var(--primary-light);
}

.timeline-content:hover {
    transform: translateY(-5px);
}

.timeline-image {
    width: 100%;
    height: 150px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;
}

.timeline-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.timeline-image img:hover {
    transform: scale(1.05);
}

.timeline-dot {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: var(--primary-light);
    border-radius: 50%;
    border: 4px solid var(--primary-dark);
    z-index: 2;
}

.timeline-date {
    font-family: 'Roboto Mono', monospace;
    color: var(--primary-light);
    font-weight: 500;
    margin-bottom: 5px;
}

.timeline-weight {
    font-family: 'Roboto Mono', monospace;
    color: var(--warning);
    font-weight: 500;
    margin-bottom: 5px;
}

.timeline-title {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.timeline-title a {
    color: var(--primary-light);
    text-decoration: none;
    font-weight: 600;
    display: inline-block;
    position: relative;
    padding-bottom: 3px;
}

.timeline-title a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-light);
    transition: width 0.3s ease;
}

.timeline-title a:hover::after {
    width: 100%;
}

.timeline-title a:hover {
    color: var(--text-light);
}

.timeline-description {
    color: var(--accent);
    font-size: 0.95rem;
}

/* Project Progress */
.progress-container {
    background-color: var(--secondary);
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 30px;
}

.progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    flex-wrap: wrap;
    gap: 10px;
}

.progress-title-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.progress-title {
    font-size: 1.2rem;
}

.progress-subtitle {
    color: var(--accent);
    font-size: 0.85rem;
}

.progress-percentage {
    font-family: 'Roboto Mono', monospace;
    font-size: 1rem;
    color: var(--primary-light);
}

.progress-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 20px;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(to right, var(--primary-light), #00D9FF);
    width: 30%;
    border-radius: 5px;
}

.week-progress {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: 8px;
    margin-top: 20px;
}

.week-item {
    text-align: center;
    position: relative;
}

.week-link {
    display: block;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    padding: 10px;
    border-radius: 8px;
}

.week-link:hover {
    background: rgba(20, 255, 236, 0.1);
    transform: translateY(-3px);
}

.week-item.active .week-link {
    background: rgba(20, 255, 236, 0.15);
    border-radius: 8px;
}

.week-item.completed .week-link {
    opacity: 0.8;
}

.week-number {
    font-family: 'Roboto Mono', monospace;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--primary-light);
}

.week-name {
    font-size: 0.7rem;
    color: var(--accent);
    display: block;
    margin-top: 4px;
}

.week-date {
    font-size: 0.6rem;
    color: var(--accent);
    display: block;
    margin-top: 2px;
}

/* Grade Distribution */
.grade-distribution {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px 0;
}

.grade-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: rgba(10, 25, 47, 0.7);
    border-radius: 10px;
    border-left: 4px solid var(--primary-light);
}

.grade-percentage {
    font-family: 'Roboto Mono', monospace;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-light);
    min-width: 60px;
    text-align: center;
}

.grade-details h4 {
    color: var(--text-light);
    margin-bottom: 5px;
    font-size: 1rem;
}

.grade-details p {
    color: var(--accent);
    font-size: 0.85rem;
}

/* Resources Section */
.resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.resource-card {
    background: var(--secondary);
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.resource-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.resource-header {
    background: rgba(10, 25, 47, 0.7);
    padding: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    gap: 12px;
}

.resource-icon {
    width: 40px;
    height: 40px;
    background: rgba(20, 255, 236, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--primary-light);
}

.resource-title-group {
    flex: 1;
}

.resource-title {
    font-size: 1.1rem;
    margin-bottom: 3px;
}

.resource-description {
    color: var(--accent);
    font-size: 0.85rem;
}

.resource-content {
    padding: 15px;
}

.resource-list {
    list-style: none;
}

.resource-list li {
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
}

.resource-list li:last-child {
    border-bottom: none;
}

.resource-list i {
    color: var(--primary-light);
    margin-right: 10px;
}

.resource-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 15px;
    margin-bottom: 8px;
    background: rgba(10, 25, 47, 0.5);
    border-radius: 8px;
    border-left: 3px solid var(--primary-light);
    transition: all 0.3s ease;
}

.resource-link:hover {
    background: rgba(20, 255, 236, 0.1);
    transform: translateX(5px);
    border-left-color: var(--text-light);
}

.resource-link span {
    color: var(--accent);
    font-weight: 500;
    transition: color 0.3s ease;
}

.resource-link:hover span {
    color: var(--text-light);
}

.resource-link .download-icon {
    color: var(--primary-light);
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.resource-link:hover .download-icon {
    color: var(--text-light);
    transform: translateX(3px);
}

/* Video Tutorials Section */
.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.video-card {
    background: var(--secondary);
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.video-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 8px;
}

.video-container iframe,
.video-container video,
.video-container .video-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
}

.video-info {
    padding: 20px;
}

.video-title {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.video-description {
    color: var(--accent);
    font-size: 0.95rem;
    margin-bottom: 15px;
}

.video-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: var(--accent);
}

/* Student Showcase Section */
.showcase-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.showcase-card {
    background: var(--secondary);
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.showcase-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.showcase-image {
    height: 200px;
    overflow: hidden;
}

.showcase-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.showcase-card:hover .showcase-image img {
    transform: scale(1.05);
}

.showcase-info {
    padding: 20px;
}

.showcase-title {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.showcase-description {
    color: var(--accent);
    font-size: 0.95rem;
    margin-bottom: 15px;
}

.showcase-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: var(--accent);
}

/* Exercises Section */
.exercises-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 20px;
}

.project-selector {
    display: flex;
    align-items: center;
    gap: 15px;
}

.project-selector label {
    font-weight: 600;
    color: var(--primary-light);
}

.project-dropdown {
    background: rgba(20, 255, 236, 0.1);
    border: 1px solid var(--primary-light);
    color: var(--primary-light);
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    transition: all 0.3s;
    min-width: 200px;
}

.project-dropdown:hover {
    background: rgba(20, 255, 236, 0.2);
}

.project-dropdown select {
    background: transparent;
    border: none;
    color: var(--primary-light);
    font-family: inherit;
    font-size: inherit;
    font-weight: 500;
    cursor: pointer;
    outline: none;
    width: 100%;
}

.project-dropdown select option {
    background: var(--secondary);
    color: var(--accent);
}

.exercises-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.exercise-card {
    background: var(--secondary);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
}

.exercise-card:hover {
    transform: translateY(-10px);
}

.exercise-header {
    background: rgba(10, 25, 47, 0.7);
    padding: 20px;
    position: relative;
}

.exercise-difficulty {
    position: absolute;
    top: 20px;
    right: 20px;
    background: var(--primary-dark);
    color: var(--primary-light);
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-family: 'Roboto Mono', monospace;
}

.exercise-title {
    font-size: 1.3rem;
    margin-bottom: 10px;
}

.exercise-description {
    color: var(--accent);
    font-size: 0.95rem;
}

.exercise-content {
    padding: 20px;
}

.exercise-preview {
    height: 150px;
    background: rgba(10, 25, 47, 0.5);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    overflow: hidden;
}

.exercise-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.exercise-stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.stat {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--accent);
    font-size: 0.9rem;
}

.stat i {
    color: var(--primary-light);
}

.exercise-buttons {
    display: flex;
    gap: 10px;
}

.exercise-button {
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    text-align: center;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.download-button {
    background: linear-gradient(45deg, var(--primary-light), #00D9FF);
    color: var(--primary-dark);
}

.download-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(20, 255, 236, 0.3);
}

.solution-button {
    background: var(--success);
    color: var(--primary-dark);
}

.solution-button:hover {
    background: #4CAF50;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
}

/* Footer */
footer {
    background: var(--secondary);
    padding: 30px 0 20px;
    text-align: center;
}

.footer-content {
    margin-bottom: 20px;
}

.footer-logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-light);
    margin-bottom: 10px;
}

.footer-description {
    color: var(--accent);
    max-width: 90%;
    margin: 0 auto 20px;
    font-size: 0.9rem;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 20px;
}

.social-links a {
    color: var(--accent);
    font-size: 1.2rem;
    transition: all 0.3s ease;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    background: rgba(10, 25, 47, 0.5);
}

.social-links a:hover {
    color: var(--primary-light);
    transform: translateY(-5px);
    background: rgba(20, 255, 236, 0.1);
    box-shadow: 0 5px 15px rgba(20, 255, 236, 0.2);
}

.copyright {
    color: var(--accent);
    font-size: 0.8rem;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Footer Links */
footer a {
    color: var(--accent);
    transition: color 0.3s ease;
}

footer a:hover {
    color: var(--primary-light);
}

/* Project Specific Styles */
.project-brief,
.project-overview,
.marking-criteria,
.topics-section,
.techniques-section,
.concepts-grid,
.blender-concepts,
.deliverables-section,
.tools-section,
.timeline-section,
.references-section,
.week-intro,
.exercise-steps {
    background-color: var(--secondary);
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.importance-content {
    background-color: var(--secondary);
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.importance-content h3 {
    color: var(--primary-light);
    margin: 20px 0 10px 0;
}

.importance-content h3:first-child {
    margin-top: 0;
}

.importance-content p {
    color: var(--accent);
    line-height: 1.6;
    margin-bottom: 15px;
    font-size: 0.95rem;
}

.objectives-grid,
.tools-grid,
.concepts-grid,
.blender-grid,
.deliverables-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.objective-card,
.concept-card,
.tool-card,
.deliverable-item,
.blender-card {
    background: rgba(10, 25, 47, 0.7);
    padding: 20px;
    border-radius: 10px;
    border-left: 4px solid var(--primary-light);
    transition: transform 0.3s;
}

.objective-card:hover,
.concept-card:hover,
.tool-card:hover,
.blender-card:hover {
    transform: translateY(-5px);
}

.objective-title,
.concept-title,
.tool-title,
.blender-title {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: var(--text-light);
    display: flex;
    align-items: center;
    gap: 8px;
}

.objective-title i,
.concept-title i,
.tool-title i,
.blender-title i {
    color: var(--primary-light);
}

.objective-description,
.concept-description,
.tool-description,
.blender-description {
    color: var(--accent);
    font-size: 0.9rem;
}

.deliverable-item {
    border-top: 4px solid var(--primary-light);
    text-align: center;
}

.deliverable-icon {
    font-size: 2rem;
    color: var(--primary-light);
    margin-bottom: 10px;
}

.deliverable-title {
    font-size: 1.1rem;
    margin-bottom: 8px;
    color: var(--text-light);
}

.deliverable-description {
    color: var(--accent);
    font-size: 0.85rem;
}

/* Example Box Styles */
.example-box {
    margin-top: 15px;
    padding: 12px;
    background: rgba(10, 25, 47, 0.5);
    border-radius: 8px;
    border-left: 3px solid var(--primary-light);
}

.example-box h5 {
    color: var(--primary-light);
    margin-bottom: 8px;
    font-size: 0.95rem;
}

.example-image {
    width: 100%;
    height: 150px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 8px;
}

.example-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.example-image img:hover {
    transform: scale(1.05);
}

.example-description {
    color: var(--accent);
    font-size: 0.85rem;
}

/* Feature Highlight */
.feature-highlight {
    background: rgba(20, 255, 236, 0.1);
    border: 1px solid var(--primary-light);
    border-radius: 8px;
    padding: 15px;
    margin: 20px 0;
}

.feature-highlight h4 {
    color: var(--primary-light);
    margin-bottom: 10px;
}

.feature-highlight p {
    color: var(--accent);
    margin: 0;
}

/* Steps List */
.steps-list {
    counter-reset: step-counter;
    list-style: none;
    padding: 0;
    margin: 15px 0;
}

.steps-list li {
    position: relative;
    padding: 12px 0 12px 45px;
    counter-increment: step-counter;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.steps-list li:last-child {
    border-bottom: none;
}

.steps-list li::before {
    content: counter(step-counter);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    background: var(--primary-light);
    color: var(--primary-dark);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.9rem;
}

/* Fun Facts */
.fun-facts {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 280px;
    background: rgba(10, 25, 47, 0.9);
    border: 1px solid var(--primary-light);
    border-radius: 10px;
    padding: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s, transform 0.5s;
}

.fun-facts.active {
    opacity: 1;
    transform: translateY(0);
}

.fun-facts-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.fun-facts-title {
    color: var(--primary-light);
    font-weight: 600;
    font-size: 0.95rem;
}

.fun-facts-close {
    background: none;
    border: none;
    color: var(--accent);
    cursor: pointer;
    font-size: 0.9rem;
}

.fun-facts-content {
    color: var(--text-light);
    font-size: 0.85rem;
}

/* Responsive Images */
img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
}

.timeline-image img,
.showcase-image img,
.example-image img,
.resource-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

/* Responsive Design */
@media (max-width: 768px) {
    /* Header adjustments for mobile */
    header {
        height: 60px;
        padding: 8px 0;
    }

    body {
        padding-top: 60px;
    }

    .header-container {
        padding: 0 15px;
    }

    .logo {
        font-size: 1rem;
    }

    .logo i {
        font-size: 1.2rem;
    }

    .menu-toggle {
        font-size: 1.2rem;
        padding: 5px 8px;
    }

    /* Hero section mobile adjustments */
    .hero h1 {
        font-size: 2rem;
        margin-bottom: 15px;
    }

    .hero p {
        font-size: 0.9rem;
        margin-bottom: 20px;
    }

    .cta-button {
        padding: 12px 24px;
        font-size: 0.9rem;
    }

    .section-title {
        font-size: 1.8rem;
        margin-bottom: 25px;
    }

    /* Timeline adjustments */
    .timeline-line {
        left: 30px;
    }

    .timeline-item {
        flex-direction: row !important;
        padding-left: 60px;
    }

    .timeline-item:nth-child(odd) .timeline-content {
        border-left: 3px solid var(--primary-light);
        border-right: none;
    }

    .timeline-dot {
        left: 30px;
    }

    .timeline-content {
        width: 100%;
    }

    .timeline-image {
        height: 120px;
    }

    /* Grade distribution mobile */
    .grade-item {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }

    .grade-percentage {
        font-size: 1.3rem;
    }

    /* Exercises header mobile */
    .exercises-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .project-dropdown {
        min-width: 100%;
    }

    /* Exercise buttons mobile */
    .exercise-buttons {
        flex-direction: column;
    }

    /* Progress header mobile */
    .progress-header {
        flex-direction: column;
        align-items: flex-start;
    }

    /* Week progress mobile */
    .week-progress {
        grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
        gap: 10px;
    }

    .week-item {
        text-align: center;
    }

    .week-number {
        display: block;
        font-size: 1.1rem;
        margin-bottom: 4px;
    }

    .week-name {
        display: block;
        margin-left: 0;
        font-size: 0.65rem;
    }

    .week-date {
        font-size: 0.55rem;
    }

    /* Grid adjustments */
    .resources-grid,
    .video-grid,
    .showcase-grid,
    .exercises-grid,
    .objectives-grid,
    .tools-grid,
    .concepts-grid,
    .blender-grid,
    .deliverables-list {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    /* Card padding adjustments */
    .project-brief,
    .project-overview,
    .marking-criteria,
    .topics-section,
    .techniques-section,
    .concepts-grid,
    .blender-concepts,
    .deliverables-section,
    .tools-section,
    .timeline-section,
    .references-section,
    .week-intro,
    .exercise-steps,
    .importance-content {
        padding: 20px;
    }

    /* Example image mobile */
    .example-image {
        height: 120px;
    }

    /* Footer adjustments */
    footer {
        padding: 25px 0 15px;
    }

    .footer-logo {
        font-size: 1.3rem;
    }

    .social-links {
        gap: 12px;
    }

    .social-links a {
        width: 35px;
        height: 35px;
        line-height: 35px;
        font-size: 1.2rem;
    }
}

@media (max-width: 480px) {
    /* Header adjustments for very small screens */
    header {
        height: 55px;
        padding: 5px 0;
    }

    body {
        padding-top: 55px;
    }

    .header-container {
        padding: 0 10px;
    }

    .logo {
        font-size: 0.9rem;
    }

    .logo i {
        font-size: 1.1rem;
    }

    .menu-toggle {
        font-size: 1.1rem;
        padding: 3px 6px;
    }

    /* Hero section for very small screens */
    .hero h1 {
        font-size: 1.8rem;
        margin-bottom: 12px;
    }

    .hero p {
        font-size: 0.85rem;
        margin-bottom: 15px;
    }

    .cta-button {
        padding: 10px 20px;
        font-size: 0.85rem;
    }

    .section-title {
        font-size: 1.6rem;
        margin-bottom: 20px;
    }

    /* Timeline adjustments */
    .timeline-item {
        padding-left: 45px;
    }

    .timeline-content {
        padding: 12px;
    }

    .timeline-image {
        height: 100px;
    }

    /* Week progress for very small screens */
    .week-progress {
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
    }

    .week-number {
        font-size: 1rem;
    }

    .week-name {
        font-size: 0.6rem;
    }

    .week-date {
        font-size: 0.5rem;
    }

    /* Example image for very small screens */
    .example-image {
        height: 100px;
    }

    /* Grid adjustments */
    .resources-grid,
    .video-grid,
    .showcase-grid,
    .exercises-grid,
    .objectives-grid,
    .tools-grid,
    .concepts-grid,
    .blender-grid,
    .deliverables-list {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    /* Card padding adjustments */
    .project-brief,
    .project-overview,
    .marking-criteria,
    .topics-section,
    .techniques-section,
    .concepts-grid,
    .blender-concepts,
    .deliverables-section,
    .tools-section,
    .timeline-section,
    .references-section,
    .week-intro,
    .exercise-steps,
    .importance-content {
        padding: 15px;
    }

    /* Footer adjustments */
    footer {
        padding: 20px 0 10px;
    }

    .footer-logo {
        font-size: 1.2rem;
    }

    .social-links {
        gap: 10px;
    }

    .social-links a {
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 1rem;
    }
}
