import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { INVENTORY_KEYS } from "api/constants";
import { Car } from "../models";
import { deleteCar } from "../services";

const useDeleteCar = () => {
  const queryClient = useQueryClient();

  const { isLoading, isError, isSuccess, mutate } = useMutation<
    Car,
    AxiosError,
    string
  >(deleteCar, {
    onSuccess: () => {
      queryClient.invalidateQueries(INVENTORY_KEYS.all);
    }
  });

  return { isLoading, isError, isSuccess, deleteCar: mutate };
};

export default useDeleteCar;
