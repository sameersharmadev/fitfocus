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
    
