import React from "react";
import { useNavigate, useParams } from "react-router";
import { data } from "../../data";
import "./detail.css";

export const DestinationDetail = () => {
  const { continentId, countryId, destinationId } = useParams();

  const navigate = useNavigate();

  const findContinents = data.continents.find(
    (continent) => continent.id === parseInt(continentId)
  );

  const findCountry = findContinents.countries.find(
    (country) => country.id === parseInt(countryId)
  );

  const findDestination = findCountry.destinations.find(
    (destination) => destination.id === Number(destinationId)
  );
  return (
    <div>
      {findDestination && (
        <div>
          <h1 className="detail-heading" onClick={()=>navigate(`/${continentId}/list/${countryId}`)}>{findDestination.name}</h1>
          <div className="container">
            <img
              src={findDestination.image}
              alt={findDestination.name}
              height={250}
              width={250}
            />
            <div className="right-col">
              <p>{findDestination.description}</p>
              <p>Location: {findDestination.location}</p>
              <p>Opening Hours: {findDestination.openingHours}</p>
              <p>Ticket Price: {findDestination.ticketPrice}</p>
              <p>Ratings: {findDestination.ratings}</p>
              <p> Reviews: {findDestination.reviews}</p>
              <a
                href={findDestination.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "purple", textDecoration: "none" }}
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
