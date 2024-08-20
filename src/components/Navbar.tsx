import Button from "./shared/Button";
import { useState } from "react";
import { FaPlus, FaFilter } from "react-icons/fa6";
import AddTask from "./AddTask";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormChanged, setIsFormChanged] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  const handleModalClose = () => {
    if (isFormChanged) {
      alert("Form has changed!");
    } else {
      closeModal();
    }
  };

  return (
    <div className="h-20 w-100">
      <div className="flex items-center justify-between pt-8">
        <img className="w-56 pl-2" src="/assets/logo.svg" alt="logo" />
        <div className="flex gap-4 pr-2">
          <Button
            icon={<FaPlus size={20} />}
            onClick={() => setIsModalOpen(true)}
          />
          <Button icon={<FaFilter />} onClick={() => console.log("filters")} />
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleBackdropClick}
        >
          <AddTask
            closeModal={handleModalClose}
            setIsFormChanged={setIsFormChanged}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
