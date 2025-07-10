import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const ResturantMenu = () => {
  const [menu, setMenu] = useState(null);

  // const params = useParams();
  // console.log(params);
  // console.log(params.resId);
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
              {title && <h2>{title}</h2>}

              {items &&
                items.map((item) => (
                  <li key={item.card.info.id} className="menu-part-list">
                    {item.card.info.name} - Rs. {item.card.info.price / 100}
                  </li>
                ))}
            </div>

        );
      })}
    </div>
  );
};

export default ResturantMenu;
