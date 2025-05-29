import React from "react";
import type { AlertType } from "../types/alert";

interface AlertProps {
  visible: boolean;
  message: string;
  type: AlertType | null;
}

const Alert: React.FC<AlertProps> = ({ visible, message, type }) => {
  if (!visible) {
    return null;
  }

  const renderIcon = () => {
    switch (type) {
      case "warning":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        );
      case "addTask":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );

      case "completed":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        );

      case "delete":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );

      default:
        break;
    }
  };

  const renderClass = () => {
    switch (type) {
      case "addTask":
        return "alert alert-success alert-soft";
      case "completed":
        return "alert alert-info alert-soft";
      case "delete":
        return "alert alert-error alert-soft";
      case "warning":
        return "alert alert-warning alert-soft";
      default:
        break;
    }
  };

  return (
    <>
      <div className="p-6 absolute top-0 right-0 z-50">
        <div role="alert" className={renderClass()}>
          {renderIcon()}
          <span>{message}</span>
        </div>
      </div>
    </>
  );
};

export default Alert;
