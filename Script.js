var typed = new Typed(".role", {
  strings: [
    "Full Stack Developer. . .",
    "DevOps Engineer",
    "Solutions Architect",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-body", { origin: "top" });
ScrollReveal().reveal(".education-experience", { origin: "top" });
ScrollReveal().reveal(".f_projects", { origin: "top" });
ScrollReveal().reveal(".d_projects", { origin: "top" });
ScrollReveal().reveal(".c_projects", { origin: "top" });
ScrollReveal().reveal("#mySkills", { origin: "top" });
ScrollReveal().reveal(".contact-section", { origin: "top" });
ScrollReveal().reveal(".home-body h1", { origin: "left" });
ScrollReveal().reveal(".home-body h3", { origin: "right" });
ScrollReveal().reveal(".links", { origin: "right" });
ScrollReveal().reveal(".home-logo", { origin: "bottom" });
ScrollReveal().reveal(".timeline", { origin: "bottom" });
ScrollReveal().reveal(".skills", { origin: "bottom" });
ScrollReveal().reveal(".f_slider", { origin: "bottom" });
ScrollReveal().reveal(".d_slider", { origin: "bottom" });
ScrollReveal().reveal(".c_slider", { origin: "bottom" });

$(document).ready(function () {
  $(".collapse-icon").click(function () {
    $(".m-nav-list").slideToggle(500);
  });

  $(".m-nav-list a").click(function () {
    $(".m-nav-list").slideUp(300);
  });
});
