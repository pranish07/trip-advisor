import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { data } from "../../data";
import "./country.css";

export const Country = () => {
  const { continentId } = useParams();
  const filteredCountries = data.continents.find(
    (continent) => continent.id === parseInt(continentId)
  )?.countries;

  return (
    <div>
      <h1>Countries</h1>
      <div className="countries">
        {filteredCountries &&
          filteredCountries.map((country) => (
            <div key={country.id} className="country-card">
              <NavLink to={`/list/${country.id}`}>
                <img src={country.image} alt="" height={250} width={250} />
                {country.name}
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};
