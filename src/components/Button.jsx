function Button({ label, onClick, className = '', btnColor = 'pink' }) {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{ backgroundColor: btnColor }}
    >
      {label}
    </button>
  );
}

export default Button;
