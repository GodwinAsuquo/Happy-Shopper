import right_arrow from "../../assets/Line arrow-right.png";
import who_are_we from "../../assets/who_are_we.png";
import woman from "../../assets/woman_holding_product.png";
import "../../index.css";
import { bestSellers, categories } from "../../data";
import CategoryItem from "../../components/CategoryItem";
import { useEffect, useState } from "react";
import BestSellersItem from "../../components/BestSellersItem";

const LandingPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayedItems, setDisplayedItems] = useState(categories.slice(0, 2));
  const [sellerItems, setSellerItems] = useState(bestSellers.slice(0, 2));

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 768) {
      setDisplayedItems(categories.slice(0, 2));
      setSellerItems(sellerItems.slice(0, 2));
    } else {
      setDisplayedItems(categories.slice(0,7));
      setSellerItems(bestSellers.slice(0, 4));
    }
  }, [windowWidth]);

  return (
    <section className="mb-[500px]">
      <section className="lg:pt-40 ">
        {/* brand of the month for mobile view  */}
        <div className="lg:hidden relative">
          <p>Brand of the month</p>
          <h1>GOLI</h1>
          <div className="image absolute h-[500px] w-[80%] -right-1">
            <p className="mt-5 -ml-10 w-[80%]">
              Apple Cider Vinegar Gummies Dietary Supplement
            </p>
            <button className="bg-black text-white text-sm rounded-full w-24 h-24  -ml-10 mt-60">
              Shop now
            </button>

            <p className="absolute right-0 -bottom-6">
              Get 20% Discount on All GOLI <br /> products this month.
            </p>
          </div>
        </div>

        {/* brand of the month for desktop view  */}
        <div className="hidden lg:block relative w-full">
          <div className="image2 absolute h-[400px] w-[30%] ml-[35%]">
            <div className="absolute -left-52 top-10 space-y-4">
              <p className="font-light text-gray-500">Brand of the month</p>
              <h2 className="text-7xl text-medium">GOLI</h2>
              <p className="text-xl">
                Apple Cider Vinegar Gummies <br /> Dietary Supplement
              </p>
            </div>
            <button className="absolute top-10 -right-10 bg-black text-white text-sm rounded-full w-24 h-24">
              Shop now
            </button>

            <p className="absolute -right-44 -bottom-6 text-xl">
              Get 20% Discount on All GOLI <br /> products this month.
            </p>
          </div>
        </div>

        <h2 className="mt-[550px] text-5xl max-w-[900px] mb-8">
          Customer Experience will always be our No.1 Priority
        </h2>
        {/* analytics  */}
        <div className="grid grid-cols-2 lg:flex lg:justify-between">
          <div>
            <h2 className="font-medium text-2xl">100+</h2>
            <p>Full Time Employees</p>
          </div>
          <div>
            <h2 className="font-medium text-2xl">100K</h2>
            <p>Full Time Employees</p>
          </div>
          <div>
            <h2 className="font-medium text-2xl">2000+</h2>
            <p>Branded Products</p>
          </div>
          <div>
            <h2 className="font-medium text-2xl">12k</h2>
            <p>Annual deliveries</p>
          </div>
        </div>
      </section>

      {/* categories  section*/}
      <section>
        <div className="flex items-center justify-between mt-24">
          <h2 className="text-4xl">Categories</h2>
          <img className="h-10" src={right_arrow} alt="" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 mt-14">
          {displayedItems.map((item) => {
            return <CategoryItem key={item.id} {...item} />;
          })}
        </div>
      </section>

      {/* best sellers section  */}

      <section className="mt-36">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl">Best Sellers</h2>
          <img className="w-10" src={right_arrow} alt="" />
        </div>

        <div className="grid grid-cols-2 lg:flex gap-5 ">
          {sellerItems.map((item) => {
            return <BestSellersItem key={item.id} {...item} />;
          })}
        </div>
      </section>

      <section className="mt-28 lg:grid lg:grid-cols-3 ">
        <div>
          <h2>Who are we?</h2>
          <h3>
            Welcome to <strong>Happy Shopper,</strong> We are a Health &
            Skincare Online Store.
          </h3>
        </div>
        <img className="w-48 mt-10 mx-auto" src={who_are_we} alt="" />

        <div className="lg:text-right mt-28 w-full ">
          <p className="mt-10 ">
            dolor sit amet consectetur. Non pharetra tortor ornare lorem quis ut
            pharetra vivamus ornare. Lorem pharetra mattis non nulla.dolor sit
            amet consectetur. Non pharetra tortor ornare lorem quis ut pharetra
            vivamus ornare. Lorem pharetra mattis non nulla.{" "}
          </p>
          <button className="bg-black text-white rounded-lg py-5 px-10 mt-6">
            Learn more
          </button>
        </div>
      </section>

      <section className="flex justify-between h-[220px] lg:h-[350px] space-x-10 absolute left-0 bg-[#F8F8F8] mt-12  w-full">
        <div className="ml-5 lg:ml-12 space-y-3 mt-2 lg:mt-12">
          <h4 className="lg:text-3xl leading-snug font-normal">
            Get The Full CeraVe <br /> Treatment & Let Your Skin <br /> Thank
            You.
          </h4>
          <p>*10% Discount with “HAPPYCERAVE22” Code</p>
          <button className="text-white text-sm bg-black rounded-2xl py-4 px-5">
            Shop Now
          </button>
        </div>
        <img className="h-full " src={woman} alt="" />
      </section>

    </section>
  );
};
export default LandingPage;
