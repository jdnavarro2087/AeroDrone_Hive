import { useState } from 'react';
import DataContext from './dataContext';
 
function GlobalProvider(props) {
  const [cart, setCart] = useState([]);
 
  function addProductToCart(product) {
    // Copy the current cart array and add the new product
    const updatedCart = [...cart, product];
    // Update the cart state
    setCart(updatedCart);
  }
 
  function removeProductFromCart() {
    // Implement removeProductFromCart logic if needed
  }
 
  return (
    <DataContext.Provider
      value={{
        cart: cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
 
export default GlobalProvider;