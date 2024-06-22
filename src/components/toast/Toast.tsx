/* eslint-disable @typescript-eslint/no-explicit-any */
import { BiErrorCircle } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { useEffect } from "react";

const Toast= ({
  id,
  status,
  description,
  isClosable,
  removeToast,
}: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  const handleClick = () => {
    removeToast(id);
    console.log("done");
  };

  return (
    <div
      className={`z-50 absolute right-[20px] top-6 border ${
        status === "error" ? "border-red-500" : "border-green-500"
      } flex items-center justify-between transition-all cursor-pointer ease-out delay-500  ${
        status === "error" ? "bg-red-100" : "bg-green-100"
      } p-[20px] rounded`}
      role="alert"
    >
      {status === "error" ? (
        <div className="text-red-500">
          <BiErrorCircle />
        </div>
      ) : (
        <div className="text-green-500">
          <FaRegCheckCircle />
        </div>
      )}
      <p>{description}</p>
      {isClosable && (
        <button type="button" onClick={handleClick}>
          {status === "error" ? (
            <div className="text-red-500">{<MdOutlineCancel />}</div>
          ) : null}
        </button>
      )}
    </div>
  );
};
export default Toast;
