import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "./firebase-config";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  image?: string;
  isFavourite?: boolean;
  price?: number;
  title?: string;
}
const productsCollectionRef = collection(db, "products");

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getDocs(productsCollectionRef);
        const productsArray = fetchedProducts.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setProducts(productsArray);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
      return products;
    };

    fetchProducts();
  }, []);

  return products;
};

export const useProductManagement = () => {
  const addProduct = async (
    newImage: string,
    newFav: boolean,
    newPrice: number,
    newTitle: string
  ) => {
    try {
      await addDoc(productsCollectionRef, {
        image: newImage,
        isFavourite: newFav,
        price: newPrice,
        title: newTitle,
      });
      console.log("Product added successfully!");
    } catch (error) {
      console.log("Error adding product:", error);
    }
  };

  const updateUser = async (id: string, price: number): Promise<void> => {
    const productDoc = doc(db, "products", id);
    const newFields = { price: price + 1 };
    try {
      await updateDoc(productDoc, newFields);
      console.log("Product updated successfully!");
    } catch (error) {
      console.log("Error updating product:", error);
    }
  };

  const deleteUser = async (id: string): Promise<void> => {
    const productDoc = doc(db, "products", id);
    try {
      await deleteDoc(productDoc);
      console.log("Product deleted successfully!");
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };

  return { addProduct, updateUser, deleteUser };
};

