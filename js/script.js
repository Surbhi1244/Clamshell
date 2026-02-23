document.addEventListener("DOMContentLoaded", () => {

  const showLoginBtn = document.getElementById("show-login-btn");
  const loginBox = document.getElementById("login-box");
  const continueBtn = document.getElementById("continue-btn");
  const errorDisplay = document.getElementById("error-message");

  if (loginBox) loginBox.style.display = "none";

  if (showLoginBtn && loginBox) {
    showLoginBtn.addEventListener("click", () => {
      loginBox.style.display = "flex";
      showLoginBtn.style.display = "none";
    });
  }

  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      const userId = document.getElementById("user-id")?.value.trim();
      const password = document.getElementById("password")?.value.trim();

      if (errorDisplay) errorDisplay.innerText = "";
      if (!userId || !password) {
        if (errorDisplay) errorDisplay.innerText = "Please enter User ID and Password";
        return;
      }
      if (!userId.toLowerCase().endsWith("@clamshelllearning.com")) {
        if (errorDisplay) errorDisplay.innerText = "Access Denied: Use @clamshelllearning.com";
        return;
      }

      localStorage.setItem("userEmail", userId);
      const name = userId.split("@")[0];
      localStorage.setItem("userName", name.charAt(0).toUpperCase() + name.slice(1));
      window.location.href = "main-dashboard.html";
    });
  }

  window.handleGoogleSSO = function (response) {
    const payload = JSON.parse(atob(response.credential.split(".")[1]));
    const email = payload.email;

    console.log("Login Email:", email);

    const isGmail = email.endsWith("@gmail.com");
    const isClamshell = email.endsWith("@clamshelllearning.com");

    if (!isGmail && !isClamshell) {
      alert("Only Gmail or clamshelllearning.com emails allowed");
      return;
    }

    localStorage.setItem("userEmail", email);
    const name = email.split("@")[0];
    localStorage.setItem("userName", name.charAt(0).toUpperCase() + name.slice(1));

    window.location.href = "main-dashboard.html";
  };

  /* =========================
     DASHBOARD CODE (Runs only on dashboard page)
  ===================================================== */

  if (document.getElementById("content-area")) {

    /* =========================
     GLOBAL COURSE DATA
    ========================= */

    const ALL_COURSES = {
      mars: [
        "Prompt Engineering",
        "AI at Mars",
        { name: "Asset Health Check", link: "https://360.articulate.com/review/content/96e2cbca-e70a-49fb-8c73-ae9339a7dd57/review" },
        "Supplier Trust Guide",
        "Commercial Infographic"
      ],
      eisner: [
        { name: "Client Portal", link: "https://360.articulate.com/review/content/c9bd69f1-c69b-4376-b17e-442ece43b04a/review" },
        "Individual Engagement Letter",
        "SAP"
      ],
      friesland: [
        "TM Road Freight",
        "TM Ocean Freight",
        "TM Transport Settlement",
        "Foreign Trade",
        "Gen Course"
      ]
    };

    /* =========================
     ELEMENTS
    ========================= */

    const items = document.querySelectorAll(".sidebar-section li");
    const contentArea = document.getElementById("content-area");
    const mainCards = document.querySelector(".cards");
    const allProductsBtn = document.getElementById("all-products-btn");
    const dashboardExtras = document.getElementById("dashboard-extras");
    const homeIcon = document.getElementById("home-icon");
    const searchInput = document.querySelector(".search");

    /* =====================================================
        LOAD DEFAULT
    ===================================================== */
    showWelcomeUser();

    /* =====================================================
        FUNCTIONS
    ===================================================== */

    function showWelcomeUser() {
      const userName = localStorage.getItem("userName") || "User";

      contentArea.innerHTML = `
        <section class="welcome-card">
          <h1>Welcome ${userName}!</h1>

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

    /* =====================================================
       MULTI CARD PAGE (Companies)
    ===================================================== */
    function showSearchResults(results) {

      if (results.length === 0) {
        contentArea.innerHTML = `
          <section class="welcome-card">
            <h1>No results found</h1>
          </section>
        `;
        if (dashboardExtras) dashboardExtras.style.display = "none";
        return;
      }

      let cardsHTML = "";

      results.forEach(item => {
        cardsHTML += `
          <div class="card pink company-udemy">
            <img src="assets/Screenshot 2024-08-09 at 3.50.33 AM 1.png">
            <div class="udemy-body">
              <h4>${item.course}</h4>
              <p class="udemy-author">${item.company}</p>
            </div>
          </div>
        `;
      });

      contentArea.innerHTML = `
        <section class="welcome-card">
          <h1>Search Results</h1>
        </section>
        <div class="cards">
          ${cardsHTML}
        </div>
      `;

      if (dashboardExtras) dashboardExtras.style.display = "none";
    }

    function showCompanyPage(title, cardsArray) {

      let cardsHTML = "";

      cardsArray.forEach(course => {

        const courseName = typeof course === "string"
          ? course
          : course.name;

        const courseLink = typeof course === "string"
          ? null
          : course.link;

        cardsHTML += `
          <div class="card pink company-udemy"
               ${courseLink ? `data-link="${courseLink}"` : ""}>
            <img src="assets/Screenshot 2024-08-09 at 3.50.33 AM 1.png">
            <div class="udemy-body">
              <h4>${courseName}</h4>
              <p class="udemy-author">By ${title}</p>
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

      if (dashboardExtras) dashboardExtras.style.display = "none";
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

      if (dashboardExtras) dashboardExtras.style.display = "none";
    }

    /* =====================================================
        SIDEBAR CLICK
    ===================================================== */

    if (homeIcon) {
      homeIcon.addEventListener("click", () => {

        // sidebar ke active items hatao
        items.forEach(i => i.classList.remove("active"));

        // HOME PAGE LOAD
        showWelcomeUser();
      });
    }

    items.forEach(item => {

      item.addEventListener("click", () => {

        const page = item.dataset.page?.toLowerCase();

        items.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        if (page === "welcome") showWelcomeSelect();

        else if (page === "language") showSinglePage("Language Select");

        else if (page === "role") showSinglePage("Role Selection");

        else if (page === "mars") {
          showCompanyPage("Mars", ALL_COURSES.mars);
        }

        else if (page === "eisner") {
          showCompanyPage("Eisner Amper", ALL_COURSES.eisner);
        }

        else if (page === "friesland") {
          showCompanyPage("Friesland Campina", ALL_COURSES.friesland);
        }

        else if (page === "attestation") showSinglePage("Attestation");

        else showSinglePage("Coming Soon");

      });

    });

    /* =====================================================
        ALL PRODUCTS BUTTON
    ===================================================== */

    if (allProductsBtn) {
      allProductsBtn.addEventListener("click", () => {
        items.forEach(i => i.classList.remove("active"));
        showWelcomeUser();
      });
    }

    /* =====================================================
        CARD CLICK
    ===================================================== */

    document.body.addEventListener("click", function (e) {

      const card = e.target.closest(".card");

      if (card && card.dataset.link) {
        window.location.href = card.dataset.link;
      }

    });

    /* =====================================================
        SEARCH FUNCTIONALITY (GLOBAL)
    ===================================================== */

    if (searchInput) {
      searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase().trim();

        // empty search → home page wapas
        if (value === "") {
          showWelcomeUser();
          return;
        }

        let results = [];

        /* ======================
           HOME PAGE CARDS
        ====================== */
        const HOME_CARDS = [
          "Low Code / No Code",
          "Drone",
          "Networking",
          "Artificial Intelligence",
          "Intelligent Automation"
        ];

        HOME_CARDS.forEach(card => {
          if (card.toLowerCase().includes(value)) {
            results.push({
              company: "HOME",
              course: card
            });
          }
        });

        /* ======================
           COMPANY COURSES
        ====================== */
        Object.keys(ALL_COURSES).forEach(company => {
          ALL_COURSES[company].forEach(course => {
            if (course.toLowerCase().includes(value)) {
              results.push({
                company: company.toUpperCase(),
                course: typeof course === "string" ? course : course.name
              });
            }
          });
        });

        showSearchResults(results);
      });
    }

    /* =====================================================
        PROFILE MENU
    ===================================================== */

    const profileIcon = document.getElementById("profile-icon");
    const profileMenu = document.getElementById("profile-menu");
    const logoutBtn = document.getElementById("logout-btn");
    const profileNameDisplay = document.getElementById("profile-name");

    // Profile में email show करें
    // Profile me username aur email set karo
    if (profileNameDisplay) {

      const userEmail = localStorage.getItem("userEmail") || "user@clamshelllearning.com";
      const userName = userEmail.split("@")[0];

      // Username wali jagah → sirf name
      profileNameDisplay.textContent =
        userName.charAt(0).toUpperCase() + userName.slice(1);

      // Email wali jagah → full email
      const emailDisplay = document.getElementById("profile-email");
      if (emailDisplay) {
        emailDisplay.textContent = userEmail;
      }
    }

    if (profileIcon) {
      profileIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        profileMenu.classList.toggle("show");
      });
    }

    // click outside → close menu
    document.addEventListener("click", () => {
      if (profileMenu) profileMenu.classList.remove("show");
    });

    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userName");
        window.location.href = "index.html";
      });
    }
  }    // <- if(content-area) close
});
