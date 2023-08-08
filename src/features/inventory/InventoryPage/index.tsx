import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WelcomeMessage from "components/WelcomeMessage";
import { useTranslate } from "hooks/useTranslate";
import PageWrapper from "layout/PageWrapper";
import { ROUTER_PATH } from "routes/AppRoutes";
import { Car } from "../models";
import useCars from "../queries/useCars";

const InventoryPage = () => {
  const { translate } = useTranslate();
  const navigate = useNavigate();

  const { cars, isLoading, isError, error } = useCars();

  const handleCarItemClick = (car: Car) => {
    navigate(ROUTER_PATH.CAR.replace(":carId", car.id));
  };

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
    <PageWrapper isLoading={isLoading} isError={isError} error={error}>
      <WelcomeMessage
        message={translate(
          "welcome.inventory_page",
          "Hello from the inventory page!"
        )}
      />
      {renderCarsList()}
    </PageWrapper>
  );
};

export default InventoryPage;
