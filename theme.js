// Check and apply dark mode on load
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark');
    }
  });
  
  // Go to login page
  function goToLogin() {
    localStorage.removeItem('userSession'); // optional session clear
    window.location.href = "index.html";
  }
  
  // Optional: Toggle function you can add to any page
  function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  }
  