document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseMsg = document.getElementById("responseMsg");

  if (!name || !email || !message) {
    responseMsg.textContent = "⚠️ Please fill all fields.";
    responseMsg.style.color = "red";
    return;
  }

  responseMsg.textContent = "✅ Message sent successfully (demo only)";
  responseMsg.style.color = "green";

  document.getElementById("contactForm").reset();
});
