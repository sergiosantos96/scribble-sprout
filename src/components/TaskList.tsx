import Task from "./Task";
import { FaBookOpen } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";

const TaskList = () => {
  return (
    <div className="flex flex-col items-center gap-5 p-2 mt-8">
      <Task
        icon={<FaBookOpen />}
        dateTime="Today - 15:00"
        taskName="Read a book"
        taskDescription="Meditations by Marcus Aurelius"
      />

      <Task
        icon={<GiKnifeFork />}
        dateTime="Tomorrow - 20:00"
        taskName="Make dinner"
        taskDescription="Sheperd's Pie"
      />
    </div>
  );
};

export default TaskList;
