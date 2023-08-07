import { useQueries } from "react-query";
import { INVENTORY_KEYS } from "api/constants";
import { getCar } from "features/inventory/services/carsService";

const useTopCars = (carIds: string[]) => {
  const queryResults = useQueries(
    carIds.map((id) => ({
      queryKey: INVENTORY_KEYS.car(id),
      queryFn: () => getCar(id)
    }))
  );

  //   return queryResults.map((queryResult) => {
  //     return {
  //       topCar: queryResult.data,
  //       isLoading: queryResult.isLoading,
  //       isError: queryResult.isError,
  //       error: queryResult.error,
  //       refetch: queryResult.refetch
  //     };
  //   });
  return queryResults.map((queryResult) => queryResult.data);
};

export default useTopCars;
