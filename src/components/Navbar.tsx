import { useModal } from "../utils/constants";
import Button from "./shared/Button";
import { FaPlus, FaFilter } from "react-icons/fa6";

const Navbar = () => {
  const { openModal } = useModal();

  return (
    <div className="h-20 w-100">
      <div className="flex items-center justify-between pt-8">
        <img className="w-56 pl-2" src="/assets/logo.svg" alt="logo" />
        <div className="flex gap-4 pr-2">
          <Button icon={<FaPlus size={20} />} onClick={openModal} />
          <Button icon={<FaFilter />} onClick={() => console.log("filters")} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
