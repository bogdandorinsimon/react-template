import { Http } from "api/http";
import { Product } from "./models";

const PRODUCT_SERVICE_ROUTES = {
  products: () => "products",
  productById: (id: string) => `products?id=${id}`
};

export const getProducts = (): Promise<Product[]> => {
  return Http.base
    .get<Product[]>(PRODUCT_SERVICE_ROUTES.products())
    .then((response) => response.data);
};

export const getProductById = (id: string) => {
  return Http.base
    .get<Product[]>(PRODUCT_SERVICE_ROUTES.productById(id))
    .then((response) => response.data);
};
