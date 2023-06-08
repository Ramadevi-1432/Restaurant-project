import { useState, useEffect } from "react";
import { MENU_CDN_URL } from "../config";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    getRestaurntInfo();
  }, []);

  async function getRestaurntInfo() {
    const data = await fetch(MENU_CDN_URL + id);
    const json = await data.json();
    console.log(json);
    setRestaurant(json);
  }
  return restaurant;
};

export default useRestaurantMenu;
