import { useEffect } from "react";
import { AlertTypes } from "@/app/constants/alert";
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });

export default function Alert({
  message,
  type,
  onClose,
}: {
  message: string;
  type: AlertTypes;
  onClose: () => void;
}) {
  const alertClasses = {
    success: "bg-green-100 text-green-800 border-l-4 border-green-500",
    error: "bg-red-100 text-red-800 border-l-4 border-red-500",
    info: "bg-blue-100 text-blue-800 border-l-4 border-blue-500",
    warning: "bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500",
  };

  useEffect(() => {
    setTimeout(() => {
      onClose?.();
    }, 5000);
  });
  return (
    <div
      className={`alert p-4 mb-4 flex items-center space-x-4 rounded-lg shadow-md z-99 ${alertClasses[type]}`}
      role="alert"
      aria-live="assertive"
    >
      <span className="flex-grow">{message}</span>
      <button
        className="text-lg font-bold bg-transparent hover:bg-opacity-80 text-gray-700"
        aria-label="Close alert"
        onClick={() => onClose()}
      >
        &#x2715;
      </button>
    </div>
  );
}
