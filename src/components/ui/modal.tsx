import React, { ReactNode } from "react";
import { MdClose } from "react-icons/md";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  closeButton?: boolean;
  overlayClassName?: string;
  modalClassName?: string;
  contentClassName?: string;
  bgPrimary?: string;
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  closeButton = true,
  overlayClassName = "",
  modalClassName = "",
  contentClassName = "",
  bgPrimary = "bg-white dark:bg-gray-800",
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${overlayClassName}`}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative w-full max-w-7xl rounded-xl shadow-xl ${bgPrimary} ${modalClassName}`}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || closeButton) && (
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-xl font-semibold">{title}</h3>
            {closeButton && (
              <button
                onClick={onClose}
                className="p-1 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <MdClose className="w-5 h-5" />
              </button>
            )}
          </div>
        )}

        <div className={`p-6 ${contentClassName}`}>{children}</div>
      </div>
    </div>
  );
};
