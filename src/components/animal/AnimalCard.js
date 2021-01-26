import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animal }) => ( //instead of passing object 'props' and accessing every property by using . notation, like props.animal.location, we just pass our three objects as parameters 
    <section className="animal">
        <h3 className="animal__name">
            <Link to={`/animals/detail/${animal.id}`}>
                {animal.name}
            </Link>
        </h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        {/* <div className="animal__owner">Owner: {customer.name}</div>
        <address className="location__address">{location.name}</address> */}
    </section>
    
)