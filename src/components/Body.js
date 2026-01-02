import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import resObj from "../utills/mockData";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");


    const fetchData = async () => {
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();

        console.log(json);
        setListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setFilteredListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log("body got rendered");


    return listOfRestaurants.length === 0 ? <ShimmerUI /> : (
        <div>
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {

                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >Top Rated Restaurants</button>

                <input
                    className="search-input"
                    type="text"
                    value={searchText}
                    onChange={(e) => (
                        setSearchText(e.target.value))
                    }
                />
                <button onClick={() => {
                    const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                    setFilteredListOfRestaurants(filteredRestaurants);
                }}>search</button>
            </div>




            <div className="res-container">
                {/* <RestaurantCard resName="Tulip Garden" cuisines="Asian and South Korean" deliveryTime="29 mins" /> */}
                {filteredListOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}

            </div>
        </div>
    )
}

export default Body;