document.addEventListener("DOMContentLoaded", () => {

/* =====================================================
    LOGIN PAGE
===================================================== */

const loginBtn = document.getElementById("login-btn");

if (loginBtn) {
  loginBtn.addEventListener("click", function () {

    const formBox = document.querySelector(".login-form-hidden");

    if (this.innerText === "Login") {
      formBox.style.display = "block";
      this.innerText = "Continue";
      return;
    }

    const userId = document.getElementById("user-id")?.value.trim();
    const password = document.getElementById("password")?.value.trim();

    if (!userId || !password) {
      alert("Please enter User ID and Password");
      return;
    }

    window.location.href = "main-dashboard.html";
  });
}

/* =====================================================
    DASHBOARD ELEMENTS
===================================================== */

const items = document.querySelectorAll(".products li");
const contentArea = document.getElementById("content-area");
const cardsSection = document.querySelector(".cards");
const allProductsBtn = document.getElementById("all-products-btn");

/* =====================================================
    DEFAULT LOAD
===================================================== */

if (contentArea) {
  showWelcomeNancy();
}

/* =====================================================
    FUNCTIONS
===================================================== */

function showWelcomeNancy() {

  contentArea.innerHTML = `
    <section class="welcome-card">
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
    </section>
  `;

  if (cardsSection) cardsSection.style.display = "grid";
}

function showWelcomeSelect() {

  contentArea.innerHTML = `
    <section class="welcome-card">
      <h1>Welcome Select</h1>
    </section>
  `;

  if (cardsSection) cardsSection.style.display = "none";
}

function simplePage(title) {

  contentArea.innerHTML = `
    <section class="welcome-card">
      <h1>${title}</h1>
    </section>
  `;

  if (cardsSection) cardsSection.style.display = "none";
}

/* =====================================================
    SIDEBAR CLICK
===================================================== */

items.forEach(item => {

  item.addEventListener("click", () => {

    const page = item.dataset.page;

    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    if (page === "welcome") {
      showWelcomeSelect();
    }

    else if (page === "language") {
      simplePage("Language Select");
    }

    else if (page === "role") {
      simplePage("Role Selection");
    }

    else if (page === "attestation") {
      simplePage("Attestation");
    }

    else {
      simplePage("Coming Soon");
    }

  });

});

/* =====================================================
    ALL PRODUCTS BUTTON
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


