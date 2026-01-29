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
    ELEMENTS
===================================================== */

const items = document.querySelectorAll(".sidebar-section li");
const contentArea = document.getElementById("content-area");
const mainCards = document.querySelector(".cards");
const allProductsBtn = document.getElementById("all-products-btn");
const dashboardExtras = document.getElementById("dashboard-extras");
const homeIcon = document.getElementById("home-icon");
const searchInput = document.querySelector(".search");

/* =====================================================
    DATA (same data, ek jagah)
===================================================== */

const companiesData = {
  mars: {
    title: "Mars",
    courses: [
      "Prompt Engineering",
      "AI at Mars",
      "Asset Health Check",
      "Supplier Trust Guide",
      "Commercial Infographic"
    ]
  },
  eisner: {
    title: "Eisner Amper",
    courses: [
      "Client Portal",
      "Individual Engagement Letter",
      "SAP"
    ]
  },
  friesland: {
    title: "Friesland Campina",
    courses: [
      "TM Road Freight",
      "TM Ocean Freight",
      "TM Transport Settlement",
      "Foreign Trade",
      "Gen Course"
    ]
  }
};

/* =====================================================
    LOAD DEFAULT
===================================================== */

showWelcomeNancy();

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

  mainCards.style.display = "grid";
  dashboardExtras.style.display = "block";
}

function showWelcomeSelect() {
  contentArea.innerHTML = `
    <section class="welcome-card">
      <h1>Welcome Select</h1>
    </section>
  `;
  dashboardExtras.style.display = "none";
}

/* =====================================================
   LANGUAGE & ROLE (cards WAPAS)
===================================================== */

function showLanguageCards() {
  contentArea.innerHTML = `
    <section class="welcome-card">
      <h1>Language Select</h1>
    </section>

    <div class="cards">
      <div class="card pink"><h4>English</h4></div>
      <div class="card blue"><h4>French</h4></div>
      <div class="card green"><h4>German</h4></div>
      <div class="card orange"><h4>Spanish</h4></div>
    </div>
  `;
  dashboardExtras.style.display = "none";
}

function showRoleCards() {
  contentArea.innerHTML = `
    <section class="welcome-card">
      <h1>Role Selection</h1>
    </section>

    <div class="cards">
      <div class="card pink"><h4>Developer</h4></div>
      <div class="card blue"><h4>Designer</h4></div>
      <div class="card green"><h4>Manager</h4></div>
      <div class="card orange"><h4>Analyst</h4></div>
    </div>
  `;
  dashboardExtras.style.display = "none";
}

/* =====================================================
   COMPANY PAGE
===================================================== */

function showCompanyPage(title, cardsArray) {

  let cardsHTML = "";

  cardsArray.forEach(name => {
    cardsHTML += `
      <div class="card pink">
        <h4>${name}</h4>
        <p>By Clamshell Team</p>
      </div>
    `;
  });

  contentArea.innerHTML = `
    <section class="welcome-card">
      <h1>${title}</h1>
    </section>

    <div class="cards">
      ${cardsHTML}
    </div>
  `;

  dashboardExtras.style.display = "none";
}

/* =====================================================
    SIDEBAR CLICK
===================================================== */

items.forEach(item => {
  item.addEventListener("click", () => {

    const page = item.dataset.page.toLowerCase();
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    if (page === "welcome") showWelcomeSelect();
    else if (page === "language") showLanguageCards();
    else if (page === "role") showRoleCards();
    else if (companiesData[page]) {
      showCompanyPage(
        companiesData[page].title,
        companiesData[page].courses
      );
    }
    else showWelcomeSelect();
  });
});

/* =====================================================
    HOME ICON
===================================================== */

if (homeIcon) {
  homeIcon.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    showWelcomeNancy();
  });
}

/* =====================================================
    ALL PRODUCTS
===================================================== */

if (allProductsBtn) {
  allProductsBtn.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    showWelcomeNancy();
  });
}

/* =====================================================
    SEARCH (GLOBAL)
===================================================== */

if (searchInput) {
  searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const title = card.querySelector("h4")?.innerText.toLowerCase() || "";

      if (title.includes(value)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
}

});
