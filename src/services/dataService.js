import axios from "axios";

const data = [];

class DataService {
  async getCatalog() {
    // without a server
    // return data

    // call the server
    let response = await axios.get("http://127.0.0.1:5000/api/products");
    return response.data;
  }

  async saveProduct(product) {
    let response = await axios.post(
      "http://127.0.0.1:5000/api/products",
      product
    );
    return response.data;
  }
}

export default DataService;
