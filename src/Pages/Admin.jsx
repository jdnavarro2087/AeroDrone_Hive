import { useState } from 'react';
import './Admin.css';
import DataService from '../services/dataService';

function Admin() {
  const [coupon, setCoupon] = useState({
    code: '',
    discount: ''
  });
  const [allCoupons, setAllCoupons] = useState([]);

  const [product, setProduct] = useState({
    title: '',
    category: '',
    price: '',
    image: ''
  });
  const [allProducts, setAllProducts] = useState([]);

  function handleCouponChange(e) {
    const val = e.target.value;
    const name = e.target.name;

    var copy = { ...coupon };
    copy[name] = val;
    setCoupon(copy);
  }

  function saveCoupon() {
    console.log(coupon);
  
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }
  
  function handleProductChange(e) {
    const val = e.target.value;
    const name = e.target.name;
  
    var copy = { ...product };
    copy[name] = val;
    setProduct(copy);
  }
  
  function saveProduct() {
    console.log(product);
    product.price = parseFloat(product.price);
  
    var copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  
  //
  let service = new DataService();
  service.saveProduct(product);
  }
  
  return (
    <div className="admin page">
  <h1>Store Administration</h1>

  <div className="parent">
    <div className="prods">
      <h3>Products</h3>



      <div className="form">
        <label className="form-label">Title</label>
        <input onChange={handleProductChange} name="title" type="text" className="form-control" />
      
        <label className="form-label">Category</label>
        <input onChange={handleProductChange} name="category" type="text" className="form-control" />
      
        <label className="form-label">Image</label>
        <input onChange={handleProductChange} name="image" type="text" className="form-control" />
      
        <label className="form-label">Price</label>
        <input onChange={handleProductChange} name="price" type="number" className="form-control" />
      
    
      
  <button onClick={saveProduct} className="btn btn-dark">
    Save Product
  </button>
</div>
</div> {/*end of prods form*/}

<ul>
  {allProducts.map((p, index) => (
    <li key={index}>
      {p.title} - {p.category} - ${p.price}
    </li>
  ))}
</ul>

</div> {/*end of prods div*/}

<div className="coupons">
  <h3>Coupons</h3>

  <div className="form">
    <label className="form-label">Code</label>
    <input onChange={handleCouponChange} name="code" type="text" className="form-control"/>
    
    <label className="form-label">Discount</label>
    <input onChange={handleCouponChange} name="discount" type="number" className="form-control" />
    <button onClick={saveCoupon} className="btn btn-dark">
      Save Coupon
      </button>
      </div>
      </div>

      <ul>
      {allCoupons.map((c) => (
    <li>
        {c.code} - {c.discount}
    </li>
  ))}
  </ul>
  </div>

);
}

export default Admin;



