// Base URL configuration

const BASE_URL = "";

// Function to get current page name

function getCurrentPage() {
  let path = window.location.pathname;

  // Remove base URL from path if present

  if (path.startsWith(BASE_URL)) {
    path = path.substring(BASE_URL.length);
  }

  if (path.endsWith("/")) {
    path = path + "index";
  }

  let page = path.split("/").pop() || "index";

  // If no extension, it's already clean

  if (!page.includes(".")) {
    return page === "index" ? "index" : page;
  }

  // Handle .html case for backward compatibility

  return page.replace(/\.html$/, "");
}

// Function to set active nav item

function setActiveNav() {
  const currentPage = getCurrentPage();

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
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

// Generate header HTML

document.write(`

  <!-- ************************* -->

  <!-- top-header -->

  <!-- ************************* -->

  <div class="info d-none d-lg-block" data-anim="fade-down">

    <div class="container-fluid">

      <div class="address d-flex justify-content-between">

        <div class="information d-flex gap-4">

          <div class="d-flex justify-content-center align-items-center gap-2">

            <i class="fa-solid fa-phone"></i>

            <p>+20 10 66125990</p>

          </div>

          <div class="d-flex justify-content-center align-items-center gap-2">

            <i class="fa-solid fa-envelope"></i>

            <p>mainoffice@cairotech.net</p>

          </div>

          <div class="d-flex justify-content-center align-items-center gap-2">

            <i class="fa-solid fa-clock"></i>

            <p>Sun - Thu : 09 AM - 05 PM</p>

          </div>

        </div>

        <div class="social d-flex gap-4">

          <a href="https://www.facebook.com/share/17ijMnw4bu/?mibextid=wwXIfr" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>

          <a href="https://www.linkedin.com/company/cairo-tech-llc/" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>

          <a href="https://wa.me/201066125990" target="_blank" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>

        </div>

      </div>

    </div>

  </div>



  <!-- ************************* -->

  <!-- navbar -->

  <!-- ************************* -->

  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-anim="fade-down">

    <div class="container">

      <a class="navbar-brand" href="${BASE_URL}/"><img src="${BASE_URL}/img/cairo Tech Logo.png" style="width: 50px;" alt="Cairo Tech Logo"></a>

      

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">

            <a class="nav-link" id="n-home" href="${BASE_URL}/">Home</a>

          </li>

          <li class="nav-item">

            <a class="nav-link" id="n-about" href="about">About Us</a>

          </li>

          <li class="nav-item">

            <a class="nav-link" id="n-projects" href="projects">Projects</a>

          </li>

          <li class="nav-item">

            <a class="nav-link" id="n-products" href="products">Products</a>

          </li>

          <li class="nav-item">

            <a class="nav-link" id="n-contact" href="contact">Contact Us</a>

          </li>

        </ul>

      </div>

      <div class="hero">

      <div class="translate">

      <button id="lang_btn" class="lang_btn" style="border: none; background: none; color: #fff;">EN</button>

      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"

        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

        <span class="navbar-toggler-icon"></span>

      </button>

      </div>

    </div>

  </nav>

`);

// Set active nav item when DOM is loaded

document.addEventListener("DOMContentLoaded", setActiveNav);
