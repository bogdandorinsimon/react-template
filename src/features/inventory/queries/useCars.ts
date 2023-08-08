import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { INVENTORY_KEYS } from "api/constants";
import { Car } from "../models";
import { getCars } from "../services";

const useCars = () => {
  const {
    data: cars,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery<Car[], AxiosError>(INVENTORY_KEYS.all, () => getCars());

  return { cars, isLoading, isError, error, refetch };
};

export default useCars;
