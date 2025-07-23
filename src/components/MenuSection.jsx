import MenuItem from "./MenuItem";

const MenuSection = ({ section, toggle, index, show }) => {
  const title = section.card?.card?.title;
  const items = section.card?.card?.itemCards;

  return (
    <div className="w-6/12  py-4 px-1 mb-2 border-b-9 border-zinc-200 cursor-pointer">

      <div className="flex justify-between px-2"  onClick={() => toggle(index)}>
        <h2 className="font-bold text-gray-700 px-2">
          {title} {`(${items.length})`}
        </h2>
        <h1>{show ? "⬆️" : "⬇️"}</h1>
      </div>

      <div>
        {show &&
          items.map((item) => <MenuItem key={item.card.info.id} item={item} />)}
      </div>
    </div>
  );
};

export default MenuSection;
