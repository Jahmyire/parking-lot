import React from "react"
import { Fragment } from 'react';
function Vehicle ({listItems}) {
    const deleteVehicle = async (e, data) => {
        await fetch('https:us-central1-sealed-dev.cloudfunctions.net/take-home-mock/lot/remove/' + data, {
            method: "DELETE"
        });
        document.getElementById(data).parentNode.style.display='none'
        //use API.id for ID in order for this to work
    }

    return (
        <Fragment>
            <tr>
                <td>{listItems.newID}</td>
                <td>{listItems.newType}</td>
                <td>{listItems.newSpot}</td>
                <td>Yes</td>
                <td id={listItems.newID}>
                    <button onClick={(e)=> {deleteVehicle(e, listItems.newID)}}>Remove</button>
                </td>
            </tr>
        </Fragment>
    )
}

export default Vehicle;