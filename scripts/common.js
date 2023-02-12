function openSignupModal() {
    document.getElementById('signUpModal').style.display = 'block';
}

function openSigninModal() {
    document.getElementById('signInModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('signInModal').style.display = 'none';
    document.getElementById('signUpModal').style.display = 'none';
}

function displaySignupModal() {
    document.getElementById('signInModal').style.display = 'none';
    document.getElementById('signUpModal').style.display = 'block';
}