import { PHOTO_CDN } from "../utils/constants";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const ResturantCard = (props) => {
  const {loggedInUser} = useContext(UserContext)
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="w-64 h-[370px] rounded-lg  m-2 px-2 py-3 shadow-xl flex flex-col bg-purple-50">
      <img
        className="w-55 h-45 rounded-b-sm rounded-t-lg mx-auto "
        alt="res-logo"
        src={PHOTO_CDN + cloudinaryImageId}
      />
      <div className=" flex-1 flex flex-col justify-between px-3 py-2">
        <h3 className="text-2xl font-bold mb-2 truncate">{name}</h3>
        <h5 className="text-sm font-semibold text-gray-600 truncate">
          {cuisines.join(", ")}
        </h5>
        <h5 className="text-sm font-semibold mt-1">{avgRating}⭐</h5>
        <h5 className="text-sm bg-green-200 font-semibold text-green-900 px-1 py-0.5 rounded-md w-24 my-2">
          {costForTwo}
        </h5>
        <h5 className="text-xs font-medium">{areaName}</h5>
        <h5 className="text-xs font-medium">{deliveryTime}min</h5>
        <h5 className="text-[12px]">{loggedInUser}</h5>
      </div>
    </div>
  );
};

export default ResturantCard;


export const promotedCard = (ResturantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-1 left-4 text-xs text-white bg-yellow-300 px-1 py-0.5 rounded">
          Promoted
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};
