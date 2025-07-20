import { PHOTO_CDN } from "../utils/constants";

const MenuItem = ({ item }) => {
  return (
    <div key={item.card.info.id} className="flex  mb-4 p-2 border-b-2 border-gray-100">
      <div className="p-4 w-[90%] h-28">
        <div className="mb-1">
            <h3 className="font-semibold text-xl text-zinc-800">{item.card.info.name}</h3>   
            <h3 className="text-xs font-semibold">₹ {item.card.info.price / 100}</h3>  
        </div>
        <div>
            <h5 className="text-xs font-normal text-slate-600">
                {item.card.info.description}
            </h5>
        </div>
      </div>
      <div className="relative">
        <img
          src={PHOTO_CDN + item?.card?.info?.imageId}
          className="w-32 h-28 bg-purple-100 rounded-lg"
          alt="not available"
        />
        <button className="bg-slate-50 rounded-md px-8 py-2 text-sm absolute top-19 left-3 z-40
          font-bold text-green-700 shadow-2xl border-1 border-zinc-300
        ">ADD</button>
      </div>
    </div>
  );
};

export default MenuItem;
