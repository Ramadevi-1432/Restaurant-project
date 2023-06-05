import RestaurantCard from "./RestaurantCard";
import { restaurantlist } from "../config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, allRestaurant) {
  const filterData = allRestaurant.filter((rest) =>
    rest?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
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
  //conditional rendering
  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-text"
          placeholder="Enter the Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurant);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurant.length === 0 ? (
          <h1>Oops!!!No Restaurant found...</h1>
        ) : (
          filteredRestaurant.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.data?.id}
                key={restaurant?.data?.id}
                className="menu-list"
              >
                <RestaurantCard {...restaurant?.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
