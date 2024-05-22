import axios from "axios";

class ProductsService {
    static getAllCategory = () => axios.get("/products/categories");
    static getAllProducts = () => axios.get("/products");
    static getSingleProduct = (id) => axios.get(`/products/${id}`);
}

export default ProductsService