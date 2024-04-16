import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './Catalog.css';
import Product from '../components/Product';
import DataService from '../services/dataService';

function Catalog() {
    const [data, setData] = useState([]);

    async function loadCatalog() {
        let service = new DataService();
        let cat = await service.getCatalog();
        setData(cat);
    }

    useEffect(() => {
        loadCatalog();
    }, []);
    
    
    return (
        <div className="catalog page">
            <h1>Drone Inventory</h1>

            {data.map((prod) => (
                <Product key={prod._id} info={prod} /> 
            ))}
        </div>
    );
}

export default Catalog;