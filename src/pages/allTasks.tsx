import React, { useState } from "react";
import type { ITask } from "../types/task";
import Task from "../components/Task";
import Input from "../components/Input";
import Categories from "../components/Categories";
import AddTaskBtn from "../components/AddTaskBtn";
import type { CategoryType } from "../types/category";
import type { AlertType } from "../types/alert";
import Alert from "../components/Alert";

const AllTasks = () => {
  const [allTasks, setAllTasks] = useState<ITask[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("General");
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<AlertType | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setTaskInput(inputValue);
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryValue = e.target.value as CategoryType;
    setSelectedCategory(categoryValue);
  };

  const handleClickAddBtn = () => {
    if (taskInput === "") {
      setAlertMessage("Please fill input");
      setAlertType("warning");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1500);
      return;
    }

    const newTask: ITask = {
      id: Date.now(),
      text: taskInput,
      category: selectedCategory,
      completed: false,
    };

    const newAllTasks = [...allTasks, newTask];
    setAllTasks(newAllTasks);
    setTaskInput("");
    setSelectedCategory("General");
    setAlertMessage("Your task successfully created!");
    setAlertType("addTask");
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  };

  const handleDeleteTask = (idToDelete: number) => {
    const allNewTasks = allTasks.filter((task) => task.id !== idToDelete);
    setAllTasks(allNewTasks);
    setAlertMessage("Your task successfully deleted!");
    setAlertType("delete");
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  };

  const handleCheckboxChange = (taskId: number) => {
    const updateTask = allTasks.map((task) => {
      if (task.id === taskId) {
        const newStatus = !task.completed;
        if (newStatus) {
          setAlertMessage("Your task has been cheked!");
          setShowAlert(true);
          setAlertType("completed");
        } else {
          setShowAlert(false);
          setAlertMessage("");
          setAlertType(null);
        }
        setTimeout(() => {
          setShowAlert(false);
        }, 1500);

        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setAllTasks(updateTask);
  };

  return (
    <div className="w-full h-full relative">
      <Alert message={alertMessage} visible={showAlert} type={alertType} />
      <div className="w-full flex flex-col justify-center p-6 pt-12 gap-3 ">
        <p className="font-bold text-3xl">All Tasks</p>
        <Input taskInput={taskInput} onTaskInputChange={handleInputChange} />
        <div className="flex gap-4">
          <Categories
            onCategorySelect={handleChangeCategory}
            selectedCategory={selectedCategory}
          />
          <AddTaskBtn onAddTask={handleClickAddBtn} />
        </div>

        {allTasks.map((task) => (
          <Task
            task={task}
            onChangeStatus={() => handleCheckboxChange(task.id)}
            onDelete={() => handleDeleteTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
