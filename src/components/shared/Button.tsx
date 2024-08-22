interface ButtonInterface {
  label?: string;
  icon?: React.ReactNode;
  onClick: () => void;
  bgColor?: string;
}

const Button: React.FC<ButtonInterface> = ({
  label,
  icon,
  onClick,
  bgColor,
}) => {
  const buttonStyle = bgColor ? { backgroundColor: bgColor } : {};

  return (
    <button
      className={`flex items-center p-2 text-white transition rounded-md active:scale-95 ${
        bgColor ? "" : "bg-primaryBlue"
      } hover:bg-darkBlue`}
      onClick={onClick}
      style={buttonStyle}
    >
      <div className="flex items-center gap-1">
        {icon && <span>{icon}</span>}
        {label && <span>{label}</span>}
      </div>
    </button>
  );
};

export default Button;
