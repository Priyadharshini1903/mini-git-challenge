document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".fm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form from submitting by default

    const inputs = loginForm.querySelectorAll("input");
    const username = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const password = inputs[2].value.trim();

    if (!username || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Optionally: You can add more checks here (like email format, password strength, etc.)

    alert("Login successful!");

    // Optional: Redirect after login
    // window.location.href = "dashboard.html";
  });
});
