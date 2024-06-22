import { useState } from "react";
import { useProductManagement } from "../services/firebase/crudRequests";

const AddProduct = () => {
  const [newImage, setNewImage] = useState<string>("");
  const [newPrice, setNewPrice] = useState<number>(0);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newFav, setNewFav] = useState<boolean>(true);

  const productManagement = useProductManagement();

  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
          type="text"
          name="image"
          placeholder="Insert title"
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          onChange={(e) => {
            setNewPrice(parseFloat(e.target.value));
          }}
          type="number"
          name="price"
          placeholder="Insert price"
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input
          onChange={(e) => {
            setNewImage(e.target.value);
          }}
          type="text"
          name="image"
          placeholder="Insert image"
        />
      </div>

      <div>
        <label htmlFor="favourite">Do you like this?</label>
        <input
          onChange={(e) => {
            setNewFav(e.target.checked);
          }}
          type="checkbox"
          name="favourite"
        />
      </div>
      <button
        onClick={(e) =>
          {e.preventDefault()
          productManagement.addProduct(newImage, newFav, newPrice, newTitle)}
        }
        type="submit"
        className="border text-white bg-black"
      >
        Add product
      </button>
    </form>
  );
};
export default AddProduct;
