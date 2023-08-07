import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { Car } from "../models/Car";

const fetchCar = ({ queryKey }: any): Promise<Car> => {
  const carId = queryKey[1];

  return axios
    .get(`http://localhost:4000/cars/${carId}`)
    .then((response) => response.data);
};

const useCarData = (carId?: string) => {
  const queryClient = useQueryClient();

  return useQuery(["car", carId], fetchCar, {
    initialData: () => {
      if (!carId) {
        return null;
      }

      const cars = queryClient.getQueryData("cars");
      const initialCar = (cars as Car[])?.find(
        (car: Car) => car.id === parseInt(carId, 10)
      );

      if (initialCar) {
        return initialCar;
      }
      return null;
    }
  });
};

export default useCarData;
