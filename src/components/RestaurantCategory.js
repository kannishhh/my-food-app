import ItemList from "./ItemList.js";

const RestaurantCategory = ({ data, showItems, setShowIndex, index, restInfo}) => {
  const handleClick = () => {
    setShowIndex(prevIndex => (prevIndex === index ? null: index));
  };
  return (
    <div>
      {/* Header */}
      <div className="w-8/12 mx-auto my-4 p-4 border-b-4 border-gray-200 shadow-inner">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg font-sans">
            {data.title} ({data.itemCards?.length})
          </span>
          <span>{showItems ? "▲" : "▼"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} restInfo={restInfo}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
