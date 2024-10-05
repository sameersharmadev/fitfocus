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
        currentIndex = (currentIndex + 1) % items.length; // Move to the next item
        showItem(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Move to the previous item
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
    menuToggle.addEventListener('click', () => {
        fullScreenMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });
    links.forEach(link => {
        link.addEventListener('click', function () {
            fullScreenMenu.classList.add('auto');
        });
    });
    menuClose.addEventListener('click', () => {
        fullScreenMenu.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });
    
