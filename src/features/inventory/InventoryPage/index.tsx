import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WelcomeMessage from "components/WelcomeMessage";
import { useTranslate } from "hooks/useTranslate";
import { ROUTER_PATH } from "routes/AppRoutes";
import { Car } from "../models/Car";
import useCars from "../queries/useCars";

const InventoryPage = () => {
  const { translate } = useTranslate();
  const navigate = useNavigate();

  const { cars, isLoading, isError, error } = useCars();

  const handleCarItemClick = (car: Car) => {
    navigate(ROUTER_PATH.CAR.replace(":carId", car.id));
  };

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

  const renderCarsList = () => {
    if (!cars || !cars.length) {
      return null;
    }

    return cars.map((car: Car) => (
      <Typography
        key={car.id}
        onClick={() => {
          handleCarItemClick(car);
        }}
      >
        {car.Name}
      </Typography>
    ));
  };

  return (
    <>
      <WelcomeMessage
        message={translate(
          "welcome.inventory_page",
          "Hello from the inventory page!"
        )}
      />
      {renderCarsList()}
    </>
  );
};

export default InventoryPage;
