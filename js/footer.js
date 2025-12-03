// Function to set active footer link
function setActiveFooterLink() {
  let currentPage = window.location.pathname;
  // Remove base URL from path if present
  if (currentPage.startsWith(BASE_URL)) {
    currentPage = currentPage.substring(BASE_URL.length);
  }
  currentPage = currentPage.split("/").pop() || "index.html";

  const footerLinks = document.querySelectorAll(".footer-nav .nav-link");

  footerLinks.forEach((link) => {
    link.classList.remove("active");
    const linkHref = link.getAttribute("href");
    if (
      currentPage === linkHref ||
      (currentPage === "" && linkHref === "index.html")
    ) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

// Generate footer HTML
document.write(`
  <div class="container start">
    <div class="row w-100">
      <div class="col-12 col-lg-3">
        <div class="main">
          <div class="logo">
            <img src="${BASE_URL}/img/cairo Tech Logo.png" alt="Cairo Tech Logo">
          </div>
          <p id="footer-desc">We provide complete lifting and crane system solutions for industrial and governmental
            projects. We are committed to quality, precision, and reliable after-sales support.</p>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <h3 id="f-address">Address</h3>
        <div class="information mt-4">
        <p style="font-weight:bold;" id="main-office">Main office :</p>
          <div class="location mb-2">
            <p id="address-maadi">7 Philistine St, New Maadi. Cairo. Egypt.</p>
          </div>
          <p style="font-weight:bold;" id="factory">Factory : </p>
          <div class="location">
            <p id="address-obour">Block 20027-El Obour industrial area, 2nd zone</p>
          </div>
          <p style="font-weight:bold;" id="KSA-branch">KSA branch : </p>
          <div class="location">
            <p id="address-ksa">7864 Madinah Road Branch - Al Salamah District, Jeddah</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <h3 id="f-address">Contact Us</h3>
        <div class="information">
          <div class="location d-flex align-items-center gap-2 mt-2">
            <i class="fa-solid fa-phone"></i>
            <p style="font-weight:bold;" id="phone">Phone:</p>
            </div>
            <p  style="direction:ltr;">+20106612990</p>
          <div class="location d-flex align-items-center gap-2 mt-2">
            <i class="fa-solid fa-phone"></i>
            <p style="font-weight:bold;" id="ksa">KSA:</p>
            </div>
            <p  style="direction:ltr;">++966508131232</p>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <h3 id="f-quick-links">Quick Links</h3>
        <div class="links">
          <ul class="navbar-nav footer-nav">
            <li class="nav-item">
              <a class="nav-link" id="f-home" href="${BASE_URL}/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="f-about" href="${BASE_URL}/about">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="f-projects" href="${BASE_URL}/projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="f-products" href="${BASE_URL}/products">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="f-contact" href="${BASE_URL}/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="end-footer">
    <div class="container">
      <p id="footer-copyright">© ${new Date().getFullYear()} Cairo Tech. All Rights Reserved.</p>
      <div class="d-flex gap-1 justify-content-center">
      <p  id="made-in">Work by</p>
      <a  href="https://thestartupvibe.com/" id="startup-vibe">Startup Vibe</a>
      </div>
    </div>
  </div>
  <a href="#" class="back-to-top" aria-label="Back to top">
    <i class="fas fa-arrow-up"></i>
  </a>
`);

// Set active footer link when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  setActiveFooterLink();

  // Back to top button functionality
  const backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
