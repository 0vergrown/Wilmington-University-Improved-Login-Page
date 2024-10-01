let buttonPosition = 'right'; // Track the current position of the next button
let enterButtonPosition = 'right'; // Track the current position of the enter button

// Add event listeners to handle "ENTER" key presses
document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        // If the login box is flipped (password screen), trigger validatePassword
        const loginBox = document.getElementById('loginBox');
        if (loginBox.classList.contains('flipped')) {
            validatePassword();
        } else {
            submitEmail();
        }
    }
});

// Simple email validation
function validateEmail() {
    const emailInput = document.getElementById('emailInput');
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+$/; // Only allow input before the @
    const errorMessage = document.getElementById('errorMessage');

    if (emailPattern.test(emailValue)) {
        emailInput.classList.add('valid');
        errorMessage.textContent = '';
    } else {
        emailInput.classList.remove('valid');
        errorMessage.textContent = 'Invalid email format';
    }
}

// Move to password screen on successful email entry
function submitEmail() {
    const emailInput = document.getElementById('emailInput');
    const emailValue = emailInput.value;

    if (emailValue === 'admin') {
        const loginBox = document.getElementById('loginBox');
        loginBox.classList.add('flipped');
    } else {
        shakeButton();
        slideButton();
    }
}

// Shake animation for next button if invalid
function shakeButton() {
    const button = document.getElementById('nextButton');
    button.classList.add('invalid-shake');
    setTimeout(() => {
        button.classList.remove('invalid-shake');
    }, 500);
}

// Sliding next button logic
function slideButton() {
    const button = document.getElementById('nextButton');

    if (buttonPosition === 'right') {
        button.classList.add('slide-left');
        button.classList.remove('slide-right');
        buttonPosition = 'left';
    } else {
        button.classList.add('slide-right');
        button.classList.remove('slide-left');
        buttonPosition = 'right';
    }
}

// Password validation
function validatePassword() {
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput.value === 'correctPassword') {
        passwordInput.classList.add('valid');
    } else {
        shakeEnterButton();
        slideEnterButton();
    }
}

// Shake animation for enter button if invalid
function shakeEnterButton() {
    const button = document.getElementById('enterButton');
    button.classList.add('invalid-shake');
    setTimeout(() => {
        button.classList.remove('invalid-shake');
    }, 500);
}

// Sliding enter button logic
function slideEnterButton() {
    const button = document.getElementById('enterButton');

    if (enterButtonPosition === 'right') {
        button.classList.add('slide-left');
        button.classList.remove('slide-right');
        enterButtonPosition = 'left';
    } else {
        button.classList.add('slide-right');
        button.classList.remove('slide-left');
        enterButtonPosition = 'right';
    }
}