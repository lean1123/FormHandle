/*!
 * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */
// 
// Scripts
// 


window.addEventListener('DOMContentLoaded', event => {
    const sendBtn = document.getElementById("send-btn");
    const loginBtn = document.getElementById("login_btn");
    const emaiLogin = document.getElementById("inputEmail");
    const passwordLogin = document.getElementById("inputPassword");

    function checkLogin() {
        if (emaiLogin.value == "") {
            alert("Email not available!");
            console.log(emaiLogin);
            return false;
        }
        if (passwordLogin.value == "") {
            alert("Password not available!");
            console.log(passwordLogin);
            return false;
        }
        return true;
    }

    const firstName = document.getElementById("inputFirstName");
    const lastName = document.getElementById("inputLastName");
    const email = document.getElementById("inputEmail");
    const password = document.getElementById("inputPassword");
    const confirmPass = document.getElementById("inputPasswordConfirm");


    function kiemTraInput() {
        if (!(firstName.value.match(/[^\d]+/))) {
            alert("Firstname not availble!");
            firstName.focus();
            return false;
        }

        if (!lastName.value.match(/[^\d]+/)) {
            alert("lastname not availble!");
            lastName.focus();
            return false;
        }

        if (!email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
            alert("Email khong hop le!");
            email.focus();
            return false;
        }

        if (!password.value.match(/[^\s\t+]{5,}/)) {
            alert("Password khong hop le");
            password.focus();
            return false;
        }

        if (password.value.localeCompare(confirmPass.value) != 0) {
            alert("Confirm password khong hop le");
            confirmPass.focus;
            return false;
        }
        return true;
    }
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
            document.body.classList.toggle('sb-sidenav-toggled');
        }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));

        });
    }

    if (sendBtn) {
        sendBtn.onclick = function() {
            if (kiemTraInput()) {
                location.href = 'login.html';
            }
        }
    }

    if (loginBtn) {
        loginBtn.onclick = function() {
            if (checkLogin()) {
                location.href = 'index.html';
            }
        };
    }
});