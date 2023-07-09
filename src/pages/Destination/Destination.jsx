import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { data } from "../../data";
import "./destination.css";

export const Destination = () => {
  const { countryId } = useParams();

  const filteredDestinations = data.continents
    .flatMap((continent) => continent.countries)
    .find((country) => country.id === parseInt(countryId))?.destinations;

  return (
    <div>
      <h1>Destinations</h1>
      <div className="grid-container">
        {filteredDestinations &&
          filteredDestinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <NavLink to={`/detail/${destination.id}`}>
                <img
                  src={destination.image}
                  alt={destination.name}
                  width={250}
                  height={250}
                />
                <h2>{destination.name}</h2>
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};
