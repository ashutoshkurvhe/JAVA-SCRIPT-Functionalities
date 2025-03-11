const userNameEl = document.getElementById('username'), passWordEl = document.getElementById('password'), loginBtnEl = document.querySelector('.loginBtn');


loginBtnEl.addEventListener('click', () => {
    if (userNameEl.value === '') {
        alert('Please enter username')
    }
    else if (passWordEl.value === '') {
        alert('Please enter password')
    }
    else {
        alert('Please enter username and password')
    }
})