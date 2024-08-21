import React from "react";
import AddTask from "./AddTask";
import { useModal } from "../../utils/constants";

const TaskModal = () => {
  const { isModalOpen, closeModal, setIsFormChanged, isFormChanged } =
    useModal();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      if (isFormChanged) {
        alert("Form has changed!");
      } else {
        closeModal();
      }
    }
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <AddTask closeModal={closeModal} setIsFormChanged={setIsFormChanged} />
    </div>
  );
};

export default TaskModal;
