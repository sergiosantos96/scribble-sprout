import Dialog from "./Dialog";
import { FaExclamationTriangle } from "react-icons/fa";

interface UnsavedChangesDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const UnsavedChangesDialog: React.FC<UnsavedChangesDialogProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <Dialog
      title="Unsaved changes"
      icon={<FaExclamationTriangle size={30} />}
      message="There are unsaved changes. Do you wish to continue without saving?"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default UnsavedChangesDialog;
