import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import "./Location.css"
import { useHistory } from 'react-router-dom';

export const LocationForm = () => {
    const { addLocation } = useContext(LocationContext)
    const { locations, getLocations } = useContext(LocationContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the initial state of the form inputs with useState()
    */

    const [location, setLocation] = useState({
      name: "",
      address: ""
    });

    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization, so we can provide their data in the form drop downs
    */
    useEffect(() => {
      getLocations()
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newLocation = { ...location } //"..." spread operator. It takes all of the properties of this bbject, make a new object with its properties, then change the properties of it without affecting the regional object
      let selectedVal = event.target.value
      
      /* Location is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newLocation[event.target.id] = selectedVal
      // update state
      setLocation(newLocation)
    }
    
    const handleClickSaveLocation = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form
      
      const locationAddress = location.address

      if (locationAddress === "") {
        window.alert("Please type in a location")
      } else {
        //invoke addLocation passing location as an argument.
        addLocation(location)
        .then(() => history.push("/locations"))
      }
    }

    return (
      <form className="locationForm">
          <h2 className="locationForm__title">New Location</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Location name:</label>
                  {/* event.target is this input element */}
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={location.name}/>
              </div>
          </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Location Address: </label>
                  {/* <select defaultValue={location.location} name="location" id="location" onChange={handleControlledInputChange} className="form-control" >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select> */}
                  {/* <input type="text" name="location" id="location"></input> */}
                  <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location address" value={location.location}/>
              </div>
          </fieldset>

          <button className="btn btn-primary"
            onClick={handleClickSaveLocation}>
            Save Location
          </button>
      </form>
    )
}