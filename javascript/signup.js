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
    
