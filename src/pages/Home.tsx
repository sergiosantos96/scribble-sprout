import TaskModal from "../components/modal/TaskModal";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import { ModalProvider } from "../context/ModalContext";

const Home = () => {
  return (
    <ModalProvider>
      <div className="flex flex-col items-center h-screen text-lg bg-white justify-items-center font-roboto">
        <div className="container">
          <Navbar />
          <TaskList />
          <TaskModal />
        </div>
      </div>
    </ModalProvider>
  );
};

export default Home;
