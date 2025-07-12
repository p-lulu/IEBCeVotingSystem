document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const voterID= document.getElementById("voterID").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  // Simulated login (replace this with real login logic later)
  if (voterID && password) {
    // Store the role for later use
    localStorage.setItem("role", role);
    localStorage.setItem(" voterID","5678"); // Simulate name from DB

    // Redirect based on role
    if (role === "voter") {
      window.location.href = "voter.html";
    } else if (role === "techadmin") {
      window.location.href = "techadmin.html";
    } else if (role === "supervisor") {
      window.location.href = "supervisor.html";
    }
  } else {
    alert("Please enter voterID and password");
  }
  
});