import React from 'react'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
const CountryDetails = ({ countries }) => {

  const params = useParams()
  let { alpha3Code } = params
  const countryDt = countries.find(el => el.alpha3Code === alpha3Code)
  console.log(alpha3Code, countryDt)

  return (
    countryDt ?
      <div className="col-7">
        <h1>{countryDt.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{countryDt.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDt.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {countryDt.borders.map(country => <li key={country}><Link to={`/${country}`}><p>{country}</p></Link></li>)}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      :
      <p>Loading...</p>
  )
}

export default CountryDetails