document.addEventListener("DOMContentLoaded", () => {
  // Select all nav links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Set the first nav link as active on initial render
  if (navLinks.length > 0) {
    navLinks[0].classList.add("active");
  }

  // Add click event listener to each nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Prevent default behavior
      event.preventDefault();

      // Remove active class from all links
      navLinks.forEach((navLink) => navLink.classList.remove("active"));

      // Add active class to the clicked link
      link.classList.add("active");
    });
  });
});