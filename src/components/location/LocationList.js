import React, { useContext, useEffect } from "react"
//The useContext hook allows us to use data structures and functions that a parent provider component exposes
//To start, we need to import the context object we created in the provider component so that the Context hook can access the objects it exposes
//The useEffect hook allows the component to reach out into the world for anything that cannot be handled during render. 
//In this case, it is the API call for the Locations.
import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  // The useHistory hook let's us tell React which route we want to visit. 
  // We will use it to tell React to render the animal form component.
  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
  }, [])


  return (
    <div className="locations">
      <h2>Locations</h2>
		      <button onClick={() => {history.push("/locations/create")}}>
            Add Location
          </button>
      {
        locations.map(location => {
          const theLocation = locations.find(l => l.id === location.locationId)
          return <LocationCard key={location.id} 
                              location={theLocation}
                              location={location} /> //key, location and location will become properties on an object that gets passed as an argument
        })
      }
    </div>
  )
}