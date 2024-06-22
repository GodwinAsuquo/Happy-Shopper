import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToast, removeToast } from "./toastSlice";
import ToastWrapper from "./ToastWrapper"; 

const ToastProvider = () => {
  const dispatch = useDispatch();
  const toasts = useSelector((state) => state.toast.toasts);

  // Function to remove toast after it's closed
  const handleToastClose = (id) => {
    dispatch(removeToast(id));
  };

  return (
    <>
      <ToastWrapper toasts={toasts} removeToast={handleToastClose} />{" "}
      {/* Use ToastWrapper to render toasts */}
      <ToastContainer />
    </>
  );
};

export default ToastProvider;
