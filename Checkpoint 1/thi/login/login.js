document.getElementById('loginForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
  
    if (!emailValue || !passwordValue) {
      event.preventDefault();
      alert("Please fill in both email and password fields.");
    }
  });
  
  