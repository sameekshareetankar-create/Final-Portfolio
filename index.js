var form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.querySelector("input[name='name']").value;
    var email = document.querySelector("input[name='email']").value;
    var subject = document.querySelector("input[name='subject']").value;
    var message = document.querySelector("textarea[name='message']").value;

    var formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    var allData = JSON.parse(localStorage.getItem("contactData")) || [];
    allData.push(formData);

    localStorage.setItem("contactData", JSON.stringify(allData));
    console.log(allData);

    alert("Form submitted successfully!");

    form.reset();
  });
}
