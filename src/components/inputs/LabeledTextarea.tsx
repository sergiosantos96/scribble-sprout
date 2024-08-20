interface LabeledTextareaInterface {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  onChange: () => void;
}

const LabeledTextarea: React.FC<LabeledTextareaInterface> = ({
  label,
  id,
  name,
  placeholder,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-base font-medium text-darkBlue" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="w-full p-1 pt-2 pl-3 text-sm border rounded-md resize-none border-borderColor placeholder-text focus:border-primaryBlue focus:outline-none focus:ring-1 focus:ring-indigo-600"
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default LabeledTextarea;
