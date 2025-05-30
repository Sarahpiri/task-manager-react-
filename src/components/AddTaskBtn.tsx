import React from "react";

interface AddTaskButtonProps {
  onAddTask: () => void;
}

const AddTaskBtn: React.FC<AddTaskButtonProps> = ({ onAddTask }) => {
  return (
    <button
      onClick={onAddTask}
      className="!bg-pink-400 text-white !p-0 !px-4 hover:!bg-pink-300 !rounded-2xl !outline-0"
    >
      Add <span className="hidden lg:inline">Task</span>
    </button>
  );
};

export default AddTaskBtn;
