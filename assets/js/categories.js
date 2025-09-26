
  // ----- User dropdown menu -----
  const userButton = document.getElementById("userMenuButton");
  const menu = document.getElementById("userMenu");

  userButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  window.addEventListener("click", function (e) {
    if (!userButton.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("hidden");
    }
  });

  // ----- Mobile navigation menu -----
  const mobileBtn = document.querySelector("#mobile-btn");
  const mobileMenu = document.querySelector("#mobile-menu");

  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
