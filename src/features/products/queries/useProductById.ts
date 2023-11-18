import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { PRODUCT_KEYS } from "api/constants";
import { Product } from "../models";
import { getProductById } from "../services";

export const useProductById = (id: string) => {
  const {
    data: product,
    isLoading,
    isError,
    error
  } = useQuery<Product[], AxiosError>(PRODUCT_KEYS.product(id), () =>
    getProductById(id)
  );

  return { product, isLoading, isError, error };
};
