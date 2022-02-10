document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get user password
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    //checking email & pass
    if (userEmail == 'emon@gmail.com' && userPass == '123') {
        console.log('Valid User')
        window.location.href = 'banking.html'
    } else {
        prompt('Invalid Password!');
        console.log('Incorrect!')
    }

});

