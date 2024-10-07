
const links = document.querySelectorAll('.links');
const menuToggle = document.getElementById('menu-toggle');
const fullScreenMenu = document.getElementById('full-screen-menu');
const menuClose = document.getElementById('menu-close');
const contactLink = document.getElementById('mobcontactlink');
const aboutImage = document.getElementById('about-image');
const storyImage = document.getElementById('our-story-img');
menuToggle.addEventListener('click', () => {
    fullScreenMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

links.forEach(link => {
    link.addEventListener('click', function (event) {
        if (this === contactLink) {
            event.preventDefault(); 
            document.getElementById('contactModal').style.display = 'flex'; 
        } else {
            fullScreenMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
});

menuClose.addEventListener('click', () => {
    fullScreenMenu.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

    
    document.querySelector('.contactlink').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('contactModal').style.display = 'flex';
        console.log("clicked");
    });
    document.querySelector('.contactlink').addEventListener('touchstart', function(event) {
        event.preventDefault();
        document.getElementById('contactModal').style.display = 'flex';
        console.log("clicked")
    });
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('contactModal').style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('contactModal')) {
            document.getElementById('contactModal').style.display = 'none';
        }
    });   

    document.querySelector('.tohome').addEventListener('click', function() {
        window.location.href = './index.html';
    });
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            aboutImage.src = './img/aboutdark.png';  
            storyImage.src = './img/ourstorydark.png'; 
        } else {
            document.body.classList.remove('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            aboutImage.src = './img/about.png';  
            storyImage.src = './img/ourstory.png';  
        }
    }
    
    
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            aboutImage.src = './img/aboutdark.png';
            storyImage.src = './img/ourstorydark.png';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
            aboutImage.src = './img/about.png';
            storyImage.src = './img/ourstory.png';
        }
    });
    
    document.addEventListener('DOMContentLoaded', applySavedTheme);
    