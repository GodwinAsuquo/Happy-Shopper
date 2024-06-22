import { useDispatch } from "react-redux";
import trash from "../assets/trash.png";
import {
  removeItem,
  increase,
  decrease,
} from "../stateMgt/features/cart/cartSlice";
import { CartItemProps } from "../../src/utils/types";

const CartItem = ({
  id,
  img,
  company,
  product,
  quantity,
  price,
}: CartItemProps) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex mt-10 space-x-10 lg:space-x- max-w-[600px]">
        <img className="w-24" src={img} alt="" />
        <div className="ml-4 mt-5 space-y-3">
          <p className="text-gray-400 ">{company}</p>
          <h4>{product}</h4>
          <div className="flex items-center space-x-2">
            <p className="text-2xl font-normal">${(price - (price * 0.1)).toFixed(2)}</p>
            <p className="line-through text-gray-500">${price.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <img
            className="w-8"
            onClick={() => dispatch(removeItem(id))}
            src={trash}
            alt=""
          />

          <div className="flex  space-x-2 items-center justify-between">
            <div
              onClick={() => {
                if (quantity === 1) {
                  dispatch(removeItem(id));
                  return;
                }
                dispatch(decrease({ id }));
              }}
              className="bg-[#F5F5F5] cursor-pointer text-center px-3 py-1  border border-gray-300 rounded-lg"
            >
              -
            </div>
            <div className="bg-[#F5F5F5] text-center px-4 py-2  border border-gray-300 rounded-lg">
              {quantity}
            </div>
            <div
              onClick={() => {
                dispatch(increase({ id }));
              }}
              className="bg-[#F5F5F5] cursor-pointer text-center px-3 py-1  border border-gray-300 rounded-lg"
            >
              +
            </div>
          </div>
        </div>
      </div>
    </>
  );
  3;
};
export default CartItem;
