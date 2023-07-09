import React from 'react'
import { NavLink } from 'react-router-dom'
import { data } from '../../data'
import "./home.css"

export const Home = () => {
  return (
    <div>
    <h1>Welcome to Trip Advisor</h1>
    <h3 style={{color:"blue"}}>Top Countries for your next holiday</h3>
    <div className='continents'>
      {data.continents.map((continent) => (
        <div key={continent.id} className="continent-card">
          <NavLink to={`/countries/${continent.id}`}>
            <img src={continent.image} height={200} width={200} />
            {continent.name}
          </NavLink>
        </div>
      ))}
      </div>
    
  </div>
  )
}
