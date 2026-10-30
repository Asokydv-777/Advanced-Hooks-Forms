import useLocalStorage from "./hooks/useLocalStorage";

function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Component B (Theme)</h3>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default ThemeToggle;
