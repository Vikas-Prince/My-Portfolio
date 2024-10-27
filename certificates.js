// certificates.js
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
    link: "Images/Mern-Stack.jpg",
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
    link: "Images/React-Developer.jpg",
  },
  {
    id: 6,
    image: "Images/Infosys-certified-frontend.jpg",
    title: "Infosys Certified FrontEnd Developer",
    link: "Images/Infosys-certified-frontend.jpg",
  },
  {
    id: 7,
    image: "Images/postman.png",
    title: "Postman API Fundamentals Student Expert",
    link: "Images/postman.png",
  },
  {
    id: 8,
    image: "Images/infosys-certified-mongo.png",
    title: "Infosys Certified MongoDB Developer",
    link: "Images/infosys-certified-mongo.png",
  },
];

$(document).ready(function () {
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
