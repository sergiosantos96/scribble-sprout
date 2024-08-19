import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="flex flex-col items-center h-screen text-lg bg-white justify-items-center font-roboto">
      <div className="container">
        <Navbar />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
