import React from 'react';
import { Fragment } from 'react';
import Vehicle from '../vehicle/vehicle.component';

function Inventory({list}) {
    return (
        <Fragment>
            {list.map(listItems => (
                <Vehicle key={listItems.newID} listItems={listItems}/>
            ))}
        </Fragment>
    )
}

export default Inventory;