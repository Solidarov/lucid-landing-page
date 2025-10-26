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

      // Remove active class from all links
      navLinks.forEach((navLink) => navLink.classList.remove("active"));

      // Add active class to the clicked link
      link.classList.add("active");
    });
  });
    const forms = document.querySelectorAll('.needs-validation');
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
        } else {
          event.preventDefault();
          alert('Дякуємо за ваш відгук!');
          form.reset();
          form.classList.remove('was-validated');
        }
      }, false);
    });
});