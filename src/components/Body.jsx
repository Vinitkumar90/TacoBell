import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  //local state variable - super powerful variable
  const [resL, setResLis] = useState([]);
  const [filterResLis, setFilterResLis] = useState([]);

  const [searchText, setSearchText] = useState("");
  // everytime the state variable updates, react triggers a reconciliation cycle(re-renders the component)
  console.log("body rendered");

  // without array  -> useEffect called in each render
  // with array => useEffect called on mount only and not after that
  // with array [filterResLis] => useEffect run on mount and also it that particular state variable is changed
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
     // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    console.log(json);

    setResLis(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterResLis(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(resL);
  };

  return filterResLis.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const searchCards = resL.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilterResLis(searchCards);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const newList = resL.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            setResLis(newList);
          }}
        >
          Highest Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filterResLis.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturant/" + resturant.info.id} style={{textDecoration:"none"}}>
            <ResturantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
