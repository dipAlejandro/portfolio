(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "OHnIcnmuMn-UzIT2K",
    });
})();

window.onload = function() {

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const from_email = document.getElementById("from_email").value;

        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'template_contact_form', this)
            .then(function () {
                alert('The message was sent successfully!!. I will reply to you as soon as possible.');
            },function (error) {
               alert('FAILED...' + JSON.stringify(error));
            });
    });
}