import category_hero from "../../assets/category_hero.png";
import arrow_down from "../../assets/arrow-down.png";
import { extraServices } from "../../utils/data";
import BestSellersItem from "../../components/BestSellersItem";
import woman from "../../assets/woman_holding_product.png";
import ItemsPerSize from "../../utils/helpers/ItemsPerSize";

const Categories = () => {
  const items = ItemsPerSize();

  const categoryItems = items.categoryItems;

  const secondCategoryItems = items.secondCategoryItems;

  return (
    <section className="mb-48">
      <section className="flex justify-between lg:mt-28">
        <div className="w-full lg:w-[70%] space-y-7">
          <p className="text-sm">Category</p>
          <h1 className="text-5xl tracking-wide">Supplements</h1>
          <img
            className="lg:hidden w-[500px] mx-auto"
            src={category_hero}
            alt=""
          />

          <p className="text-sm">
            Supplements are nutrients that are required by the body because they
            are not always covered by nutritions which might lead to signs and
            visible symptoms. But through science based combinations we can have
            a better support.
          </p>
        </div>

        <img className="hidden lg:block w-[500px]" src={category_hero} alt="" />
      </section>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-5">
          <button className="flex items-center space-x-2 border border-gray-300 rounded-lg p-3">
            <p>Brands</p> <img className="w-5" src={arrow_down} alt="" />
          </button>
          <button className="lg:hidden flex items-center space-x-2 border border-gray-300 rounded-lg p-3">
            <p>Sort</p> <img className="w-5" src={arrow_down} alt="" />
          </button>
          <p>2000 Items</p>
        </div>

        <button className="hidden lg:flex items-center space-x-2 border border-gray-300 rounded-lg p-3">
          <p>Sort</p> <img className="w-5" src={arrow_down} alt="" />
        </button>
      </div>

      <section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {categoryItems.map((item) => {
            return <BestSellersItem key={item.id} {...item} />;
          })}
        </div>

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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-[300px] lg:mt-[450px]">
          {secondCategoryItems.map((item) => {
            return <BestSellersItem key={item.id} {...item} />;
          })}
        </div>
      </section>

      <section className="lg:flex grid grid-cols-2 gap-4 items-center justify-between mt-12 lg:mt-24">
        {extraServices.map((item) => {
          return (
            <div className="" key={item.id}>
              <img className="w-5" src={item.img} alt="" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};
export default Categories;
