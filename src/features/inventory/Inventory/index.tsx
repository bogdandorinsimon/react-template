import { Typography } from "@mui/material";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeMessage from "components/WelcomeMessage";
import useCarsData from "features/inventory/hooks/useCarsData";
import { Car } from "features/inventory/models/Car";
import { ROUTER_PATH } from "routes/AppRoutes";

const Inventory = () => {
  const navigate = useNavigate();
  const [refetchInterval, setRefetchInterval] = useState<false | number>(3000);

  const onCarsFetchSuccess = (cars: Car[]) => {
    const nrOfCars = cars.length;

    if (nrOfCars >= 4) {
      setRefetchInterval(false);
    }
  };

  const { isLoading, isError, data, error } = useCarsData({
    onSuccess: onCarsFetchSuccess,
    refetchInterval
  });

  const handleCarItemClick = (car: Car) => {
    navigate(ROUTER_PATH.CAR.replace(":carId", String(car.id)));
  };

  if (isLoading) {
    return <Typography variant="h2">Loading...</Typography>;
  }

  if (isError) {
    return (
      <Typography variant="h3">{(error as AxiosError).message}</Typography>
    );
  }

  return (
    <>
      <WelcomeMessage message="Hello from the Inventory page!" />
      {data?.map((car: Car) => (
        <Typography
          key={car.id}
          onClick={() => {
            handleCarItemClick(car);
          }}
        >
          {car.Name}
        </Typography>
      ))}
    </>
  );
};

export default Inventory;
