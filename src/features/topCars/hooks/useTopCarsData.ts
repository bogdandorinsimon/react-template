import axios from "axios";
import { useQueries } from "react-query";
import { Car } from "features/inventory/models/Car";

const fetchCar = (carId: number): Promise<Car> =>
  axios
    .get(`http://localhost:4000/cars/${String(carId)}`)
    .then((response) => response.data);

const useTopCarsData = (carIds: number[]) =>
  useQueries(
    carIds.map((id) => ({
      queryKey: ["top-car", id],
      queryFn: () => fetchCar(id)
    }))
  );

export default useTopCarsData;
