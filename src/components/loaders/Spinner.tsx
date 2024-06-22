import { createPortal } from "react-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Spinner = ({ color }: { color: string }) => {
  return createPortal (
    <AiOutlineLoading3Quarters
      size={30}
      className="animate-spin text-center"
      color={color}
    />, document.body
  );
};
export default Spinner;
