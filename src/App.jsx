import React from "react";
import { Route, Routes } from "react-router";
import { Country } from "./pages/Country/Country";
import { Destination } from "./pages/Destination/Destination";
import { DestinationDetail } from "./pages/DestinationDetail/DestinationDetail";
import { Home } from "./pages/Home/Home";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:continentId" element={<Country />}/>
        <Route path="/list/:countryId" element={<Destination />} />
        <Route path="/detail/:destinationId" element={<DestinationDetail />}/>
      </Routes>
    </div>
  );
};
