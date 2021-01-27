//This code imports the main React library, and two functions that it exports
//We will use useState to hold and set the array of animals.
import React, { useState, createContext } from "react"

//When we create a data provider component in React, we need to create a context
// The context is imported and used by individual components that need data
export const LocationContext = createContext()

// This component establishes what data can be used.
export const LocationProvider = (props) => { //props is an object
    const [locations, setLocations] = useState([]) //useState is returning array
    //setLocations is a function that returns the updated version of 'locations'

    const getLocations = () => {
        return fetch("http://localhost:8088/locations?_embed=employees&_embed=animals") 
        .then(res => res.json())
        .then(setLocations)
    }

    const addLocation = locationObj => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(response => response.json)
    }

    const getLocationById = (id) => {
        return fetch(`http://localhost:8088/locations/${id}?_embed=employees&_embed=animals`)
            .then(res => res.json())
    }

    /*
        You return a context provider which has the
        `locations` state, `getLocations` function,
        and the `addLocation` function as keys. This
        allows any child elements to access them.
    */
   return ( //children is a property of props object that contains the child elements
    <LocationContext.Provider value={{
        locations, getLocations, addLocation, getLocationById
    }}>
        {props.children} 
    </LocationContext.Provider>
)
}