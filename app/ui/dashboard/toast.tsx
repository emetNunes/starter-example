"use client";
import { BellSlashIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

type ToastType = {
  message: string;
  title: string;
  type?: "success" | "error";
};

export function useToast(props: ToastType) {
  const [toast, setToast] = useState<ToastType | null>(null);
  let { message, title, type } = props;

  message = message.trim() != "" ? message : "Mensagem generica";
  title = title.trim() != "" ? title : "Aconteceu algum erro!";
  type = type == "error" ? type : type == "success" ? type : "error";

  const toastType = {
    message,
    title,
    type,
  };

  setToast(toastType);
}

export default function ToastInterface() {
  return (
    <Toast title={toast.title} message={toast.message} type={toast.type} />
  );
}

// INTERFACE
export function Toast({
  title,
  message,
  type,
}: {
  title: string;
  message: string;
  type?: "success" | "error";
}) {
  return (
    <div className="flex rounded-2xl bg-gray-100 w-[300px] absolute">
      <div
        className={clsx("rounded-l-2xl p-2", {
          "bg-red-500": type && "error",
          "bg-green-500": type == "success",
        })}
      ></div>
      <div className="p-4">
        <div className="flex text-lg font-semibold">
          <BellSlashIcon className="w-5 mr-2" />
          <h1>{title}</h1>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
}
