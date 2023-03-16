import React, {useState} from 'react';


const Checkin = ({ addList }) => {
    const [listItems, setItems] = useState({
        newID: '',
        newType: '',
        newSpot: '',
    });

    function handleType (e) {
        setItems({...listItems, newType:e.target.value})
    }

    function handleForChange (e) {
        setItems({...listItems, newID:e.target.value});
    }

    async function handleCheckIn (e) {
        e.preventDefault();
        const response = await fetch('https://us-central1-sealed-dev.cloudfunctions.net/take-home-mock/lot/park', {
            //Due to PUT not being allowed for this API, I went with POST
            method: "POST",
            body: JSON.stringify({
                id: listItems.newID,
                type: listItems.newType,
            }),
        });

        const responseData = await response.json();
        setItems({...listItems, newSpot:responseData.vehicle.spot})
        addList({...listItems, newID:responseData.vehicle.id, newSpot:responseData.vehicle.spot})
    }


    return (
        <div className="checkIn">
            <h3>Park Vehicle</h3>
            <form onSubmit={handleCheckIn}>
                <input type="text" placeholder="Vehicle ID" value={listItems.newID} onChange={handleForChange} />
                <select name="vehicle-type" defaultValue={'car'} onChange={handleType}>
                    <option value="car">Car</option>
                    <option value="van">Van</option>
                    <option value="motorcycle">Motorcycle</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Checkin;