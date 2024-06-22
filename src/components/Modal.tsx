import { useDispatch } from "react-redux";
import { clearCart } from "../stateMgt/features/cart/cartSlice";
import { closeModal } from "../stateMgt/features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-50 border border-blue">
      <div className="px-5 py-7 bg-[#fff] rounded-[5px] w-[30%] mx-auto mt-[16em] text-center space-y-4">
        <h3>Remove all items from the shopping cart?</h3>
        <div className="flex justify-center items-center space-x-3">
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
            type="button"
            className="border rounded-lg p-2"
          >
            Confirm
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            type="button"
            className="border rounded-lg p-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
