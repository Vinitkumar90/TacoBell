import { useState, useEffect, useContext } from "react";
import ResturantCard, { promotedCard } from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../context/UserContext";

const Body = () => {
  const{loggedInUser,setUserName} = useContext(UserContext)
  //local state variable - super powerful variable
  const [resL, setResLis] = useState([]);
  const [filterResLis, setFilterResLis] = useState([]);

  const Wrapped = promotedCard(ResturantCard);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    console.log(json);

    setResLis(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterResLis(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log(resL);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return <h2>Looks like you are offline ? dear get the internet</h2>;
  }

  return filterResLis.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-2">
      <div className="flex gap-6 py-3 px-8">
        <div className="ml-4">
          <input
            type="text"
            className="outline:none focus:outline-none border-purple-400 border-1 px-3 py-1 rounded"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-purple-200 text-purple-900 font-semibold py-1 px-3 rounded-md ml-2"
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
          className="bg-purple-200 py-1 px-3 rounded-md  text-purple-900 font-semibold"
          onClick={() => {
            const newList = resL.filter((res) => {
              return res.info.avgRating > 4.5;
            });
            setFilterResLis(newList);
          }}
        >
          Highest Rated Restaurants
        </button>
        <div>
          <input className="border border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}  />
        </div>
      </div>

      <div className="flex flex-wrap pt-2 p-8 justify-center">
        {filterResLis.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/resturant/" + resturant.info.id}
            style={{ textDecoration: "none" }}
          >
            {!resturant.info.differentiatedUiMediaDetails?.video
              ?.video ? (
              <Wrapped key={resturant.info.id} resData={resturant} />
            ) : (
              <ResturantCard key={resturant.info.id} resData={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
