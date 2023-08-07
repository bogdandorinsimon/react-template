import { Typography } from "@mui/material";
import { AxiosError } from "axios";
import { uniqueId } from "lodash";
import WelcomeMessage from "components/WelcomeMessage";
import useTopCarsData from "features/topCars/hooks/useTopCarsData";

const carIds = [1, 3];

const TopCars = () => {
  const queryResults = useTopCarsData(carIds);

  const renderResult = (result: any) => {
    const { isLoading, isError, error } = result;

    if (isLoading) {
      return (
        <Typography key={uniqueId()} variant="h2">
          Loading...
        </Typography>
      );
    }

    if (isError) {
      return (
        <Typography key={uniqueId()} variant="h2">
          {(error as AxiosError).message}
        </Typography>
      );
    }

    return <Typography key={result.data.id}>{result.data.Name}</Typography>;
  };

  return (
    <>
      <WelcomeMessage message="Hello from the top cars page..." />
      {queryResults.map((result) => renderResult(result))}
    </>
  );
};

export default TopCars;
