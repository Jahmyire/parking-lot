import React, { useState, useEffect } from 'react';

const ParkedCars = ({setCspot, setMspot, setVspot}) => {
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

    const inventoryCount = (vehicleType) => {
        let inventoryNumber = 0;
        let newArray = vehicles.filter(word => word.type == vehicleType);
        inventoryNumber = newArray.length;
        return inventoryNumber;
    }

    setCspot(inventoryCount('car'));
    setMspot(inventoryCount('motorcycle'))
    setVspot(inventoryCount('van'))

    return (
        <div className="info-box__container">
            <h3 className="info-box__title underline">Vehicles Parked</h3>
            <div className="content-wrapper">
                <h3>
                    Cars:
                    <span>{setCspot(inventoryCount('car'))}</span>
                </h3>

                <h3>
                    Vans:<span>{setMspot(inventoryCount('motorcycle'))}</span>
                </h3>

                <h3>
                    Motorcycles:<span>{setVspot(inventoryCount('van'))}</span>
                </h3>
            </div>
        </div>
    )
}

export default ParkedCars;