// Projects Section

// Full Stack Projects
var fullstack_projects = [
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
];

// DevOps Projects
var dev_projects = [
  {
    image: "Images/master-architecture.png",
    title: "Complete End to End Pipeline",
    repoLink: "https://github.com/Vikas-Prince/End-to-End-CI-CD-Pipeline.git",
  },
  {
    image: "Images/microservicesarc.png",
    title: "Microservices Deployment",
    repoLink: "https://github.com/Vikas-Prince/MicroservicesAppDeployment.git",
  },
  {
    image: "Images/k8s_architect.png",
    title: "K8s Full Stack Deployment",
    repoLink: "https://github.com/Vikas-Prince/K8s-FullStack-Deployment.git",
  },
  {
    image: "Images/redditarch.png",
    title: "Reddit App on AWS EKS",
    repoLink: "https://github.com/Vikas-Prince/Reddit-App-on-AWS-EKS.git",
  },
  {
    image: "Images/freshcart.png",
    title: "JavaApp Deployment",
    repoLink: "https://github.com/Vikas-Prince/JavaApplicationDeployment.git",
  },
];

$(document).ready(function () {
  var $devprojectContainer = $("#DevOps_container");

  // Loop through each project and append to the container
  dev_projects.forEach(function (proj) {
    var projectHTML = `
                      <div class="slider-container card1">
                          <div class="project-1">
                              <img src="${proj.image}" id="dev-img" alt=""><br>
                              <h3>${proj.title}</h3>
                              <div class="btn-section btn-center">
                                <a href="${proj.repoLink}" target="_blank" class="git-btn" >Git Repo</a>
                              </div>
                          </div>
                      </div>
                  `;
    $devprojectContainer.append(projectHTML);
  });

  $devprojectContainer.slick({
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

  var $projectContainer = $("#projectContainer");

  // Loop through each project and append to the container
  fullstack_projects.forEach(function (proj) {
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
});
