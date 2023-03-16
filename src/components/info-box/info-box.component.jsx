import React, { useState, useEffect } from 'react';


const IntroBox = () => {
    const [cars, setCars] = useState();
    const [vans, setVans] = useState();
    const [motos, setMoto] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://us-central1-sealed-dev.cloudfunctions.net/take-home-mock/lot/available');
                const responseData = await response.json();
                setCars(responseData.cars)
                setVans(responseData.vans)
                setMoto(responseData.motorcycles)
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

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
                    Motorcycles:<span>{motos}</span>
                </h3>
            </div>
        </div>
    )
}

export default IntroBox;