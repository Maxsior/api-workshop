import React, {useState} from 'react';
import Table from './Table';

export default () => {
    const [cars, setCars] = useState([]);

    const saveNewCar = () => {};

    return (
        <>
            <Table cars={cars} onSubmit={saveNewCar} />
        </>
    );
}
