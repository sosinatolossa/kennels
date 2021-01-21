
import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

import { AnimalCard } from "./animal/AnimalCard"

import { CustomerCard } from "./customer/CustomerCard"

import { EmployeeCard } from "./employee/EmployeeCard"

import { LocationCard } from "./location/LocationCard"

import "./Kennel.css"

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>

    </>
)