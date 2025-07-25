/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #1a202c;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

/* Navigation */
.navbar {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #4a5568;
}

.nav-menu {
    display: flex;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: #4a5568;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-link:hover {
    color: #667eea;
}

.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: #667eea;
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 10rem 2rem 6rem;
    margin-top: 70px;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    pointer-events: none;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.author {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 25px;
    display: inline-block;
    font-size: 0.9rem;
}

/* Main Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background: white;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
}

/* Sections */
.section {
    margin-bottom: 4rem;
    scroll-margin-top: 100px;
}

.section h2 {
    font-size: 2.5rem;
    color: #2d3748;
    margin-bottom: 2rem;
    border-bottom: 3px solid #667eea;
    padding-bottom: 0.5rem;
    display: inline-block;
}

/* Topics */
.topic {
    margin-bottom: 3rem;
    background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
    border-radius: 16px;
    padding: 2.5rem;
    border: 1px solid rgba(102, 126, 234, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.topic::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    transition: width 0.3s ease;
}

.topic:hover::before {
    width: 8px;
}

.topic:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.2);
}

.topic h3 {
    font-size: 1.5rem;
    color: #2d3748;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
}

.topic h3::before {
    content: '▶';
    color: #667eea;
    margin-right: 0.5rem;
    font-size: 0.8rem;
}

.topic p {
    color: #4a5568;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
}

/* Code Containers */
.code-container {
    background: #2d3748;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    position: relative;
}

.code-container::before {
    content: '⚡ Python';
    position: absolute;
    top: 0;
    right: 0;
    background: #667eea;
    color: white;
    padding: 0.25rem 0.75rem;
    font-size: 0.8rem;
    border-bottom-left-radius: 8px;
    z-index: 2;
}

pre {
    margin: 0;
    padding: 1.5rem;
    overflow-x: auto;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    font-size: 0.9rem;
    line-height: 1.5;
}

code {
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
}

/* Prism.js Theme Overrides */
pre[class*="language-"] {
    background: #2d3748;
    color: #e2e8f0;
}

.token.comment {
    color: #718096;
}

.token.string {
    color: #68d391;
}

.token.number {
    color: #fbb6ce;
}

.token.keyword {
    color: #90cdf4;
}

.token.function {
    color: #faf089;
}

.token.operator {
    color: #fc8181;
}

/* Practice Section */
.practice-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.practice-card {
    background: linear-gradient(145deg, #f7fafc 0%, #edf2f7 100%);
    border: 2px solid #e2e8f0;
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
}

.practice-card:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
}

.practice-card h3 {
    color: #2d3748;
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

.practice-card ul {
    list-style: none;
    padding: 0;
}

.practice-card li {
    padding: 0.5rem 0;
    color: #4a5568;
    position: relative;
    padding-left: 1.5rem;
}

.practice-card li::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: #667eea;
    font-size: 0.8rem;
}

/* Tips Section */
.tips-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.tip-card {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.tip-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
}

.tip-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.15);
}

.tip-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: block;
}

.tip-card h3 {
    color: #2d3748;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.tip-card p {
    color: #4a5568;
    font-size: 0.95rem;
    line-height: 1.6;
}

/* Journey Path */
.journey-path {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.path-step {
    background: white;
    border-radius: 16px;
    padding: 1.5rem;
    text-align: center;
    border: 2px solid #e2e8f0;
    transition: all 0.3s ease;
    position: relative;
}

.path-step.completed {
    border-color: #48bb78;
    background: linear-gradient(145deg, #f0fff4 0%, #c6f6d5 100%);
}

.path-step.next {
    border-color: #667eea;
    background: linear-gradient(145deg, #ebf4ff 0%, #bee3f8 100%);
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
}

.path-step:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.step-number {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #e2e8f0;
    color: #4a5568;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    font-weight: bold;
    font-size: 1.1rem;
}

.path-step.completed .step-number {
    background: #48bb78;
    color: white;
}

.path-step.next .step-number {
    background: #667eea;
    color: white;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.path-step h3 {
    color: #2d3748;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.path-step p {
    color: #4a5568;
    font-size: 0.9rem;
    margin: 0;
}

/* Footer */
.footer {
    background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
    color: white;
    text-align: center;
    padding: 3rem 2rem;
    margin-top: 4rem;
    position: relative;
}

.footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #667eea, transparent);
}

.footer-content p {
    margin-bottom: 0.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-container {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }

    .nav-menu {
        gap: 1rem;
    }

    .hero {
        padding: 8rem 1rem 4rem;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }

    .hero-content p {
        font-size: 1rem;
    }

    .container {
        padding: 1rem;
        border-radius: 10px 10px 0 0;
    }

    .section h2 {
        font-size: 2rem;
    }

    .topic {
        padding: 1.5rem;
    }

    pre {
        padding: 1rem;
        font-size: 0.8rem;
    }

    .practice-grid,
    .tips-container,
    .journey-path {
        grid-template-columns: 1fr;
    }

    .path-step.next {
        transform: none;
    }
}

@media (max-width: 480px) {
    .hero {
        padding: 7rem 1rem 3rem;
    }

    .hero-content h1 {
        font-size: 2rem;
    }

    .section h2 {
        font-size: 1.8rem;
    }

    .topic {
        padding: 1.25rem;
    }

    .topic h3 {
        font-size: 1.3rem;
    }

    .nav-menu {
        flex-wrap: wrap;
        justify-content: center;
    }

    .tip-card,
    .practice-card {
        padding: 1.5rem;
    }
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Loading Animation */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.topic {
    animation: fadeInUp 0.6s ease-out;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #667eea;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #5a67d8;
}
