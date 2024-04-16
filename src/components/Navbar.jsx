import "./Navbar.css";
import DataContext from '../context/dataContext';
import { useContext } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const cart = useContext(DataContext).cart;

  function getNumProducts(){
    let total = 0;
    for(let i=0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.quantity
    }
    
    return total;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-custom" data-bs-theme="dark">
  <div className="container-fluid">
    
    <Link className="navbar-brand" to="/Home">
      AeroDrone Hive
    </Link>
    <button
     
     className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Home">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Catalog">
            Catalog
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/ShoppingList">
            Shopping List
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/About">
            About us
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Admin">
            Admin
          </Link>
        </li>

      </ul>
      <div className="d-flex" role="search">
        
        <button className="btn btn-outline-success" type="button">
        🛒 items {getNumProducts()}
        </button>
      </div>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
