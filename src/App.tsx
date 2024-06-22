import { useDispatch, useSelector } from "react-redux";
import { Pages } from "./routes";
import { calculateTotals } from "./stateMgt/features/cart/cartSlice";
import { useEffect } from "react";
import { RootState } from "./stateMgt/store";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store: RootState) => store.cart);
  const { isOpen } = useSelector((store: RootState) => store.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, cartItems]);

  return (
    <>
      {isOpen && <Modal />}
      <Pages />
    </>
  );
}

export default App;
