import React, {useState, useEffect } from 'react';

const Checkin = ({setCount}, props) => {

    const [id, setID] = useState(['']);
    const [checkinType, setType] = useState('');
    const [spot, setSpot] = useState('');

    const handleCheckIn = async (e) => {
        e.preventDefault();
        const response = await fetch('https://us-central1-sealed-dev.cloudfunctions.net/take-home-mock/lot/park', {
            //Due to PUT not being allowed for this API, I went with POST
            method: "POST",
            body: JSON.stringify({
                id: id,
                type: checkinType,
            }),
        });
        const responseData = await response.json();
        setID(responseData.id)
        setType(response.checkinType);
        setSpot(response.spot)
        const newID = id;
        console.log(newID + 'new')
    }

    const deleteVehicle = async (e, data) => {
        await fetch('https:us-central1-sealed-dev.cloudfunctions.net/take-home-mock/lot/remove/' + data, {
            method: "DELETE"
        });
        document.getElementById(data).parentNode.style.display='none'
        console.log(props.count)
    }


    function handleType(e) {
        setType(e.target.value);
    }

    return (
        <div>
            <div id="ter">
                <h3>Park Vehicle</h3>
                <form onSubmit={ handleCheckIn }>
                    <input type="text" placeholder="Vehicle ID" value={id} onChange={(e) => setID(e.target.value) } />
                    <select name="vehicle-type" defaultValue={'type'} onChange={handleType}>
                        <option value="car">Car</option>
                        <option value="van">Van</option>
                        <option value="motorcycle">Motorcycle</option>
                    </select>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Checkin;