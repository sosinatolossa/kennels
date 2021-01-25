import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { CustomerCard } from "./customer/CustomerCard"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"

import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"

import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"

import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <h2>Animals</h2>
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>
            {/* Render the location list when http://localhost:3000/locations */}
            <h2>Locations</h2>
            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

             {/* Render the location list when http://localhost:3000/customers */}
             <h2>Customers</h2>
             <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
             </CustomerProvider>

             {/* Render the location list when http://localhost:3000/employees */}
             <h2>Employees</h2>
             <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
             </EmployeeProvider>
        </>
    )
}