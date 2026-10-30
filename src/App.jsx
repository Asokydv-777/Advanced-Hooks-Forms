import NameInput from "./NameInput";
import ThemeToggle from "./ThemeToggle";
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Custom Hook Demo</h1>
      <p>These two components use the same hook but have separate state.</p>
      <NameInput />
      <ThemeToggle />
    </div>
  );
}

export default App;
