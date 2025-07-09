import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  //local state variable - super powerful variable
  const [resL, setResLis] = useState([]);
  const [filterResLis, setFilterResLis] = useState([]);;
  

  const[searchText, setSearchText] = useState("");
// everytime the state variable updates, react triggers a reconciliation cycle(re-renders the component)
  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    );
    const json = await res.json();
    console.log(json);

    setResLis(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterResLis(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  return resL.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button
            onClick={() => {

                const searchCards = resL.filter((res) =>(
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                ))

                setFilterResLis(searchCards)
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
        {filterResLis.map((resturant, i) => (
          <ResturantCard resData={resturant} key={resturant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
