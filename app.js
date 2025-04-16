// let selectedRole = '';

// function showLogin(role) {
//   selectedRole = role;
//   document.getElementById('loginForm').style.display = 'block';
//   document.getElementById('loginTitle').innerText = `Login as ${role}`;
// }

// function login() {
//   const id = document.getElementById('loginId').value;
//   const pass = document.getElementById('password').value;
//   if (id && pass) {
//     if (selectedRole === 'student') window.location.href = 'student.html';
//     else if (selectedRole === 'guide') window.location.href = 'guide.html';
//     else if (selectedRole === 'reviewer') window.location.href = 'reviewer.html';
//   } else {
//     alert("Please enter login ID and password.");
//   }
// }

let selectedRole = ""; // Global role selector

function showLogin(role) {
  selectedRole = role;
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("loginTitle").innerText = `Login as ${role.charAt(0).toUpperCase() + role.slice(1)}`;
}

function login() {
  const loginId = document.getElementById("loginId").value;
  const password = document.getElementById("password").value;

  // Basic dummy check
  if (!loginId || !password) {
    alert("Please enter login ID and password.");
    return;
  }

  // Redirect to the appropriate dashboard
  if (selectedRole === "student") {
    window.location.href = "student.html";
  } else if (selectedRole === "guide") {
    window.location.href = "guide.html";
  } else if (selectedRole === "reviewer") {
    window.location.href = "reviewer.html";
  } else {
    alert("Please select a role first.");
  }
}

function goToThankYou() {
    window.location.href = "thankyou.html";
  }
  
