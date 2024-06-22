import heart from "../assets/heart.png";
import basket from "../assets/bag.png";
import white_heart from "../assets/white-heart.svg";
import { useNavigate } from "react-router-dom";
import {
  useProductManagement,
  useProducts,
} from "../services/firebase/crudRequests";

type BestSellersItemProps = {
  id: string;
  image?: string;
  isFavourite?: boolean;
  price: number ;
  title?: string;
};

const BestSellersItem = ({
  id,
  title,
  price,
  image,
  isFavourite,
}: BestSellersItemProps) => {
  const navigate = useNavigate();
  const productManagement = useProductManagement();
  const products = useProducts();


  return (
    <div className="relative max-w-[300px] cursor-pointer">
      {isFavourite ? (
        <img className="absolute w-8 right-4 top-4 z-10" src={heart} alt="" />
      ) : (
        <img
          className="absolute w-8 right-4 top-4 z-10"
          src={white_heart}
          alt=""
        />
      )}
      <div className="relative flex justify-center hover:bg-gray-100 h-[200px] ">
        <img className="absolute bottom-4 w-20" src={image} alt={title} />
      </div>
      <p className="text-sm h-[60px]">{title}</p>
      <div className="flex space-x-3 mb-4">
        <p>${(price - 0.1 * price).toFixed(2)}</p>
        <p className="line-through text-gray-400">${price}</p>
        <button onClick={() => productManagement.updateUser(id, price)}>
          Increase Price
        </button>
        <button>Decrease price</button>
      </div>
      <div className="flex space-x-2 mt-3">
        <div
          onClick={() => {
            if (products.length > 1) {
              productManagement.deleteUser(id);
            }
          }}
          className="bg-black rounded-xl pl-4 pr-5 py-3"
        >
          <img className="w-6" src={basket} alt="" />
        </div>

        <button
          onClick={() => navigate(`/products/${id}`)}
          className="w-full rounded-lg py-2 px-4 border text-sm"
        >
          View more
        </button>
      </div>
    </div>
  );
};
export default BestSellersItem;
