import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info ?? {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card
      ?.card ?? {};

  // console.log(
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  // );

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => {
        return (
          c.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  return (
    <div className="text-center ">
      <h1 className=" font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      {/* categories accordian */}
      {categories.map((category, index) => (
        <RestaurantCategory
          // key={category?.card?.card.}
          key={index}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() =>
            showIndex === index ? setShowIndex(true) : setShowIndex(index)
          }
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
