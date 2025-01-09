document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      document.getElementById("confirmation").innerText =
        "Thank you for your message, " + name + "!";
      document.getElementById("contact-form").reset();
    } else {
      document.getElementById("confirmation").innerText =
        "Please fill out all fields.";
      document.getElementById("confirmation").style.color = "red";
    }
  });
