import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"


let employees = 0
let animals = 0


export const LocationCard = ({ location }) => (
    
    //for every object in location
    // for ( let num of location) {
    //     employees+=1 //increment employees by 1
    //     animals+=1 //increment animals by 1
    //     return num
    // }
    <section className="location">
        <h3 className="location__name">
            <Link to={`/locations/detail/${location.id}`}>
                {location.name}
            </Link>     
        </h3>
        <div className="num__employees">{employees} employees</div>
        <div class="num__animals">{animals} animals</div>
    </section>
    
)