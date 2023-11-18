import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { PRODUCT_KEYS } from "api/constants";
import { Product } from "../models";
import { getProducts } from "../services";

export const useProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
    error
  } = useQuery<Product[], AxiosError>(PRODUCT_KEYS.lists(), () =>
    getProducts()
  );

  return { products, isLoading, isError, error };
};
