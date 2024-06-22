import productImage from "../../../src/assets/Vitamins & Supplements.png";
import like from "../../../src/assets/heart.png";
import right_arrow from "../../../src/assets/right-circle-arrow.png";
import left_arrow from "../../../src/assets/left-circle-arrow.png";
import star from "../../../src/assets/star.png";
import basket from "../../../src/assets/bag.png";
import BestSellersItem from "../../components/BestSellersItem";
import hero from "../../assets/Horbaach Hair.png";
import { bestSellers } from "../../utils/data";
import { useParams } from "react-router-dom";
import ItemsPerSize from "../../utils/helpers/ItemsPerSize";

const ProductDetails = () => {
  const param = useParams();
  const product = bestSellers.find(
    (product) => product.id.toString() == param.id
  );

  const items = ItemsPerSize();

  const descriptionsData = items.descriptions;

  const displayedAlsoByData = items.displayedAlsoBy;

  return (
    <section className="px-5 pt-5 w-full mb-[250px] ">
      {/* for mobile */}
      <section className="lg:hidden w-[90%] max-w-[400px] relative mx-auto">
        <img className="w-[150px] mx-auto" src={productImage} alt="" />
        <img className="absolute top-0 w-8 right-0" src={like} alt="" />
        <img
          className="absolute w-32 top-20 -left-10"
          src={left_arrow}
          alt=""
        />
        <img
          className="absolute w-32 top-20 -right-10"
          src={right_arrow}
          alt=""
        />
      </section>

      {/* for desktop  */}
      <section className="hidden lg:block relative">
        <img
          className="absolute rotate-45  left-52 w-[21%]"
          src={hero}
          alt=""
        />
        <img
          className="absolute -rotate-12 left-[45%] z-10 w-[150px]"
          src={hero}
          alt=""
        />
        <img
          className="absolute -rotate-45 right-52 w-[20%]"
          src={hero}
          alt=""
        />
        <img
          className="absolute w-32 top-32 -left-10"
          src={left_arrow}
          alt=""
        />
        <img
          className="absolute w-32 top-32 -right-10"
          src={right_arrow}
          alt=""
        />
      </section>

      {/* description */}
      <section className="relative space-y-4 mt-10 lg:mt-[550px]">
        <h4 className="text-gray-400">Horbaach</h4>
        <h2 className="text-2xl lg:text-4xl font-light">{product?.title}</h2>
        <div className="flex w-[80%] lg:w-[25%] justify-between items-center text-sm">
          <div className="flex space-x-2 items-center">
            <img className="w-5 h-fit " src={star} alt="" />
            <p>4.5</p>
          </div>

          <div className="flex items-center space-x-2">
            <p>643</p>
            <p className="text-gray-400">Purchases made</p>
          </div>

          <div className="flex items-center space-x-2">
            <p>2000</p>
            <p className="text-gray-400">In-Stock</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex  items-center space-x-4">
            <p className="font-normal text-3xl">$11.79</p>
            <p className=" text-xl line-through text-gray-400">$10.85</p>
          </div>
          <img className="hidden lg:block w-7" src={like} alt="" />
        </div>

        <p className="text-gray-400 text-sm">
          Pay in 4 interest-free installments for orders over $50.00 with Learn
          more
        </p>

        <ul className=" lg:grid lg:grid-cols-2 list-disc">
          {descriptionsData.map((desc, index) => {
            return (
              <li className="mb-4 lg:text-sm" key={index}>
                {desc}
              </li>
            );
          })}
          <p className="absolute lg:hidden underline right-0 ">
            Click for more
          </p>
        </ul>
      </section>

      <section className="grid grid-cols-2 gap-4 items-center mt-16 lg:mt-12 max-w-[600px] mx-auto lg:mx-0">
        <div className="grid grid-cols-3 justify-items-center rounded-2xl p-5 text-black bg-[#F5F5F5]">
          <p>-</p>
          <p>1</p>
          <p>+</p>
        </div>
        <button className=" flex space-x-3 items-center justify-center text-white bg-black rounded-2xl p-5">
          <img className="w-7" src={basket} alt="" /> <p>Add to Cart</p>
        </button>
      </section>

      <section className="lg:text-sm">
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 justify-items-center border-b pb-4 mb-8 border-black ">
          <p>Product overview</p>
          <p className="text-gray-500">Brand</p>
          <p className="hidden lg:block text-gray-500">
            Ratings & Reviews (150)
          </p>
        </div>
        <ul className="list-disc space-y-5">
          <li>
            <strong>What is Collagen Protein?</strong>
            Collagen is the main structural protein in the body and a vital
            building block for nutrition. With a strong presence in hair, skin,
            nails and joints of men and women, Collagen has become the most
            popular ingredient in Beauty Products.* There are at least 16 types
            of collagen but roughly 80-90% of the Collagen in the body consists
            of type 1, 2 and 3. These Collagen types are found naturally in many
            food sources and added to nutritional supplements with other
            vitamins, such as biotin.
          </li>
          <li>
            <strong>How to get Collagen Protein: </strong>
            There are a variety of brands that carry Collagen products and
            dietary supplements in different forms. The most common include:
            Pills, Capsules, Liquid Drops, Gummies, Chews, Bulk Powder, Tea,
            Tablets and more. It's also utilized in topical products like Night
            Cream, Serums, Face Masks, Lotion, Shampoo, Oil Treatment, Gel and
            Moisturizer. Though, the more professional supplement brands use
            high quality innovation to create pure Hydrolyzed Collagen products.
            In addition, they contain a wider spectrum of Collagen for balanced
            support.
          </li>
          <li>
            <strong>About Multi Collagen Protein:</strong> Horbaach has used
            years of industry experience to craft a premium Multi-Collagen
            Complex. Our dynamic formula now contains a deep profile of vital
            ingredients with 5 types of Collagen Peptides (I, II, III, V, X)
            sourced from real whole foods. This includes Fish, Chicken, Bovine
            and Eggshell Membrane Collagen. Plus, it's Gluten-Free and contains
            no Artificial Sweetener or Preservatives. Simply take our
            Quick-Release capsules with water or any drink. Horbaach has
            officially raised the bar for Collagen Innovation with this ultra
            Complex.
          </li>
        </ul>

        <div className="mt-10 space-y-3">
          <h3 className="font-medium">WARNING:</h3>
          <ul className="list-disc">
            <li>
              If you are pregnant, nursing, taking any medications or have any
              medical condition, consult your doctor before use. If any adverse
              reactions occur, immediately stop using this product and consult
              your doctor. May contain trace amounts of sulfite. If seal under
              cap is damaged or missing, do not use. Keep out of reach of
              children. Store in a cool, dry place.
            </li>
          </ul>
        </div>

        <div className="mt-12 space-y-3">
          <h3 className="font-medium">Ingredients: </h3>
          <ul className="list-disc">
            <li>
              Hydrolyzed Collagen (Type 1 and 3). Other Ingredients: Glucose
              Syrup, Sucrose, Gelatin, Sorbitol, Citric Acid, Agar, Natural
              Strawberry Flavor, Natural Palm Leaf Glaze, Vegetable Oil, Black
              Carrot Juice Concentrate Color, Annatto Color.
            </li>
          </ul>
        </div>

        <div className="mt-10 space-y-3">
          <h3 className="font-medium">Directions:</h3>
          <ul className="list-disc">
            <li>
              For adults, take two (2) gummies daily, preferably with a meal.
            </li>
          </ul>
        </div>

        <div className="mt-10 space-y-3">
          <h3 className="font-medium">Legal Disclaimer:</h3>
          <ul className="list-disc">
            <li>
              Statements regarding dietary supplements have not been evaluated
              by the FDA and are not intended to diagnose, treat, cure, or
              prevent any disease or health condition.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-4xl mt-14">Also By Horbaach</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {displayedAlsoByData.map((item) => {
            return <BestSellersItem key={item.id} {...item} />;
          })}
        </div>
      </section>

      <section>
        <h2 className="text-4xl mt-14 tracking-wide">Similar Products</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {displayedAlsoByData.map((item) => {
            return <BestSellersItem key={item.id} {...item} />;
          })}
        </div>
      </section>
    </section>
  );
};
export default ProductDetails;
