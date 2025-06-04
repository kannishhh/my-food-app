import { useState } from "react";

const ProductDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => setIsExpanded((prev) => !prev);

  return (
    <div className="description-wrapper">
      <p className={isExpanded ? "description-full" : "description-clamp"}>
        {description}
      </p>
      {description?.length > 100 && (
        <span className="toggle-btn" onClick={toggleDescription}>
          {isExpanded ? "Show less" : "Show more"}
        </span>
      )}
    </div>
  );
};

export default ProductDescription;