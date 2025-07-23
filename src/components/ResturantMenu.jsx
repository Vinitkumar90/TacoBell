// components/ResturantMenu.jsx
import { useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useResturantMenu from "../hooks/useResturantMenu";
import MenuSection from "./MenuSection";

const ResturantMenu = () => {
  const[openSection, setOpenSection] = useState(null);
  const { resId } = useParams();
  const menu = useResturantMenu(resId);

  if (!menu) return <Shimmer />;

  const cards = menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const validCards = cards.slice(2).filter((c) => {
    const title = c?.card?.card?.title;
    const itemCards = c?.card?.card?.itemCards;
    return title && itemCards && itemCards.length > 0;
  });

  const toggle = (index) => {
      setOpenSection((prev) => prev!=index ? index : null);
  }

  return (
    <div className=" h-screen flex flex-col items-center pt-4">
      <h1 className="mb-4 font-semibold font-mono text-2xl">Menu</h1>
      {validCards.map((section, index) => (
        <MenuSection
          key={index}
          section={section}
          toggle = {toggle}
          index = {index}
          show = {openSection === index}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
