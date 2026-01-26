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

const items = document.querySelectorAll(".products li");
const contentArea = document.getElementById("content-area");
const mainCards = document.querySelector(".cards");
const allProductsBtn = document.getElementById("all-products-btn");

/* =====================================================
    LOAD DEFAULT
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

  if (mainCards) mainCards.style.display = "grid";
}

function showWelcomeSelect() {

  contentArea.innerHTML = `
    <section class="welcome-card">
      <h1>Welcome Select</h1>
    </section>
  `;

  if (mainCards) mainCards.style.display = "grid";
  if (quickLinks) quickLinks.style.display = "none";
}

function showSingleCardPage(title) {

  contentArea.innerHTML = `
    <section class="welcome-card">
      <h1>${title}</h1>
    </section>

    <div class="cards">
      <div class="card pink">
        <h4>${title}</h4>
        <p>This is ${title} main card</p>
      </div>
    </div>
  `;

  if (mainCards) mainCards.style.display = "none";
  if (quickLinks) quickLinks.style.display = "none";
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
      showSingleCardPage("Language Select");
    }

    else if (page === "role") {
      showSingleCardPage("Role Selection");
    }

    else if (page === "attestation") {
      showSingleCardPage("Attestation");
    }

    else {
      showSingleCardPage("Coming Soon");
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

document.body.addEventListener("click", function(e){

  const card = e.target.closest(".card");

  if(card && card.dataset.link){
    window.location.href = card.dataset.link;
  }

});

});

