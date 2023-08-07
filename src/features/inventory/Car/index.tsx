import { Typography } from "@mui/material";
import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import WelcomeMessage from "../../../components/WelcomeMessage";
import useCarData from "../hooks/useCarData";

const Car = () => {
  const { carId } = useParams();

  const { data, isLoading, isError, error } = useCarData(carId);

  if (isLoading) {
    return <Typography variant="h2">Loading...</Typography>;
  }

  if (isError) {
    return (
      <Typography variant="h2">{(error as AxiosError).message}</Typography>
    );
  }

  return (
    <>
      <WelcomeMessage message="Hello from the car page!" />
      <Typography>{data?.Name}</Typography>
    </>
  );
};

export default Car;
