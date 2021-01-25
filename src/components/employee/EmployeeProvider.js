import React, { useState, createContext } from "react"

//When we create a data provider component in React, we need to create a context
// The context is imported and used by individual components that need data
export const EmployeeContext = createContext()

// This component establishes what data can be used.
export const EmployeeProvider = (props) => { //props is an object
    const [employees, setEmployees] = useState([]) //useState is returning array
    //setEmployees is a function that returns the updated version of 'employees'

    const getEmployees = () => {
        return fetch("http://localhost:8088/Employees?_expand=location") 
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployee = EmployeeObj => {
        return fetch("http://localhost:8088/Employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(EmployeeObj)
        })
        .then(getEmployees)
    }

    /*
        You return a context provider which has the
        `employees` state, `getEmployees` function,
        and the `addEmployee` function as keys. This
        allows any child elements to access them.
    */
   return ( //children is a property of props object that contains the child elements
    <EmployeeContext.Provider value={{
        employees, getEmployees, addEmployee
    }}>
        {props.children} 
    </EmployeeContext.Provider>
)
}