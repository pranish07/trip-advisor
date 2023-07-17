import React from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../../data";
import "./home.css";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 onClick={()=>navigate("/")}>Welcome to Trip Advisor</h1>
      <h3 style={{ color: "blue" }}>Top Countries for your next holiday</h3>
      <div className="continents">
        {data.continents.map((continent) => (
          <div
            key={continent.id}
            className="continent-card"
            onClick={() => navigate(`/countries/${continent.id}`)}
          >
            <img src={continent.image} height={200} width={200} />
            {continent.name}
          </div>
        ))}
      </div>
    </div>
  );
};
