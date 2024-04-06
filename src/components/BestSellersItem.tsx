import heart from "../assets/heart.png";
import basket from "../assets/bag.png";
import white_heart from "../assets/white-heart.svg"

type BestSellerItemProps = {
  title: string;
  oldPrice: number;
  newPrice: number;
  img: string;
  isFavourite: boolean;
};

const BestSellersItem = ({
  title,
  oldPrice,
  newPrice,
  img,
  isFavourite
}: BestSellerItemProps) => {
  return (
    <div className="relative max-w-[300px]">
     {isFavourite? <img className="absolute w-8 right-4 top-4 z-10" src={heart} alt="" /> : <img className="absolute w-8 right-4 top-4 z-10" src={white_heart} alt="" />}
      <div className="relative flex justify-center hover:bg-gray-100 h-[200px] ">
        <img className="absolute bottom-4 w-20" src={img} alt="" />
      </div>
      <p className="text-sm">{title}</p>
      <div className="flex space-x-3">
        <p>${newPrice}</p>
        <p className="line-through text-gray-400">${oldPrice}</p>
      </div>
      <div className="flex space-x-2 mt-3">
        <div className="bg-black rounded-xl pl-4 pr-5 py-3">
          <img className="w-6" src={basket} alt="" />
        </div>
        <button className="w-full rounded-lg py-2 px-4 border text-sm">
          View more
        </button>
      </div>
    </div>
  );
};
export default BestSellersItem;
