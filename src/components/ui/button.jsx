export function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: "#4f46e5",
        color: "#fff",
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
