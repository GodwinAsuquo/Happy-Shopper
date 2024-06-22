import white_logo from "../assets/white_logo.png";

const Footer = () => {
  return (
    <footer className=" absolute w-full left-0 bg-black  px-4 lg:px-16 pb-20 text-white">
      <div className="border lg:flex lg:items-center lg:justify-between border-gray-200 rounded-lg bg-white text-black p-7 -mt-32 lg:-mt-10 mb-20">
        <h2 className="font-normal text-2xl mb-7 lg:mb-0">
          Subscibe To Our Newsletter
        </h2>
        <form className="flex space-x-1 lg:w-[30%] text-sm" action="submit">
          <input
            className="relative px-4 border rounded-lg bg-gray-300 w-full"
            type="email"
            placeholder="Enter you mail here"
          />

          <button className="bg-black  text-white text-xs rounded-lg p-4">
            Subscribe
          </button>
        </form>
      </div>

      <div className="flex items-center space-x-7 lg:mb-12">
        <img className="w-14" src={white_logo} alt="" />
        <h3>Happy Shopper</h3>
      </div>

      <div className="space-y-3 lg:flex justify-between  text-sm">
        <div className="lg:max-w-[30%]">
          <p className="lg:mb-12">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper cursus massa
            dapibus accumsan purus vestibulum.
          </p>
          <p className="hidden lg:inline mt-5">
            Since 2023 Happy Shopper. All right reserved
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold">Home</h4>
          <p>About us</p>
          <p>Careers</p>
          <p>Blogs</p>
          <p>Help</p>
          <p>Returns</p>
          <p>Shipping Rate</p>
          <p>More</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold">Shop</h4>
          <p>Shop</p>
          <p>Products</p>
          <p>Categories</p>
          <p>Shop</p>
          <p>New</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold">License</h4>
          <p>Privacy policy</p>
          <p>Copyright</p>
          <p>Email-Address</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold">Connect</h4>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>

      <p className="lg: hidden mt-5">
        Since 2023 Happy Shopper. All right reserved
      </p>
    </footer>
  );
};
export default Footer;
