import CartItem from "../../../components/CartItem";
import right_arrow from "../../../assets/circled-arrow-right.png";
import BestSellersItem from "../../../components/BestSellersItem";
import arrow from "../../../assets/Line arrow-right.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stateMgt/store";
import { openModal } from "../../../stateMgt/features/modal/modalSlice";
import ItemsPerSize from "../../../utils/helpers/ItemsPerSize";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, subtotal } = useSelector(
    (store: RootState) => store.cart
  );

  const items = ItemsPerSize();

  const displayedSimilarItems = items.bestsellersItems;

  if (amount < 1) {
    return (
      <section>
        <header className="text-center pt-60 h-screen">
          <h2>Your cart</h2>
          <h4> is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section>
      <h1 className="text-center font-semibold text-4xl pt-40 ">YOUR CART</h1>
      <div className="fixed top-20 lg:top-24 z-20 left-0 top- w-full p-5 bg-black text-white text-lg">
        <p>Shop now and claim your free shipping for orders above $100.</p>
      </div>

      <section className="flex flex-col justify-center items-center lg:pb-20">
        {cartItems.map((items, index) => {
          return <CartItem key={index} {...items} />;
        })}
      </section>
      <h3 className="text-3xl mt-10 mb-4">Promo Code</h3>

      <form
        className="border lg:w-[30%] border-gray-300 rounded-xl py-4 px-2 flex justify-between items-center"
        action="submit"
      >
        <input type="text" placeholder="Enter promo code" />
        <button>
          <img className="w-8" src={right_arrow} alt="" />
        </button>
      </form>

      <div className="w-full">
        <h3 className="text-3xl mt-10 mb-7">Order Summary</h3>
        <div className="flex justify-between items-center mb-4">
          <p className=" text-xl">Subtotal</p>
          <p className="text-2xl">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center mb-14">
          <p className=" text-xl">Discount</p>
          <p className="text-2xl">${(0.1 * subtotal).toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-medium text-xl">Total</p>
          <p className="text-2xl">${(subtotal - 0.1 * subtotal).toFixed(2)}</p>
        </div>

        <button className="bg-black text-white rounded-2xl w-full mt-12 py-8 text-lg">
          To Checkout
        </button>

        <div className="w-full flex justify-center">
          <button
            onClick={() => dispatch(openModal())}
            className=" border-[0.5px] border-black rounded-lg px-10 py-3 mt-7"
          >
            Clear Cart
          </button>
        </div>
      </div>

      <section>
        <h4 className="text-4xl mt-10 mb-7">Recently viewed</h4>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {displayedSimilarItems.map((item, index) => {
            return <BestSellersItem key={index} {...item} />;
          })}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h4 className="text-4xl mt-10 mb-7">Recommended</h4>
          <img className="h-10" src={arrow} alt="" />
        </div>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {displayedSimilarItems.map((item, index) => {
            return <BestSellersItem key={index} {...item} />;
          })}
        </div>
      </section>
    </section>
  );
};
export default CartPage;
