import React from 'react';

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h2>{name}</h2>
        <p>{info}</p>
        <h3>${price}</h3>
        <button onClick={() => onRemove(id)} className="remove-btn">
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;