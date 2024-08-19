interface ButtonProps {
  label?: string;
  icon: React.ReactNode;

  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, icon, onClick }) => {
  return (
    <button
      className="p-2 transition rounded-md active:scale-95 bg-primaryBlue hover:bg-darkBlue"
      onClick={onClick}
    >
      {icon} <span className="text-white">{label}</span>
    </button>
  );
};

export default Button;
