import React, {useState, useEffect} from 'react';

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

    return (
        <div>
            <table style={{ margin: 'auto' }}> 
                <tbody>
                    <tr>
                        <th>Vehicle ID</th>
                        <th>Vehicle Type</th>
                        <th>Spot</th>
                        <th>Parked</th>
                    </tr>

                    {vehicles.map((wheels, key) => {
                        return (
                            <tr key={key}>
                                <td>{wheels.id}</td>
                                <td>YES</td>
                                <td>{wheels.spot}</td>
                                <td>{wheels.type}</td>
                                <td id={wheels.id}>
                                    <button /*onClick={(e)=> {deleteVehicle(e, wheels.id)}}*/>Remove</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}


export default Garage;