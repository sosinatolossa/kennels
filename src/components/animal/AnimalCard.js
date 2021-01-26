import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, customer, location }) => ( //instead of passing object 'props' and accessing every property by using . notation, like props.animal.location, we just pass our three objects as parameters 
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="location__address">Breed: {animal.breed}</div>
        <div className="animal__owner">Owner: {customer.name}</div>
        <address className="location__address">{animal.location.name}</address>
    </section>
    
)