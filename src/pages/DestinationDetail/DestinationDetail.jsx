import React from "react";
import { useParams } from "react-router";
import { data } from "../../data";
import "./detail.css"

export const DestinationDetail = () => {
  const { destinationId } = useParams();

  const destination = data.continents
    .flatMap((continent) => continent.countries)
    .flatMap((country) => country.destinations)
    .find((destination) => destination.id === parseInt(destinationId));

  return (
    <div>
      {destination && (
        <div>
          <h1 className="detail-heading">{destination.name}</h1>
          <div className="container">
          <img src={destination.image} alt={destination.name} height={250} width={250}/>
          <div className="right-col">
          <p>{destination.description}</p>
          <p>Location: {destination.location}</p>
          <p>Opening Hours: {destination.openingHours}</p>
          <p>Ticket Price: {destination.ticketPrice}</p>
          <p>Ratings: {destination.ratings}</p>
          <p> Reviews: {destination.reviews}</p>
          <a
            href={destination.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{color:"purple",textDecoration:"none"}}
          >
           Website
          </a>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};
