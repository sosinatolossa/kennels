import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  const { locations, getLocations } = useContext(LocationContext)

  // The useHistory hook let's us tell React which route we want to visit. 
  // We will use it to tell React to render the animal form component.
  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getLocations()
    .then(getEmployees)
  }, [])


  return (
    <div className="employees">
		      <button onClick={() => {history.push("/employees/create")}}>
            Add Employee
          </button>
      {
        employees.map(employee => {
          const location = locations.find(l => l.id === employee.locationId)

          return <EmployeeCard key={employee.id} 
                          location={location}
                          employee={employee} /> //key, location, and employee will become properties on an object that gets passed as an argument
        })
      }
    </div>
  )
}