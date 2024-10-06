const links = document.querySelectorAll('.links');
const menuToggle = document.getElementById('menu-toggle');
    const fullScreenMenu = document.getElementById('full-screen-menu');
    const menuClose = document.getElementById('menu-close');
    menuToggle.addEventListener('click', () => {
        fullScreenMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });
    links.forEach(link => {
        link.addEventListener('click', function () {
            fullScreenMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    });
    menuClose.addEventListener('click', () => {
        fullScreenMenu.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });