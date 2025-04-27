import React from 'react';

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  return (
    <div className="tour-card">
      {/* Display the tour image */}
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        {/* Display the tour name */}
        <h2>{name}</h2>
        {/* Display the tour info */}
        <p>{info}</p>
        {/* Display the tour price */}
        <h3>${price}</h3>
        {/* Button to remove the tour */}
        <button onClick={() => onRemove(id)} className="remove-btn">
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;