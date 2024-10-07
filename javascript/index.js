const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        }); 
    }

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length; 
        showItem(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    });

    showItem(currentIndex);
function setVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', setVh);
window.addEventListener('load', setVh);
setVh();
function toggleFAQ(event) {
    const answer = event.currentTarget.nextElementSibling;
    answer.classList.toggle("hidden");
    const icon = event.currentTarget.querySelector("svg");
    icon.classList.toggle("rotate-180");
}
const links = document.querySelectorAll('.links');
const menuToggle = document.getElementById('menu-toggle');
const fullScreenMenu = document.getElementById('full-screen-menu');
const menuClose = document.getElementById('menu-close');
const contactLink = document.getElementById('mobcontactlink');

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
        } else {
            document.body.classList.remove('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
    
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        }
    });
    
    document.addEventListener('DOMContentLoaded', applySavedTheme);
    

