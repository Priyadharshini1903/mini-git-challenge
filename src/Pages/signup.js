document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.querySelector(".fr");

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent default form submission

    const inputs = signupForm.querySelectorAll("input");

    const firstName = inputs[0].value.trim();
    const lastName = inputs[1].value.trim();
    const email = inputs[2].value.trim();
    const password = inputs[3].value.trim();
    const confirmPassword = inputs[4].value.trim();

    // Validate fields are not empty
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Signup successful!");

    // Optional: Redirect to login page
    // window.location.href = "Login.html";
  });
});
