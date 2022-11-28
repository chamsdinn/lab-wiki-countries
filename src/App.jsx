import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, NavLink } from "react-router-dom"
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails'
import Navbar from './Components/Navbar';
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(({ data }) => {
        setCountries(data)
      })
      .catch(
        (error) => { console.log(error) }
      )
  }, [])

  return (

    <div className="App">

      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails countries={countries} />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
