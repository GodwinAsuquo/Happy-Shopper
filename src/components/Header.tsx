import profile from "../assets/profile.png";
import arrow_down from "../assets/arrow-down.png";
import hamburger from "../assets/menu.png";
import logo from "../assets/logo.png";
import heart from "../assets/heart.png";

const Header = () => {
  return (
    <>
      {/* nav for mobile  */}
      <nav className="lg:hidden flex justify-between items-center">
        <img className="w-14" src={logo} alt="" />
        <img className="w-20 h-fit" src={hamburger} alt="" />
      </nav>

      {/* nav for desktop  */}
      <nav className="hidden lg:flex fixed left-0 px-10 items-center justify-between w-screen bg-white bg-opacity-50 top-0 pt-8 pb-2 z-20">
        <img className="w-14" src={logo} alt="" />
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
          <img src={heart} alt="" />
          <img src={profile} alt="" />
        </div>
      </nav>
    </>
  );
};
export default Header;
