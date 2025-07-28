export function Input({ value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: "0.5rem",
        borderRadius: "4px",
        border: "1px solid #ccc",
        marginBottom: "1rem",
        width: "100%",
      }}
    />
  );
}
