import Button from "../shared/Button";

interface DialogInterface {
  title: string;
  message: string;
  icon: React.ReactNode;
  cancelButton?: string;
  confirmButton?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Dialog: React.FC<DialogInterface> = ({
  title,
  message,
  icon,
  cancelButton = "Cancel",
  confirmButton = "Confirm",
  onConfirm = () => {},
  onCancel = () => {},
}) => {
  return (
    <div className="fixed z-50 flex flex-col items-center justify-center p-5 bg-white border rounded-md border-borderColor fade-in">
      <div className="flex items-center gap-5">
        <span className="p-3 text-dangerousRed bg-[#FEE2E2] rounded-3xl">
          {icon}
        </span>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-gray">{message}</p>
        </div>
      </div>
      <div className="flex justify-end w-full gap-2 mt-4">
        {cancelButton && (
          <Button label={cancelButton} onClick={onCancel} bgColor={"#DC2626"} />
        )}
        {confirmButton && <Button label={confirmButton} onClick={onConfirm} />}
      </div>
    </div>
  );
};

export default Dialog;
