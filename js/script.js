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
      <div class="card pink">
        <h4>${name}</h4>
        <p>Open Course</p>
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
        "Mars Course 1",
        "Mars Course 2",
        "Mars Course 3",
        "Mars Course 4",
        "Mars Course 5"
      ]);
    }

    else if (page === "mondelez") {
      showCompanyPage("Mondelez", [
        "Mondelez Course 1",
        "Mondelez Course 2",
        "Mondelez Course 3"
      ]);
    }

    else if (page === "eisner") {
      showCompanyPage("Eisner Amper", [
        "Eisner Course 1",
        "Eisner Course 2",
        "Eisner Course 3",
        "Eisner Course 4",
        "Eisner Course 5"
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

  if(card){
    alert(card.innerText + " clicked");
  }

});

});

