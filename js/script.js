document.getElementById('login-btn').addEventListener('click', function () {
  const btn = document.getElementsByClassName("login-button")[0];

  if (btn.innerText === "Continue") {
    // Continue click hone par redirect
    window.location.href = "main-dashboard.html";
  } else {
    // Pehli click par UI change
    btn.innerText = "Continue";
    document.getElementsByClassName("login-form-hidden")[0].style.display = "block";
  }
});


