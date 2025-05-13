function validateForm() {
  const form = document.forms["contactForm"];
  const name = form["name"].value;
  const email = form["email"].value;
  const subject = form["subject"].value;
  const message = form["message"].value;

  if (!name || !email || !subject || !message) {
    alert("All fields must be filled out!");
    return false;
  }
  return true;
}
