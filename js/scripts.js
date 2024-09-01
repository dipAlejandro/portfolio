(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "8wX7E5R_OaXdkU5Ya",
  });
})();

function dinamicContactAlert(alertClass, title, body) {
  const alertElement = document.getElementById("contactAlert");
  alertElement.classList.remove("d-none");

  // Comprobar el alert class anterior
  if (alertElement.classList.contains("alert-danger")) {
    alertElement.classList.remove("alert-danger");
  } else if (alertElement.classList.contains("alert-success")) {
    alertElement.classList.remove("alert-success");
  }

  alertElement.classList.add(alertClass);

  alertElement.querySelector("h4").textContent = title;
  alertElement.querySelector("p").textContent = body;
}

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("contact_service", "template_contact_form", this).then(
        function () {
          dinamicContactAlert(
            "alert-success",
            "Your message was sent successfully!",
            "I will reply to you as soon as possible."
          );
          document.getElementById("contact-form").reset();
        },
        function (error) {
          dinamicContactAlert(
            "alert-danger",
            "Oops!",
            "Failed to send message. Please try again."
          );
          document.getElementById("contact-form").reset();
        }
      );
    });

  const alertList = document.querySelectorAll(".alert");
  alertList.forEach((element) => new bootstrap.Alert(element));
};
