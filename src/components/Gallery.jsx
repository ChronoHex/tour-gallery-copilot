import React from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, onRemove }) => {
  return (
    <div className="gallery">
      {/* Map over the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        <TourCard
          key={tour.id} // Unique key for each tour
          id={tour.id} // Pass tour ID
          name={tour.name} // tour name
          info={tour.info} // tour info
          image={tour.image} // tour image
          price={tour.price} // tour price
          onRemove={onRemove} // remove function
        />
      ))}
    </div>
  );
};

export default Gallery;