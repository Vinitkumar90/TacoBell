import { PHOTO_CDN } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={PHOTO_CDN + cloudinaryImageId}
      />
      <h3>{name}</h3><br />
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h5>{areaName}</h5>
      <h5>{deliveryTime}min</h5>
    </div>
  );
};

export default ResturantCard;
