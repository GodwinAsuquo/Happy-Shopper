/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPortal } from "react-dom";
import Toast from "./Toast";

const ToastWrapper = ({ toasts, removeToast }: any) => {
  return createPortal(
    <div className="z-50">
      {toasts.map((toast: any) => (
        <Toast
          id={toast.id}
          status={toast.status}
          description={toast.description}
          isClosable={toast.isClosable}
          //    removeToast={removeToast}
          removeToast={() => removeToast(toast.id, 4000)}
        />
      ))}
    </div>,
    document.body
  );
};
export default ToastWrapper;
