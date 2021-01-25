import React, { useState, createContext } from "react"

//When we create a data provider component in React, we need to create a context
// The context is imported and used by individual components that need data
export const CustomerContext = createContext()

// This component establishes what data can be used.
export const CustomerProvider = (props) => { //props is an object
    const [customers, setCustomers] = useState([]) //useState is returning array
    //setCustomers is a function that returns the updated version of 'customers'

    const getCustomers = () => {
        return fetch("http://localhost:8088/Customers?") 
        .then(res => res.json())
        .then(setCustomers)
    }

    const addCustomer = CustomerObj => {
        return fetch("http://localhost:8088/Customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(CustomerObj)
        })
        .then(getCustomers)
    }

    /*
        You return a context provider which has the
        `customers` state, `getCustomers` function,
        and the `addCustomer` function as keys. This
        allows any child elements to access them.
    */
   return ( //children is a property of props object that contains the child elements
    <CustomerContext.Provider value={{
        customers, getCustomers, addCustomer
    }}>
        {props.children} 
    </CustomerContext.Provider>
)
}