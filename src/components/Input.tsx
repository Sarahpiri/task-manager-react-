import React, { useState } from "react";

interface TaskInputProps {
  taskInput: string;
  onTaskInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<TaskInputProps> = ({ taskInput, onTaskInputChange }) => {
  return (
    <input
      required
      type="text"
      placeholder="Add a new task insdie ‘All’ category"
      value={taskInput}
      onChange={onTaskInputChange}
      className="input input-secondary border-none w-full bg-pink-200 rounded-xl"
    />
  );
};

export default Input;
