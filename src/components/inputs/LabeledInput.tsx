interface LabeledInputInterface {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  maxLength?: number;
  required?: boolean;
  onChange: () => void;
}

const LabeledInput: React.FC<LabeledInputInterface> = ({
  label,
  id,
  name,
  type,
  placeholder,
  maxLength,
  required,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-base font-medium text-darkBlue" htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        className="p-2 pl-3 text-sm border rounded-md  border-borderColor placeholder-text focus:border-primaryBlue focus:outline-none focus:ring-1 focus:ring-indigo-600"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default LabeledInput;
