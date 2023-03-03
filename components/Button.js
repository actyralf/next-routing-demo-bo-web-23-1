export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: "red", padding: "12px" }}
    >
      {children}
    </button>
  );
}
