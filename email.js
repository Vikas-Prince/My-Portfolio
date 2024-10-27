//email.js

const PUB_KEY = "v37uCcllXTcRyOMwg";

(function () {
  emailjs.init(PUB_KEY);
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = this.full_name.value;
    const email = this.email.value;
    const mobileNumber = this.mobile_number.value;
    const emailSubject = this.email_subject.value;
    const message = this.message.value;

    emailjs
      .send("service_f0ia27a", "template_tao5gjk", {
        full_name: fullName,
        email: email,
        mobile_number: mobileNumber,
        email_subject: emailSubject,
        message: message,
      })
      .then(
        function (response) {
          console.log("Email sent successfully:", response);
          showPopup();
          document.getElementById("contact-form").reset();
        },
        function (error) {
          showPopup();
          console.error("Failed to send email:", error);
          document.getElementById("contact-form").reset();
        }
      );
  });

// Function to show the popup
function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
}

// Close the popup when clicking the close button or OK button
document.getElementById("close-popup").onclick = function () {
  document.getElementById("popup").style.display = "none";
};

document.getElementById("ok-button").onclick = function () {
  document.getElementById("popup").style.display = "none";
};
