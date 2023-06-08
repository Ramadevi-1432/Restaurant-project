import { useEffect,useState } from "react";
import { RESDATA_CDN_URL } from "../config";
const useRestaurantData = (RESDATA_CDN_URL) => {
    const [allRestaurant, setAllRestaurant] = useState([]); //for rendering all restaurants
    const [filteredRestaurant, setFilteredRestaurant] = useState([]); //for rendering filtered restaurants
  
    useEffect(() => {
      getData();
    }, []);
  
    async function getData() {
      const resData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4472943&lng=78.4425108&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await resData.json();
  
      setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }
    return [allRestaurant,filteredRestaurant];

};

export default useRestaurantData;
