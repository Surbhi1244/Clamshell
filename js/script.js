document.getElementById("login-btn").addEventListener("click", function () {
  const btn = this;

  const userId = document.getElementById("user-id").value.trim();
  const password = document.getElementById("password").value.trim();

  // ❌ agar empty hai
  if (userId === "" || password === "") {
    alert("Please enter User ID and Password");
    return;
  }

  // ✅ pehla valid click
  if (btn.innerText === "Login") {
    btn.innerText = "Continue";
    document.querySelector(".login-form-hidden").style.display = "block";
  }
  // ✅ dusra click
  else {
    window.location.href = "main-dashboard.html";
  }
});

// sidebar items
const items = document.querySelectorAll(".products li");
const content = document.getElementById("content-area");

// pages data
const pages = {
  welcome: `
    <div class="welcome-card">
      <h1>Welcome Nancy!</h1>

      <div class="tags">
        <div class="t1">
          <span>Storyline</span>
          <span>HTML</span>
          <span>Articulate</span>
          <span>Figma</span>
          <span>SB Link</span>
        </div>
        <div class="t2">
          <span>VSB</span>
          <span>PSD</span>
          <span>SL Source</span>
          <span>SL Link</span>
        </div>
      </div>
    </div>
  `,

  language: `
    <h1>Language Select</h1>
    <p>Select your preferred language.</p>
  `,

  role: `
    <h1>Role Selection</h1>
    <p>Select your role.</p>
  `,

  attestation: `
    <h1>Attestation</h1>
    <p>Please confirm your details.</p>
  `
};

// default page
content.innerHTML = pages.welcome;

// click handling
items.forEach(item => {
  item.addEventListener("click", () => {
    const key = item.dataset.page;
    content.innerHTML = pages[key] || "<p>Page coming soon</p>";
  });
});
