import { useEffect, useState } from "react";
import {
  bestSellers,
  categories,
  description,
  categoryItemsData,
} from "../data";

const ItemsPerSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [bestsellersItems, setBestSellersItems] = useState(
    bestSellers.slice(0, 2)
  );
  const [categoriesData, setCategoriesData] = useState(categories.slice(0, 2));
  const [descriptions, setDescriptions] = useState(description.slice(0, 3));
  const [displayedAlsoBy, setDisplayedAlsoBy] = useState(
    bestSellers.slice(0, 3)
  );
  const [displayedSimilar, setDisplayedSimilar] = useState(
    categoryItemsData.slice(0, 3)
  );

  const [categoryItems, setCategoryItems] = useState(
    categoryItemsData.slice(0, 4)
  );
  const [secondCategoryItems, setSecondCategoryItems] = useState(
    categoryItemsData.slice(4, 8)
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 768) {
      setCategoriesData(categories.slice(0, 2));
      setBestSellersItems(bestSellers.slice(0, 2));
      setDescriptions(description.slice(0, 3));
      setDisplayedAlsoBy(bestSellers.slice(0, 2));
      setDisplayedSimilar(categoryItemsData.slice(0, 2));
      setCategoryItems(categoryItemsData.slice(0, 4));
      setSecondCategoryItems(categoryItemsData.slice(4, 8));
    } else {
      setCategoriesData(categories.slice(0, 7));
      setBestSellersItems(bestSellers.slice(0, 4));
      setDescriptions(description);
      setDisplayedAlsoBy(bestSellers);
      setDisplayedSimilar(categoryItemsData.slice(0, 8));
      setCategoryItems(categoryItemsData.slice(0, 12));
      setSecondCategoryItems(categoryItemsData.slice(12, 20));
    }
  }, [windowWidth]);

  return {
    displayedAlsoBy,
    categoriesData,
    displayedSimilar,
    categoryItems,
    secondCategoryItems,
    descriptions,
    bestsellersItems,
  };
};

export default ItemsPerSize;
