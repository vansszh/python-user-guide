// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize syntax highlighting
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }

    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('.section');
    const navLinksArray = Array.from(navLinks);

    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinksArray.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Copy code functionality
    function addCopyButtons() {
        const codeBlocks = document.querySelectorAll('.code-container');
        
        codeBlocks.forEach(container => {
            const copyButton = document.createElement('button');
            copyButton.innerHTML = '📋 Copy';
            copyButton.className = 'copy-btn';
            copyButton.style.cssText = `
                position: absolute;
                top: 10px;
                left: 10px;
                background: rgba(255, 255, 255, 0.1);
                color: white;
                border: 1px solid rgba(255, 255, 255, 0.2);
                padding: 5px 10px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
                transition: all 0.3s ease;
                z-index: 3;
            `;

            copyButton.addEventListener('mouseenter', function() {
                this.style.background = 'rgba(255, 255, 255, 0.2)';
            });

            copyButton.addEventListener('mouseleave', function() {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            });

            copyButton.addEventListener('click', function() {
                const code = container.querySelector('code');
                const text = code.textContent;
                
                navigator.clipboard.writeText(text).then(() => {
                    this.innerHTML = '✅ Copied!';
                    this.style.background = '#48bb78';
                    
                    setTimeout(() => {
                        this.innerHTML = '📋 Copy';
                        this.style.background = 'rgba(255, 255, 255, 0.1)';
                    }, 2000);
                }).catch(() => {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = text;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    
                    this.innerHTML = '✅ Copied!';
                    setTimeout(() => {
                        this.innerHTML = '📋 Copy';
                    }, 2000);
                });
            });

            container.style.position = 'relative';
            container.appendChild(copyButton);
        });
    }

    // Add copy buttons after a short delay to ensure DOM is ready
    setTimeout(addCopyButtons, 100);

    // Interactive code examples
    function makeCodeInteractive() {
        const interactiveExamples = [
            {
                selector: 'code:contains("input(")',
                action: function(codeElement) {
                    // Add a note about interactive examples
                    const note = document.createElement('div');
                    note.className = 'interactive-note';
                    note.innerHTML = '💡 <strong>Try it:</strong> This code requires user input when run!';
                    note.style.cssText = `
                        background: #fef5e7;
                        border: 1px solid #f6ad55;
                        color: #744210;
                        padding: 8px 12px;
                        border-radius: 4px;
                        margin-top: 10px;
                        font-size: 14px;
                    `;
                    codeElement.closest('.code-container').appendChild(note);
                }
            }
        ];

        // This is a simplified version - in a real implementation,
        // you might want to use a more sophisticated approach
        document.querySelectorAll('code').forEach(code => {
            if (code.textContent.includes('input(')) {
                const note = document.createElement('div');
                note.className = 'interactive-note';
                note.innerHTML = '💡 <strong>Interactive:</strong> This code requires user input when run!';
                note.style.cssText = `
                    background: #fef5e7;
                    border: 1px solid #f6ad55;
                    color: #744210;
                    padding: 8px 12px;
                    border-radius: 4px;
                    margin-top: 10px;
                    font-size: 14px;
                `;
                code.closest('.code-container').appendChild(note);
            }
        });
    }

    setTimeout(makeCodeInteractive, 200);

    // Progress indicator
    function createProgressIndicator() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 70px;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            z-index: 1001;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);

        function updateProgress() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        }

        window.addEventListener('scroll', updateProgress);
    }

    createProgressIndicator();

    // Mobile menu toggle (if needed in future)
    function setupMobileMenu() {
        const navbar = document.querySelector('.navbar');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            lastScrollY = window.scrollY;
        });
    }

    setupMobileMenu();

    // Add loading animation to topics
    function animateOnScroll() {
        const topics = document.querySelectorAll('.topic');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        topics.forEach(topic => {
            topic.style.opacity = '0';
            topic.style.transform = 'translateY(30px)';
            topic.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(topic);
        });
    }

    animateOnScroll();

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K to focus search (if implemented)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            // Future: implement search functionality
        }
        
        // Escape to close any modals (if implemented)
        if (e.key === 'Escape') {
            // Future: close modals or overlays
        }
    });

    // Add tooltips to navigation links
    navLinks.forEach(link => {
        const tooltip = document.createElement('div');
        tooltip.className = 'nav-tooltip';
        tooltip.textContent = link.textContent;
        tooltip.style.cssText = `
            position: absolute;
            bottom: -35px;
            left: 50%;
            transform: translateX(-50%);
            background: #2d3748;
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
            white-space: nowrap;
        `;

        link.style.position = 'relative';
        link.appendChild(tooltip);

        link.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
        });

        link.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    });

    // Console welcome message
    console.log(`
    🐍 Welcome to the Python Tutorial!
    
    Made with ❤️ by viktorexe
    
    This interactive tutorial will help you learn Python from scratch.
    Feel free to copy any code examples and try them out!
    
    Happy coding! 🚀
    `);
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Theme toggle (for future implementation)
function toggleTheme() {
    // Future: implement dark/light theme toggle
    console.log('Theme toggle - coming soon!');
}

// Search functionality (for future implementation)
function searchContent(query) {
    // Future: implement content search
    console.log('Search functionality - coming soon!');
}