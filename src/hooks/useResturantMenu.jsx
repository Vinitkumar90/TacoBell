import { useEffect, useState } from "react";

const useResturantMenu = (resid) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resid]);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setMenu(json);
  };

  return menu;
};

export default useResturantMenu;
