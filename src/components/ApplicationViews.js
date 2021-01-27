import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"

import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { LocationForm } from "./location/LocationForm"
import { LocationDetail } from "./location/LocationDetail"

import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail} from "./employee/EmployeeDetail"

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
                
                <Route exact path="/animals/detail/:animalId(\d+)">
                    <AnimalDetail />
                </Route>

                <LocationProvider>

                    <CustomerProvider>

                        {/* Note the addition of "exact" now that we have an additional route with "/animals" in it below this Route: "/animals/create" */}
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>

                        <Route path="/animals/create">
                            <AnimalForm />
                        </Route>

                    </CustomerProvider>

                </LocationProvider>

            </AnimalProvider>

            {/* Render the location list when http://localhost:3000/locations */}
            <h2>Locations</h2>
            <LocationProvider>

                <Route exact path="/locations/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>
                    
                <Route exact path="/locations">
                    <LocationList />
                </Route>

                <Route path="/locations/create">
                    <LocationForm />
                </Route>

            </LocationProvider>

             {/* Render the location list when http://localhost:3000/customers */}
             <h2>Customers</h2>
             <CustomerProvider>

                <Route exact path="/customers">
                    <CustomerList />
                </Route>

             </CustomerProvider>

             {/* Render the location list when http://localhost:3000/employees */}
             <h2>Employees</h2>
             <EmployeeProvider>

                <Route exact path="/employees/detail/:employeeId(\d+)">
                    <EmployeeDetail />
                </Route>

                <LocationProvider>

                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>

                    <Route path="/employees/create">
                        <EmployeeForm />
                    </Route>

                </LocationProvider>

             </EmployeeProvider>
        </>
    )
}