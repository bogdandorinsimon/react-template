import { Typography } from "@mui/material";
import WelcomeMessage from "components/WelcomeMessage";
import { Car } from "features/inventory/models/Car";
import { useTranslate } from "hooks/useTranslate";
import useTopCars from "../queries/useTopCars";

const carIds = ["1", "3"];

const TopCarsPage = () => {
  const { translate } = useTranslate();
  const topCars = useTopCars(carIds);

  const renderResult = (topCar: Optional<Car>) => {
    // const { isLoading, isError, error } = result;

    // if (isLoading) {
    //   return (
    //     <Typography key={uniqueId()} variant="h2">
    //       {translate("app.loading", "Loading...")}
    //     </Typography>
    //   );
    // }

    // if (isError) {
    //   return (
    //     <Typography key={uniqueId()} variant="h2">
    //       {error
    //         ? error.message
    //         : translate(
    //             "app.error",
    //             "An error has occurred, please retry later!"
    //           )}
    //     </Typography>
    //   );
    // }

    if (!topCar) {
      return null;
    }

    return <Typography key={topCar.id}>{topCar.Name}</Typography>;
  };

  return (
    <>
      <WelcomeMessage
        message={translate("welcome.top_cars", "Hello from the top cars page!")}
      />
      {topCars.map((topCar) => renderResult(topCar))}
    </>
  );
};

export default TopCarsPage;
