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

  if (dashboardExtras) dashboardExtras.style.display = "block";
}

function showWelcomeSelect() {

  contentArea.innerHTML = `
    <section class="welcome-card">
      <h1>Welcome Select</h1>
    </section>
  `;

  if (dashboardExtras) dashboardExtras.style.display = "none";
}

/* 🔥 FIVE CARD PAGE */

function showFiveCards(title) {

  contentArea.innerHTML = `
    <section class="welcome-card">
      <h1>${title}</h1>
    </section>

    <div class="cards company-cards">

      <div class="card gray">Card 1</div>
      <div class="card gray">Card 2</div>
      <div class="card gray">Card 3</div>
      <div class="card gray">Card 4</div>
      <div class="card gray">Card 5</div>

    </div>
  `;

  if (dashboardExtras) dashboardExtras.style.display = "none";
}

/* =====================================================
    SIDEBAR CLICK
===================================================== */

items.forEach(item => {

  item.addEventListener("click", () => {

    const page = item.dataset.page?.toLowerCase();

    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    if (page === "welcome") {
      showWelcomeSelect();
    }

    else if (page === "language") {
      showFiveCards("Language Select");
    }

    else if (page === "role") {
      showFiveCards("Role Selection");
    }

    else if (page === "mars") {
      showFiveCards("Mars");
    }

    else if (page === "mondelez") {
      showFiveCards("Mondelez");
    }

    else if (page === "eisner") {
      showFiveCards("Eisner Amper");
    }

    else if (page === "attestation") {
      showFiveCards("Attestation");
    }

    else {
      showFiveCards("Coming Soon");
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
    HOVER EFFECT (GREY → PINK)
===================================================== */

document.addEventListener("mouseover", e => {
  const card = e.target.closest(".company-cards .card");
  if(card){
    card.classList.add("pink");
  }
});

document.addEventListener("mouseout", e => {
  const card = e.target.closest(".company-cards .card");
  if(card){
    card.classList.remove("pink");
  }
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
