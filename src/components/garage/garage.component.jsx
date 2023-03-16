import React, {useState, useEffect} from 'react';
import { Fragment } from 'react';
const Garage = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://us-central1-sealed-dev.cloudfunctions.net/take-home-mock/lot/parked');
                const responseData = await response.json();
                setVehicles(responseData);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const deleteVehicle = async (e, data) => {
        await fetch('https:us-central1-sealed-dev.cloudfunctions.net/take-home-mock/lot/remove/' + data, {
            method: "DELETE"
        });
        document.getElementById(data).parentNode.style.display='none'
        //use API.id for ID in order for this to work
    }



    return (
        <Fragment>
            {vehicles.map((wheels, key) => {
                return (
                    <tr key={key}>
                        <td>{wheels.id}</td>
                        <td>{wheels.type}</td>
                        <td>{wheels.spot}</td>
                        <td>Yes</td>
                        <td id={wheels.id}>
                            <button onClick={(e)=> {deleteVehicle(e, wheels.id)}}>Remove</button>
                        </td>
                    </tr>
                )
            })}
        </Fragment>
    )
}
//NoteBefoeBed
//

export default Garage;