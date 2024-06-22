import profile from "../assets/profile.png";
import arrow_down from "../assets/arrow-down.png";
import hamburger from "../assets/menu.png";
import logo from "../assets/logo.png";
import heart from "../assets/heart.png";
import bag from "../assets/black_bag.png";
import { useSelector } from "react-redux";
import { RootState } from "../../src/stateMgt/store";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const amount = useSelector((store: RootState) => store.cart.amount);
  const navigate = useNavigate();

  return (
    <>
      {/* nav for mobile  */}
      <nav className="lg:hidden  fixed flex left-0 top-0 bg-white justify-between w-full items-center z-20">
        <img
          onClick={() => navigate(`/`)}
          className="w-14 ml-6 cursor-pointer"
          src={logo}
          alt=""
        />
        <img className="w-20 h-fit" src={hamburger} alt="" />
      </nav>

      {/* nav for desktop  */}

      <nav className="hidden lg:flex  fixed left-0 px-10 items-center justify-between w-screen bg-white bg-opacity-50 top-0 pt-8 pb-2 z-20">
        <img
          onClick={() => navigate("/")}
          className="w-14 cursor-pointer"
          src={logo}
          alt=""
        />
        <ul className="flex space-x-16">
          <div className="flex items-center space-x-2">
            <li>Product</li>
            <img className="w-7" src={arrow_down} alt="" />
          </div>
          <li>Shop</li>
          <li>New arrivals</li>
          <li>Best sellers</li>
        </ul>
        <div className="flex h-8 space-x-8">
          <div className="relative ">
            <img className="h-[32px] w-[32px]" src={bag} alt="" />
            <p className="absolute bg-slate-500 text-white w-8 h-8 text-center py-1 -top-4 -right-5 rounded-full">
              {amount}
            </p>
          </div>
          <img src={heart} alt="" />
          <img src={profile} alt="" />
        </div>
      </nav>
      <div className="hidden fixed top-28 lg:block container mx-auto">
        {/* <BreadCrumbs items={breadcrumbItems} /> */}
      </div>
    </>
  );
};
export default Header;
