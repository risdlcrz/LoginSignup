function switchTab(tab) {
    if (tab === 'signup') {
        document.getElementById('signupForm').style.display = 'flex';
        document.getElementById('loginForm').style.display = 'none';
    } else {
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'flex';
    }
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert('The password and the confirm password do not match.');
        return;
    }
    let user = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        password: password
    };
    displayUserInfo(user);
});

function displayUserInfo(user) {
    document.getElementById('formContainer').innerHTML = `
        <p>First Name: ${user.firstName || ''}</p>
        <p>Last Name: ${user.lastName || ''}</p>
        <p>Email: ${user.email || ''}</p>
        <p>Password: ${user.password}</p>
    `;
}

let tabs = document.querySelectorAll('#tabs button');
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');
    });
});

function displayLoginInfo(user) {
    document.getElementById('formContainer').innerHTML = `
        <p>Username: ${user.username || ''}</p>
        <p>Password: ${user.password}</p>
    `;
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var user = {
        username: document.getElementById('username').value,
        password: document.getElementById('loginPassword').value
    };

    displayLoginInfo(user);
});