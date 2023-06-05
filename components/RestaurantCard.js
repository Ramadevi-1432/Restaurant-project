import { IMG_CDN_URL } from "../config";
const RestaurantCard = ({
    name,
    area,
    avgRating,
    lastMileTravelString,
    costForTwoString,
    cloudinaryImageId,
  }) => {
    return (
      <div className="card">
        <img
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
          alt="image"
          className="image"
        />
        <h3 className="res-name">{name}</h3>
        <h4 className="res-area">{area}</h4>
        <div className="res-details">
          <div className="res-avg">
          <p><span className="rating">★</span>{avgRating}</p>
          </div>
          <h3>{lastMileTravelString}</h3>
          <h3>{costForTwoString}</h3>
        </div>
      </div>
    );
  };
  export default RestaurantCard;