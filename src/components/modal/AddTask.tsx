import { useState } from "react";
import LabeledInput from "../inputs/LabeledInput";
import LabeledTextarea from "../inputs/LabeledTextarea";
import Button from "../shared/Button";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

interface AddTaskInterface {
  closeModal: () => void;
  setIsFormChanged: (changed: boolean) => void;
}

const AddTask: React.FC<AddTaskInterface> = ({
  closeModal,
  setIsFormChanged,
}) => {
  const [isFormChanged, setIsFormChangedState] = useState(false);

  const handleInputChange = () => {
    setIsFormChangedState(true);
    setIsFormChanged(true);
  };

  const handleModalClose = () => {
    if (isFormChanged) {
      alert("Form has changed!");
    }
    closeModal();
  };

  return (
    <div className="w-2/4">
      <header className="flex items-center justify-between w-full h-4 px-5 py-7 rounded-t-md bg-primaryBlue">
        <h2 className="text-2xl text-white">Create Task</h2>
        {/* Change the text if a task is being edited */}
        <Button icon={<IoMdClose size={22} />} onClick={handleModalClose} />
      </header>
      <form className="flex flex-col gap-5 p-5 bg-white border rounded-b-md border-borderColor">
        <LabeledInput
          label="Name"
          id="fname"
          name="fname"
          type="text"
          placeholder="What are you thinking?"
          maxLength={20}
          required
          onChange={handleInputChange}
        />
        <LabeledTextarea
          label="Notes"
          id="fnotes"
          name="fnotes"
          placeholder="Notes or additional information"
          onChange={handleInputChange}
        />
        <LabeledInput
          label="Date & Time"
          id="fdate"
          name="fdate"
          type="datetime-local"
          required
          onChange={handleInputChange}
        />
        {/* Todo: Add the category input */}
        <div className="flex justify-center">
          <Button
            icon={<FaPlus size={20} />}
            label="Add task"
            onClick={() => console.log("Task created")}
          />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
