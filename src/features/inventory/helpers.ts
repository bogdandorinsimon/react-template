import { Car } from "./models";

export const getPowerToWeightRatio = (car: Car) => {
  if (car.Weight_in_lbs === 0) {
    return undefined;
  }

  const powerToWeightRatio = car.Horsepower / car.Weight_in_lbs;
  return powerToWeightRatio;
};
