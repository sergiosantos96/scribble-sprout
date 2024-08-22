import React from "react";
import AddTask from "./AddTask";
import { useModal } from "../../utils/constants";
import useDialogState from "../../hooks/useDialogState";
import UnsavedChangesDialog from "../dialogs/UnsavedChangesDialog";

const TaskModal = () => {
  const { isModalOpen, closeModal, setIsFormChanged, isFormChanged } =
    useModal();
  const { isDialogOpen, openDialog, closeDialog } = useDialogState();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      isFormChanged ? openDialog() : closeModal();
    }
  };

  const handleDialogConfirm = () => {
    closeModal();
  };

  const handleDialogCancel = () => {
    closeDialog();
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      {isDialogOpen && (
        <UnsavedChangesDialog
          onCancel={handleDialogCancel}
          onConfirm={handleDialogConfirm}
        />
      )}
      <AddTask closeModal={closeModal} setIsFormChanged={setIsFormChanged} />
    </div>
  );
};

export default TaskModal;
