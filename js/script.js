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
   MULTI CARD PAGE (Companies)
===================================================== */

function showCompanyPage(title, cardsArray) {

  let cardsHTML = "";

  cardsArray.forEach(name => {
    cardsHTML += `
  <div class="card pink company-udemy">

    <img src="assets/Screenshot 2024-08-09 at 3.50.33 AM 1.png">

    <div class="udemy-body">
      <h4>${name}</h4>

      <p class="udemy-author">By Clamshell Team</p>

      <div class="udemy-rating">
        ⭐ 4.7 <span>(410,182)</span>
      </div>

      <div class="udemy-price">
        ₹599 <del>₹3,109</del>
      </div>

      <div class="udemy-badges">
        <span class="premium">Premium</span>
        <span class="best">Bestseller</span>
      </div>
    </div>

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
   SINGLE PAGE
===================================================== */

function showSinglePage(title) {

  contentArea.innerHTML = `
    <section class="welcome-card">
      <h1>${title}</h1>
    </section>

    <div class="cards">
      <div class="card pink">
        <h4>${title}</h4>
        <p>Open</p>
      </div>
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

    else if (page === "language") showSinglePage("Language Select");

    else if (page === "role") showSinglePage("Role Selection");

    else if (page === "mars") {
      showCompanyPage("Mars", [
        "Prompt Engineering",
        "AI at Mars",
        "Asset Health Check",
        "Supplier Trust Guide",
        "Commercial Infographic"
      ]);
    }

    else if (page === "friesland") {
      showCompanyPage("Friesland Campina", [
        "Client Portal",
        "Individual Engagement Letter",
        "SAP"
      ]);
    }

    else if (page === "eisner") {
      showCompanyPage("Eisner Amper", [
        "TM Road Freight",
        "TM Ocean Freight",
        "TM Transport Settlement",
        "Foreign Trade",
        "Gen Course"
      ]);
    }

    else if (page === "attestation") showSinglePage("Attestation");

    else showSinglePage("Coming Soon");

  });

});

/* =====================================================
    ALL PRODUCTS BUTTON
===================================================== */

allProductsBtn.addEventListener("click", () => {
  items.forEach(i => i.classList.remove("active"));
  showWelcomeNancy();
});

/* =====================================================
    CARD CLICK
===================================================== */

document.body.addEventListener("click", function(e){

  const card = e.target.closest(".card");

  if(card && card.dataset.link){
    window.location.href = card.dataset.link;
  }

});

});

