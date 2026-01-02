import IMAGE_CDN_URL from "../utills/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, sla, avgRating, cloudinaryImageId, costForTwo } = resData?.info;

    return (
        <div className="res-card">

            <img className="res-logo" src={IMAGE_CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwo}</p>
            <p>⌛{sla.deliveryTime}mins |⭐/ {avgRating}</p>

        </div>
    )
}

export default RestaurantCard;