const togglePassword = document.querySelector('.togglePassword');

togglePassword.addEventListener('click', () => {
    const passwordFeild = document.getElementById('password')
    
    const type = passwordFeild.getAttribute("type") === "password" ? "text" : "password";
    passwordFeild.setAttribute("type", type);
    togglePassword.innerHTML = type === "password" ? '<i class="fa-solid fa-eye"></i>':'<i class="fa-solid fa-eye-slash"></i>';
});