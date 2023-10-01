document.getElementById("theme-toggle").onclick = () => {
  const classList = document.documentElement.classList;
  const isDark = classList.contains("dark");
  classList.toggle("dark");
  try {
    localStorage.setItem("color-scheme", isDark ? "light" : "dark");
  } catch {}
};
