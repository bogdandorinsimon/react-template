import { Typography } from "@mui/material";
import WelcomeMessage from "components/WelcomeMessage";
import { useTranslate } from "hooks/useTranslate";
import useCar from "../queries/useCar";

const CarPage = () => {
  const { translate } = useTranslate();
  const { car, isLoading, isError, error } = useCar();

  if (isLoading) {
    return (
      <Typography variant="h2">
        {translate("app.loading", "Loading...")}
      </Typography>
    );
  }

  if (isError) {
    return (
      <Typography variant="h3">
        {error
          ? error.message
          : translate(
              "app.error",
              "An error has occurred, please retry later!"
            )}
      </Typography>
    );
  }

  const renderCar = () => {
    if (!car) {
      return null;
    }

    return <Typography>{car.Name}</Typography>;
  };

  return (
    <>
      <WelcomeMessage message={translate("welcome.car_page")} />
      {renderCar()}
    </>
  );
};

export default CarPage;
