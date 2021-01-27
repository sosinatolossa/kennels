import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();
    const history = useHistory();

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    }, [])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div class="location__address">{location.address}</div>

      <h4 class="location__animal__list">animals</h4>
      <div className="location__animal__name">Animals: {location.animal?.name}</div>
      <h4 class="location__employees__list">employees</h4>
      <div className="location__owner">Employees: {location.employee?.name}</div>
    </section>
  )
}