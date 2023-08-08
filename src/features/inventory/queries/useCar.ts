import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { INVENTORY_KEYS } from "api/constants";
import { Car } from "../models";
import { getCar } from "../services";

const useCar = () => {
  const { carId } = useParams();

  const {
    data: car,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery<Optional<Car>, AxiosError>(
    INVENTORY_KEYS.car(carId),
    () => {
      if (!carId) return;

      return getCar(carId);
    },
    {
      enabled: !!carId
    }
  );

  return { car, isLoading, isError, error, refetch };
};

export default useCar;
