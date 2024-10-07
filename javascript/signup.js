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
    document.body.classList.toggle('dark-modeform');
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

const steps = document.querySelectorAll('.step');
let currentStep = 0;

function validateCurrentStep() {
    const inputs = steps[currentStep].querySelectorAll('input[required]');
    let allValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('border-red-500'); 
            allValid = false;
        } else {
            input.classList.remove('border-red-500');
        }
    });

    return allValid;
}

document.querySelectorAll('.next-step').forEach(button => {
    button.addEventListener('click', () => {
        if (validateCurrentStep()) {
            steps[currentStep].classList.add('hidden');
            currentStep = (currentStep + 1) % steps.length;
            showStep(currentStep);
        } else {
            alert('Please fill all required fields highlighted in red and make sure you entered numerical data in integer format. (Don\'t worry your information is not stored)');
        }
    });
});

document.querySelectorAll('.prev-step').forEach(button => {
    button.addEventListener('click', () => {
        steps[currentStep].classList.add('hidden');
        currentStep = (currentStep - 1 + steps.length) % steps.length;
        showStep(currentStep);
    });
});

function calculateBodyFat() {
    const neck = parseFloat(document.getElementById('neck').value);
    const belly = parseFloat(document.getElementById('belly').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!isNaN(neck) && !isNaN(belly) && !isNaN(height)) {
        const bodyFat = (86.010 * Math.log10(belly - neck) - 70.041 * Math.log10(height) + 36.76).toFixed(2);
        document.getElementById('body-fat').value = bodyFat + ' %';
    }
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateBodyFat();
    document.getElementById('popup').classList.remove('hidden');  
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden'); 
    window.location.href = './index.html';
});


const form = document.querySelector('form');
const inputs = form.querySelectorAll('input, textarea'); 
let isFormCompleted = false;
let closePopupPressed = false;

inputs.forEach(input => {
    input.addEventListener('input', () => {
        isFormCompleted = Array.from(inputs).some(input => input.required && input.value.trim() === '');
    });
});

const closePopupButton = document.querySelector('#close-popup-button');
closePopupButton.addEventListener('click', () => {
    closePopupPressed = true;
});

window.addEventListener('beforeunload', function(event) {
    if (isFormCompleted && !closePopupPressed) {
        const message = "You have unsaved changes. Are you sure you want to leave?";
        event.returnValue = message; 
        return message; 
    }
});


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

function showStep(step) {
    steps.forEach((s, index) => {
        s.classList.toggle('hidden', index !== step);
        s.classList.toggle('active', index === step);
    });
    updateProgressBar();
}

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressPercentage = ((currentStep + 1) / steps.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

showStep(currentStep);
