//This code imports the main React library, and two functions that it exports
//We will use useState to hold and set the array of animals.
import React, { useState, createContext } from "react"

//When we create a data provider component in React, we need to create a context
// The context is imported and used by individual components that need data
export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => { //props is an object
    const [animals, setAnimals] = useState([]) //useState is returning array
    //setAnimals is a function that returns the updated version of 'animals'

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=location")
        .then(res => res.json())
        .then(setAnimals)
    }

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return ( //children is a property of props object that contains the child elements
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal
        }}>
            {props.children} 
        </AnimalContext.Provider>
    )
}