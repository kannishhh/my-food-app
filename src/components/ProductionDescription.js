import { useState } from "react";

const ProductDescription = ({ description, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => setIsExpanded(!isExpanded);

  const truncatedDescription =
    description?.length > maxLength
      ? description.slice(0, maxLength) + "..."
      : description;

  return (
    <div>
      <p className={`${isExpanded ? "line-clamp-none" : "line-clamp-3"}`}>
        {isExpanded ? description : truncatedDescription}
      </p>
      {description?.length > maxLength && (
        <button
          className={`${
            isExpanded
              ? "text-black font-semibold cursor-pointer text-right"
              : "text-red-600 font-semibold cursor-pointer text-right"
          }`}
          onClick={toggleDescription}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ProductDescription;
