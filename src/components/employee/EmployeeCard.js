
import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{ employee.name }</h3>
        <address className="employee__address">{ location.name }</address>
    </section>
    
)