
// Zustände
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Elemente
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
const mobileDarkModeToggle = document.getElementById('mobileDarkModeToggle');
const mobileDarkModeIcon = document.getElementById('mobileDarkModeIcon');
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const authSection = document.getElementById('authSection');
const mobileAuthSection = document.getElementById('mobileAuthSection');

// Dark Mode
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('darkMode', isDarkMode);
  document.body.classList.toggle('dark', isDarkMode);
  
  darkModeIcon.classList.toggle('fa-moon', !isDarkMode);
  darkModeIcon.classList.toggle('fa-sun', isDarkMode);
  mobileDarkModeIcon.classList.toggle('fa-moon', !isDarkMode);
  mobileDarkModeIcon.classList.toggle('fa-sun', isDarkMode);
}

// Event Listener für Dark Mode
darkModeToggle.addEventListener('click', toggleDarkMode);
mobileDarkModeToggle.addEventListener('click', toggleDarkMode);

// Mobile Menü Steuerung
mobileMenuButton.addEventListener('click', (event) => {
  event.stopPropagation(); // Verhindert, dass das Klick-Event nach oben weitergegeben wird
  mobileMenu.classList.toggle('open');
});

// Schließen des mobilen Menüs, wenn außerhalb geklickt wird
document.addEventListener('click', (event) => {
  if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
    mobileMenu.classList.remove('open');
  }
});

// Auth-Status simulieren
function updateAuthUI() {
  const isAuthenticated = false; // Simulierter Authentifizierungsstatus

  if (isAuthenticated) {
    authSection.innerHTML = `
      <a href="/Community-backend-1.0-SNAPSHOT/profile" class="nav-icon-link">
        <i class="fas fa-user-circle nav-icon"></i>
      </a>
    `;
    mobileAuthSection.innerHTML = `
      <a href="/Community-backend-1.0-SNAPSHOT/profile" class="flex items-center justify-center space-x-2 p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
        <i class="fas fa-user-circle h-5 w-5"></i> <span>Profil</span>
      </a>
    `;
  } else {
    authSection.innerHTML = `
      <a href="/Community-backend-1.0-SNAPSHOT/auth" class="px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-medium hover:bg-purple-600 transition-colors duration-200">
        Sign In
      </a>
    `;
    mobileAuthSection.innerHTML = `
      <a href="/Community-backend-1.0-SNAPSHOT/auth" class="px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-medium hover:bg-purple-600 transition-colors duration-200">
        Sign In
      </a>
    `;
  }
}

// Initialisierung beim Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
  if (isDarkMode) {
    document.body.classList.add('dark');
    darkModeIcon.classList.replace('fa-moon', 'fa-sun');
    mobileDarkModeIcon.classList.replace('fa-moon', 'fa-sun');
  }
  updateAuthUI();
});


