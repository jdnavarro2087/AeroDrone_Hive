import { createContext } from "react";

/**
 * Context is an interface / definition of data
 * Should not have implementations
 */

const DataContext = createContext({
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export default DataContext;
