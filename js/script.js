document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     LOGIN PAGE HANDLING
  ================================ */

  const loginBtn = document.getElementById("login-btn");

  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      const btn = this;
      const formBox = document.querySelector(".login-form-hidden");

      // Step 1: Show login form
      if (btn.innerText === "Login") {
        formBox.style.display = "block";
        btn.innerText = "Continue";
        return;
      }

      // Step 2: Validate inputs
      const userId = document.getElementById("user-id")?.value.trim();
      const password = document.getElementById("password")?.value.trim();

      if (!userId || !password) {
        alert("Please enter User ID and Password");
        return;
      }

      // Step 3: Redirect
      window.location.href = "main-dashboard.html";
    });
  }

  /* ===============================
     SIDEBAR + CONTENT AREA
  ================================ */

  const items = document.querySelectorAll(".products li");
  const content = document.getElementById("content-area");

  const pages = {
    welcome: `
      <section class="welcome-card">
        <h1>Welcome Nancy!</h1>
        <p>Select a module from the sidebar or view all classes.</p>

        <button id="show-classes-btn" class="primary-btn">
          View All Classes
        </button>

        <div class="cards hidden">
          <div class="card" data-link="language.html">Language</div>
          <div class="card" data-link="role.html">Role</div>
          <div class="card" data-link="attestation.html">Attestation</div>
        </div>
      </section>
    `,
    language: `
      <section class="welcome-card">
        <h1>Language Select</h1>
        <p>Select your preferred language.</p>
      </section>
    `,
    role: `
      <section class="welcome-card">
        <h1>Role Selection</h1>
        <p>Select your role.</p>
      </section>
    `,
    attestation: `
      <section class="welcome-card">
        <h1>Attestation</h1>
        <p>Please confirm your details.</p>
      </section>
    `
  };

  // Default load
  if (content) {
    content.innerHTML = pages.welcome;
  }

  // Sidebar click handling
  items.forEach(item => {
    item.addEventListener("click", () => {
      const key = item.dataset.page;

      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      if (content) {
        content.innerHTML = pages[key] || "<p>Page coming soon</p>";
      }
    });
  });

  /* ===============================
     BUTTON + CARD CLICK (DELEGATION)
  ================================ */

  document.body.addEventListener("click", (e) => {

    // Show / Hide classes
    if (e.target.id === "show-classes-btn") {
      const cards = document.querySelector(".cards");
      if (!cards) return;

      cards.classList.toggle("hidden");
      e.target.innerText = cards.classList.contains("hidden")
        ? "View All Classes"
        : "Hide Classes";
    }

    // Card navigation
    const card = e.target.closest(".card");
    if (card && card.dataset.link) {
      window.location.href = card.dataset.link;
    }

  });

});

