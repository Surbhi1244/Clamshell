document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
      LOGIN PAGE LOGIC
  ===================================================== */

  const loginBtn = document.getElementById("login-btn");

  if (loginBtn) {
    loginBtn.addEventListener("click", function () {

      const formBox = document.querySelector(".login-form-hidden");

      // Step 1
      if (this.innerText === "Login") {
        formBox.style.display = "block";
        this.innerText = "Continue";
        return;
      }

      // Step 2
      const userId = document.getElementById("user-id")?.value.trim();
      const password = document.getElementById("password")?.value.trim();

      if (!userId || !password) {
        alert("Please enter User ID and Password");
        return;
      }

      // Step 3
      window.location.href = "main-dashboard.html";
    });
  }

  /* =====================================================
      DASHBOARD ELEMENTS
  ===================================================== */

  const items = document.querySelectorAll(".products li");
  const contentArea = document.getElementById("content-area");
  const cardsSection = document.querySelector(".cards");
  const tagsSection = document.querySelector(".tags");
  const allProductsBtn = document.getElementById("all-products-btn");

  /* =====================================================
      DEFAULT DASHBOARD PAGE
  ===================================================== */

  if (contentArea) {
    showWelcomeNancy();
  }

  function showWelcomeNancy() {

    contentArea.innerHTML = `
      <section class="welcome-card">
        <h1>Welcome Nancy!</h1>
        <p>Select a module from the sidebar.</p>
      </section>
    `;

    if (cardsSection) cardsSection.style.display = "grid";
    if (tagsSection) tagsSection.style.display = "flex";
  }

  /* =====================================================
      SIDEBAR MENU CLICK
  ===================================================== */

  items.forEach(item => {
    item.addEventListener("click", () => {

      const page = item.dataset.page;

      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      if (cardsSection) cardsSection.style.display = "none";
      if (tagsSection) tagsSection.style.display = "none";

      if (page === "welcome") {
        contentArea.innerHTML = `
          <section class="welcome-card">
            <h1>Welcome Select</h1>
            <p>Please choose a category</p>
          </section>
        `;
      }

      else if (page === "language") {
        contentArea.innerHTML = `
          <section class="welcome-card">
            <h1>Language Select</h1>
          </section>
        `;
      }

      else if (page === "role") {
        contentArea.innerHTML = `
          <section class="welcome-card">
            <h1>Role Selection</h1>
          </section>
        `;
      }

      else if (page === "attestation") {
        contentArea.innerHTML = `
          <section class="welcome-card">
            <h1>Attestation</h1>
          </section>
        `;
      }

      else {
        contentArea.innerHTML = `
          <section class="welcome-card">
            <h1>Coming Soon</h1>
          </section>
        `;
      }

    });
  });

  /* =====================================================
      ALL PRODUCTS CLICK
  ===================================================== */

  if (allProductsBtn) {
    allProductsBtn.addEventListener("click", () => {
      items.forEach(i => i.classList.remove("active"));
      showWelcomeNancy();
    });
  }

  /* =====================================================
      CARD CLICK
  ===================================================== */

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const link = card.dataset.link;
      if (link) {
        window.location.href = link;
      }
    });
  });

});

