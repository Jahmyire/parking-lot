import React, {Component, useState} from 'react';
import './App.scss';
import IntroBox from'./components/info-box/info-box.component';
import ParkedCars from './components/info-box/parked.component';
import Checkin from './components/check-in/check-in.component';
import Garage from './components/garage/garage.component';

function App () {
  
  const [count, setCount] = useState('');
  const [vount, setVount]  = useState();
  const [mount, setMount]  = useState();

  const [cspot, setCspot] = useState();
  const [vspot, setVspot] = useState();
  const [mspot, setMspot] = useState();

  const [vehicle, removeVeh] = useState();
    return (
      <div className="App">
        <div className="ParkingLot">
          <h1 className="underline" style={{ marginBottom: '1em'}}>Parking Lot</h1>
          <div className="topDIV">
            <IntroBox cars={count} setData={setCount} vans={vount} setVata={setVount} motorcycles={mount} setMata={setMount} />
            <ParkedCars setCspot={setCspot} setMspot={setMspot} setVspot={setVspot} />
          </div>

          <Checkin/>
          <Garage removeVeh={removeVeh} />
        </div>
      </div>
    );
}

export default App;
