import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { PHOTO_CDN } from "../utils/constants";

const ResturantMenu = () => {
  const [menu, setMenu] = useState(null);
  const[openIndex, setOpenIndex] = useState(0);

  function closeOpen(i){
    if(i == openIndex){
      setOpenIndex(null);
    }else{
      setOpenIndex(i);
    }
  }

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setMenu(json);
  };

  if (menu == null) return <Shimmer />;

  const cards =
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="menu-container">
      <h1 className="menu-head">Menu</h1>

      {cards.slice(2).map((section, i) => {
        const title = section.card?.card?.title;
        const items = section.card?.card?.itemCards;

        return (
          <div key={i} className="menu-part">
            <button onClick={() => closeOpen(i)} style={{width:50,padding:5,backgroundColor:"#EE208F"}}>😋</button>
            {/* title */}
            {title && <h2>{title}</h2>}

            {/* items */}
            {
              i == openIndex && (
                 <div className="menu-cont">
                 {items &&
              items.map((item) => (
                <div key={item.card.info.id} className="single-menu">
                  <div className="menu-part-list">
                    <div className="menu-name">
                      {item.card.info.name}
                    </div>
                    <div className="menu-price">
                      ₹ {item.card.info.price / 100}
                    </div>
                  </div>
                  <img
                    src={PHOTO_CDN + item?.card?.info?.imageId}
                    style={{ width: 200 }}
                    alt="not available"
                  />
                </div>
              ))}
            </div>
              )
            }
           
          </div>
        );
      })}
    </div>
  );
};

export default ResturantMenu;
