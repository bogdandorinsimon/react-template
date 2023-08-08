import Http from "api/http";
import { Car } from "./models";

const INVENTORY_SERVICE_ROUTES = {
  cars: () => "cars",
  car: (carId: string) => `cars/${carId}`
};

export const getCars = (): Promise<Car[]> => {
  return Http.get<Car[]>(INVENTORY_SERVICE_ROUTES.cars()).then(
    (response) => response.data
  );
};

export const getCar = (carId: Car["id"]): Promise<Car> => {
  return Http.get<Car>(INVENTORY_SERVICE_ROUTES.car(carId)).then(
    (response) => response.data
  );
};
