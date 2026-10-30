import useLocalStorage from "./hooks/useLocalStorage";

function NameInput() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Component A (Name)</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Stored name: {name}</p>
    </div>
  );
}

export default NameInput;
