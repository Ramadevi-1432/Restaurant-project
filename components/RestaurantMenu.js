import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
 
  const { id } = useParams();
  // console.log(params)
 const restaurant=useRestaurantMenu(id);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <h2 className="menu-res-name">
        {restaurant?.data?.cards[0]?.card?.card?.info?.name}
      </h2>
      <div className="restaurant-menu">
        <div>
          <h2>{restaurant?.data?.cards[0]?.card?.card?.info?.id}</h2>

          <img
            src={
              IMG_CDN_URL +
              restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
            }
            alt="image"
          />
        </div>
        <div className="restaurant-menu-details">
          <h1>Menu-details</h1>
          {(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map(
            (item) => {
              return (
                <div className="res-menu-items">
                  <div className="res-menu-info">
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    <li>Price: {item?.card?.info?.price}</li>
                    <li>
                      Rating:{" "}
                      {item?.card?.info?.ratings?.aggregatedRating?.rating}
                    </li>
                  </div>
                  <img
                    src={IMG_CDN_URL + item?.card?.info?.imageId}
                    alt="res-menu-image"
                    className="res-menu-image"
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
