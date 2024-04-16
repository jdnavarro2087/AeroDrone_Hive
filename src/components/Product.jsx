import './Product.css';
import QuantityPicker from './QuantityPicker';
import constants from '../common/config';
import {useState, useContext} from 'react';

import DataContext from '../context/dataContext';

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    let addProductToCart = useContext(DataContext).addProductToCart;

    function add() {
        let prod = { ...props.info };
        prod.quantity = quantity;

        addProductToCart(prod);
    }

    function quantityChanged(qty) {
        setQuantity(qty);
    }

function getTotal() {
    // ton of logic

    let total = props.info.price * quantity;
    return total.toFixed(2);
}

    return (
        <div className="product">
            <img src={constants.IMAGE_PATH + props.info.image} alt="main product" />
            <h6>{props.info.title}</h6>
            <label className="price">${props.info.price.toFixed(2)}</label>
            <label className="total">${getTotal()}</label>

            <div className="controls">
            <QuantityPicker onChange={quantityChanged}/>

        <button onClick={add} className="btn btn-sm btn-outline-secondary" style={{ marginTop: '10px' }}>
            Add to Cart
            </button>
            </div>
        </div>
    );
}

export default Product;