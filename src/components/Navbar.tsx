import Button from "./Button";
import { useState } from "react";
import { FaPlus, FaFilter } from "react-icons/fa6";
import AddTask from "./AddTask";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-20 w-100">
      <div className="flex items-center justify-between pt-8">
        <img className="w-56 pl-2" src="/assets/logo.svg" alt="logo" />
        <div className="flex gap-4 pr-2">
          <Button
            icon={<FaPlus color={"#fff"} size={20} />}
            onClick={() => setIsModalOpen(true)}
          ></Button>
          <Button
            icon={<FaFilter color={"#fff"} />}
            onClick={() => console.log("filters")}
          ></Button>
        </div>
      </div>

      {isModalOpen && <AddTask />}
    </div>
  );
};

export default Navbar;
