import React, { useContext, useEffect } from "react"
//The useContext hook allows us to use data structures and functions that a parent provider component exposes
//To start, we need to import the context object we created in the provider component so that the Context hook can access the objects it exposes
//The useEffect hook allows the component to reach out into the world for anything that cannot be handled during render. 
//In this case, it is the API call for the animals.
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: Initial render before data")
    getLocations()
    .then(getCustomers)
    .then(getAnimals)
  }, [])


  return (
    <div className="animals">
      {/* {console.log("AnimalList: Render", animals)} */}
      {
        animals.map(animal => {
          //Use the .find() method on both the customers array and
          //the locations array to find the object representation that 
          //each foreign key is referencing.
          const owner = customers.find(c => c.id === animal.customerId)
          const location = locations.find(l => l.id === animal.locationId)
          
          return <AnimalCard key={animal.id} 
                            location={location}
                            customer={owner}
                            animal={animal} /> //key and animal will become properties on an object that gets passed as an argument
        })
      }
    </div>
  )
}