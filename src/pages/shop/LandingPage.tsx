import logo from "../../assets/logo.png";
import hamburger from "../../assets/menu.png";
import potm from "../../assets/test_rectangle (1).png";

const LandingPage = () => {
  return (
    <>
      <nav className="flex justify-between items-center">
        <img className="w-14" src={logo} alt="" />
        <img className="w-20 h-fit" src={hamburger} alt="" />
      </nav>
      {/* body  */}
      <p>Brand of the month</p>
      <h1>GOLI</h1>
      <p>Apple Cider Vinegar Gummies Dietary Supplement</p>
      <div className="relative h-[510px]">
        <img className="absolute -right-5 top-16 -z-10 w-96" src={potm} alt="" />
        <button className="absolute bg-black text-white rounded-full w-24 h-24 left-12 top-48">
          Shop now
        </button>
        <p className="absolute right-0 -bottom-6">Get 20% Discount on All GOLI <br /> products this month.</p>
      </div>
    </>
  );
};
export default LandingPage;
