import { Typography } from "@mui/material";
import WelcomeMessage from "components/WelcomeMessage";
import { useTranslate } from "hooks/useTranslate";
import PageWrapper from "layout/PageWrapper";
import useCar from "../queries/useCar";

const CarPage = () => {
  const { translate } = useTranslate();
  const { car, isLoading, isError, error } = useCar();

  const renderCar = () => {
    if (!car) {
      return null;
    }

    return <Typography>{car.Name}</Typography>;
  };

  return (
    <PageWrapper isLoading={isLoading} isError={isError} error={error}>
      <WelcomeMessage message={translate("welcome.car_page")} />
      {renderCar()}
    </PageWrapper>
  );
};

export default CarPage;
