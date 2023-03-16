import React, { useState, useEffect } from 'react';

const ParkedCars = () => {
    const [cspots, setCspace] = useState();
    const [vspots, setVspace] = useState();
    const [mspots, setMspace] = useState();;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://us-central1-sealed-dev.cloudfunctions.net/take-home-mock/lot/parked');
                const responseData = await response.json();
                const inventoryCount = (vehicleType) => {
                    let inventoryNumber = 0;
                    let newArray = responseData.filter(word => word.type === vehicleType);
                    inventoryNumber = newArray.length;
                    return inventoryNumber;
                }
                setCspace(inventoryCount('car'));
                setVspace(inventoryCount('van'));;
                setMspace(inventoryCount('motorcycle'))
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);


    
    return (
        <div className="info-box__container">
            <h3 className="info-box__title underline">Vehicles Parked</h3>
            <div className="content-wrapper">
                <h3>
                    Cars:
                    <span>{cspots}</span>
                </h3>

                <h3>
                    Vans:<span>{vspots}</span>
                </h3>

                <h3>
                    Motorcycles:<span>{mspots}</span>
                </h3>
            </div>
        </div>
    )
}

export default ParkedCars;