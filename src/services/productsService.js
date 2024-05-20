import axios from "axios";

class ProductsService {
    static getAllCategory = () => axios.get("/products/categories")
    static getAllProducts = () => axios.get("/products")
}

export default ProductsService