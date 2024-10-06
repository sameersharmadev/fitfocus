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
            steps[currentStep].classList.remove('hidden');
        } else {
            alert('Please fill all required fields highlighted in red and make sure you entered numerical data in integer format.(Dont worry your information is not stored)');
        }
    });
});


document.querySelectorAll('.prev-step').forEach(button => {
    button.addEventListener('click', () => {
        steps[currentStep].classList.add('hidden');
        currentStep = (currentStep - 1 + steps.length) % steps.length;
        steps[currentStep].classList.remove('hidden');
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
// Show the popup when the form is submitted
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
    document.getElementById('popup').classList.remove('hidden');  // Show the popup
  });
  
  // Close the popup when the button is clicked
  document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('hidden');  // Hide the popup
  });
  
document.getElementById('closePopup').addEventListener('click', function() {
    window.location.href = './index.html';
});
let isFormCompleted = false;


    document.getElementById('myForm').addEventListener('submit', function() {
        isFormCompleted = true; 
    });

    window.addEventListener('beforeunload', function(event) {
        if (!isFormCompleted) {

            const message = "You have unsaved changes. Are you sure you want to leave?";
            event.returnValue = message; //
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
    