import React from "react";
import { useNavigate, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { data } from "../../data";
import "./destination.css";

export const Destination = () => {
  const { continentId, countryId } = useParams();
  const navigate = useNavigate();

  const continent = data.continents.find(
    (continent) => continent.id === parseInt(continentId)
  );

  const country = continent?.countries.find(
    (country) => country.id === parseInt(countryId)
  );

  const filteredDestinations = country?.destinations;

  return (
    <div>
      <h1 onClick={()=>navigate(`/countries/${continentId}`)} >Destinations</h1>
      <div className="grid-container">
        {filteredDestinations &&
          filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="destination-card"
              onClick={() =>navigate(
                `/${continentId}/list/${countryId}/detail/${destination.id}`)
              }
            >
              <img
                src={destination.image}
                alt={destination.name}
                width={250}
                height={250}
              />
              <h2>{destination.name}</h2> 
            </div>
          ))}
      </div>
    </div>
  );
};
