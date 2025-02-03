<script>
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");
        const usernameInput = form.querySelector('input[type="text"]');
        const passwordInput = form.querySelector('input[type="password"]');
        const rememberMeCheckbox = form.querySelector('input[type="checkbox"]');

        // Form submit event
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the default form submission

            // Check if both username and password are filled
            if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
                alert("Please fill in both the username and password fields.");
                return;
            }

            // If "Remember me" is checked, save the data in localStorage (for example)
            if (rememberMeCheckbox.checked) {
                localStorage.setItem("username", usernameInput.value);
                alert("Your login details will be remembered.");
            } else {
                localStorage.removeItem("username");
            }

            // Proceed with form submission (simulate login or redirect)
            alert("Login successful!");
            // You can redirect or perform further actions here
            // window.location.href = 'dashboard.html'; // Example redirection
        });

        // If the "Remember me" checkbox is checked, pre-fill the username from localStorage (if available)
        if (localStorage.getItem("username")) {
            usernameInput.value = localStorage.getItem("username");
            rememberMeCheckbox.checked = true;
        }
    });
</script>
