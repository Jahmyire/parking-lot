import React, {useState} from 'react';
import './App.scss';
import IntroBox from'./components/info-box/info-box.component';
import ParkedCars from './components/info-box/parked.component';
import Checkin from './components/check-in/check-in.component';
import Garage from './components/garage/garage.component';
import Inventory from './components/inventory/inventory.component';

function App () {

  const [count, setCount] = useState(); 
  const [vount, setVount]  = useState();
  const [mount, setMount]  = useState();

  function carState (cars) {
    setCount(count);
  }

  function vanState (vans) {
    setVount(vount);
  }

  function motoState (motos) {
    setMount(mount);
  }


  const [cspot, setCspot] = useState();
  const [vspot, setVspot] = useState();
  const [mspot, setMspot] = useState();

  function carSpot (cspots) {
    setCspot(cspot);
  }

  function vanSpot (vspots) {
    setVspot(vspot)
  }

  function motoSpot (mspots) {
    setMspot(mspot)
  }

  const [list, setList] = useState([]);

  function addList (listItems) {
    setList([listItems,...list])
  }

    return (
      <div className="App">
        <div className="ParkingLot">
          <h1 className="underline" style={{ marginBottom: '1em'}}>Parking Lot</h1>
          <div className="topDIV">
            <IntroBox carState={carState} vanState={vanState} motoState={motoState}/>
            <ParkedCars carSpot={carSpot} vanSpot={vanSpot} motoSpot={motoSpot}/>
          </div>
          <Checkin addList={addList}/>
          <div>
            <table className="allVehicles" style={{ margin: 'auto' }}>
              <tbody>
                <tr>
                  <th>Vehicle ID</th>
                  <th>Vehicle Type</th>
                  <th>Spot</th>
                  <th>Parked</th>
                </tr>
                <Garage />
                <Inventory key={list.newID} list={list}/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

export default App;
