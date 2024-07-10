var certificates = [
  {
    id: 1,
    image: "Images/certificate.png",
    title: "Cisco Networking Essentials",
    link: "Images/certificate.png",
  },
  {
    id: 2,
    image: "Images/Mern-Stack.jpg",
    title: "Infosys Certified MERN Stack Developer",
    link: "Images/Mern-Stack.pdf",
  },
  {
    id: 3,
    image: "Images/webdev.png",
    title: "Web Development",
    link: "Images/webdev.png",
  },
  {
    id: 4,
    image: "Images/React-Developer.jpg",
    title: "React Frontend Developer",
    link: "Images/React-Developer.pdf",
  },
  // {
  //   id: 5,
  //   image: "Images/webdev.png",
  //   title: "Master in Full Stack Development",
  //   link: "Images/webdev.png",
  // },
  {
    id: 6,
    image: "Images/Infosys-certified-frontend.jpg",
    title: "Infosys Certified FrontEnd Developer",
    link: "Images/Infosys-certified-frontend.pdf",
  },
  {
    id: 7,
    image: "Images/postman.png",
    title: "Postman API Fundamentals Student Expert",
    link: "Images/postman.png",
  },
];

var projects = [
  {
    image: "Images/freshcart.png",
    title: "Fresh Cart",
    repoLink: "https://github.com/Vikas-Prince/Fresh-Cart.git",
    demoLink: "https://fresh-cart-mnld.onrender.com/",
  },
  {
    image: "Images/facebook.png",
    title: "Facebook Clone",
    repoLink: "https://github.com/Vikas-Prince/Static-Facebook-clone-.git",
    demoLink: "https://static-facebook.netlify.app",
  },
  {
    image: "Images/TechWave.png",
    title: "TechWave News Website",
    repoLink: "https://github.com/Vikas-Prince/TechWave-A-news-Website.git",
    demoLink: "https://techwave-news.netlify.app",
  },
  {
    image: "Images/netflix.png",
    title: "Netflix Clone",
    repoLink: "https://github.com/Vikas-Prince/netflix-clone.git",
    demoLink: "https://netflix-clone-tmdb.netlify.app/",
  },
  // {
  //   image: "Images/freshcart.png",
  //   title: "Fresh Cart",
  //   repoLink: "https://github.com/Vikas-Prince/Fresh-Cart.git",
  //   demoLink: "https://github.com/Vikas-Prince/Fresh-Cart.git",
  // },
];

var typed = new Typed(".role", {
  strings: ["Full Stack Developer. . ."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

ScrollReveal({
  reset: true,
  // distance: "80px",
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-body", { origin: "top" });
ScrollReveal().reveal(".education-experience", { origin: "top" });
ScrollReveal().reveal(".projects", { origin: "top" });
ScrollReveal().reveal("#mySkills", { origin: "top" });
// ScrollReveal().reveal(".certificates", { origin: "top" });
// ScrollReveal().reveal(".contact-section", { origin: "top" });
// ScrollReveal().reveal(".contact-flex", { origin: "bottom" });
ScrollReveal().reveal(".home-body h1", { origin: "left" });
ScrollReveal().reveal(".home-body h3", { origin: "right" });
ScrollReveal().reveal(".links", { origin: "right" });
ScrollReveal().reveal(".home-logo", { origin: "bottom" });
ScrollReveal().reveal(".timeline", { origin: "bottom" });
ScrollReveal().reveal(".skills", { origin: "bottom" });
ScrollReveal().reveal(".slider", { origin: "bottom" });
// ScrollReveal().reveal(".c-slider", { origin: "bottom" });

$(document).ready(function () {
  var $projectContainer = $("#projectContainer");

  // Loop through each project and append to the container
  projects.forEach(function (proj) {
    var projectHTML = `
                    <div class="slider-container card1">
                        <div class="project-1">
                            <img src="${proj.image}" alt=""><br>
                            <h3>${proj.title}</h3>
                            <div class="btn-section">
                                <a href="${proj.repoLink}" target="_blank" class="git-btn">Git Repo</a>
                                <a href="${proj.demoLink}" target="_blank" class="demo-btn">View Demo</a>
                            </div>
                        </div>
                    </div>
                `;
    $projectContainer.append(projectHTML);
  });

  $projectContainer.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    speed: 1000,
    autoplaySpeed: 2000,
    prevArrow:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill left-arrow-icon" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>',
    nextArrow:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill right-arrow-icon" viewBox="0 0 16 16"><path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg>',

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".collapse-icon").click(function () {
    $(".m-nav-list").slideToggle(500);
  });

  $(".m-nav-list a").click(function () {
    $(".m-nav-list").slideUp(300);
  });

  var $certificateContainer = $("#certificateContainer");

  certificates.forEach(function (cert) {
    var certificateHTML = `
                    <div class="slider-container card1">
                        <div class="certificate">
                            <img src="${cert.image}" alt=""><br>
                            <h3>${cert.title}</h3>
                            <div class="btn-section btn-center">
                                <a href="${cert.link}" target="_blank" class="git-btn btn-center viewCertificateBtn">View Certificate</a>
                            </div>
                        </div>
                    </div>
                `;
    $certificateContainer.append(certificateHTML);
  });

  $certificateContainer.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    speed: 1000,
    autoplaySpeed: 2000,

    nextArrow:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill right-arrow-icon" viewBox="0 0 16 16"><path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg>',

    prevArrow:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill left-arrow-icon" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>',

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $("#viewCertificateBtn").on("click", function (event) {
    event.preventDefault();
    var url = $(this).attr("href");
    window.open(
      url,
      "_blank",
      "width=" +
        screen.width +
        ",height=" +
        screen.height +
        ",resizable=yes,scrollbars=yes"
    );
  });
});
