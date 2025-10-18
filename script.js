const themeToggle = document.getElementById("theme-toggle");

// Function to set the theme
function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.theme = theme;
}

// Event listener for the theme toggle button
themeToggle.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    setTheme("light");
  } else {
    setTheme("dark");
  }
});

// Initial theme setup on page load
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  setTheme("dark");
} else {
  setTheme("light");
}