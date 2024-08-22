interface TaskInterface {
  dateTime?: string; // Todo: Check for the right date type
  taskName: string;
  taskDescription?: string;
  icon?: React.ReactNode;
}

const Task: React.FC<TaskInterface> = ({
  dateTime,
  taskName,
  taskDescription,
  icon,
}) => {
  return (
    <div className="p-5 bg-white border rounded-md min-w-96 drop-shadow-md border-borderColor hover:cursor-pointer">
      <div className="flex flex-row items-center gap-4 mx-1">
        <div className="p-2 text-3xl text-white rounded-md bg-iconGreen">
          {/* Todo: Make the styling of the icons to be flexible */}
          {icon}
        </div>
        <div className="flex flex-col justify-center gap-1">
          <i className="text-sm text-gray">{dateTime}</i>
          <h2 className="text-2xl font-semibold text-darkBlue">{taskName}</h2>
          <p className="text-base text-gray">{taskDescription}</p>
        </div>
        {/* Todo: Add options here */}
      </div>
    </div>
  );
};

export default Task;
