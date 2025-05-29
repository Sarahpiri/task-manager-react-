import React from "react";
import type { ITask } from "../types/task";
import TrashIcon from "../assets/trash";

interface ITaskProps {
  task: ITask;
  onDelete: (id: number) => void;
  onChangeStatus: (taskId: number) => void;
}

const Task: React.FC<ITaskProps> = ({
  task,
  onChangeStatus,
  onDelete,
}: ITaskProps) => {
  return (
    <div className="flex justify-between items-center bg-pink-50 p-4 rounded-xl  ">
      <div className="flex gap-4 items-center ">
        <input
          type="checkbox"
          checked={task.completed}
          className="checkbox checkbox-secondary "
          onChange={() => onChangeStatus(task.id)}
        />
        <p className={`${task.completed ? "line-through text-gray-500" : ""}`}>
          {task.text}
        </p>
        <p className="bg-pink-400 px-3 py-[2px] rounded-lg text-white text-sm">
          {task.category}
        </p>
      </div>
      <TrashIcon
        fill="#f6339a"
        width={18}
        height={18}
        className="cursor-pointer flex justify-center items-center"
        onClick={() => onDelete(task.id)}
      />
    </div>
  );
};

export default Task;
