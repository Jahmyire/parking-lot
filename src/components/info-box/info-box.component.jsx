import React, { useState, useEffect } from 'react';


const IntroBox = ({cars, setData, vans, setVata, motorcycles, setMata}, props) => {
    const [vehicles, setVehicles] = useState([]);
    console.log(props)
    const onClick = () => setData((vehicles.car))
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://us-central1-sealed-dev.cloudfunctions.net/take-home-mock/lot/available');
                const responseData = await response.json();
                setVehicles(responseData);
                
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    setData(vehicles.cars);
    setVata(vehicles.vans);
    setMata(vehicles.motorcycles);
    


    return (
        <div className="info-box__container">
            <h3 className="info-box__title underline">Spots Remaining</h3>
            <div className="content-wrapper">
                <h3>
                    Cars:<span>{cars}</span>
                </h3>

                <h3>
                    Vans:<span>{vans}</span>
                </h3>

                <h3>
                    Motorcycles:<span>{motorcycles}</span>
                </h3>
            </div>
        </div>
    )
}

export default IntroBox;