import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../data";
import "./country.css";
export const Country = () => {
  const { continentId } = useParams();
  const navigate = useNavigate();

  const filteredCountries = data.continents.find(
    (continent) => continent.id === parseInt(continentId)
  );

  return (
    <div >
      <h1 onClick={()=>navigate("/")}>Countries</h1>
      <div className="countries">
        
         {filteredCountries.countries.map((country) => (
            <div
              key={country.id}
              className="country-card"
              onClick={() =>
                navigate(`/${filteredCountries?.id}/list/${country.id}`)
              }
            >
              <img src={country.image} alt="" height={250} width={250} />
              {country.name}
            </div>
          ))}
      </div>
    </div>
  );
};
