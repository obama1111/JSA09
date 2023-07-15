document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");

    registerForm?.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Mật khẩu không khớp");
            return;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Đã tạo thành công")
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm?.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const registeredUsername = localStorage.getItem("username");
        const registeredPassword = localStorage.getItem("password");

        if (username !== registeredUsername || password !== registeredPassword) {
            alert("Thông tin đăng nhập không chính xác");
            return;
        }

        localStorage.setItem("isLogin", true);
        alert("Đăng nhập thành công")
        window.location.href="home.html"
    });
});



// LOGOUT
const logoutButton = document.getElementById("logout-button");
logoutButton?.addEventListener("click", function (event) {
    event.preventDefault();
    // Xóa thông tin đăng nhập trong Local Storage
    localStorage.removeItem("isLogin");
    alert("Đăng xuất thành công");
    window.location.reload();
});


