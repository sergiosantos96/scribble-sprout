interface ButtonProps {
  label?: string;
  icon: React.ReactNode;

  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, icon, onClick }) => {
  return (
    <button
      className="flex items-center p-2 text-white transition rounded-md active:scale-95 bg-primaryBlue hover:bg-darkBlue"
      onClick={onClick}
    >
      <span>{icon}</span>
      <span className={`text-white ${label ? "px-1" : ""}`}>{label}</span>
    </button>
  );
};

export default Button;
