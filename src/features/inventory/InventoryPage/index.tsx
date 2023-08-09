import { Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "assets/icons/svg/DeleteIcon";
import WelcomeMessage from "components/WelcomeMessage";
import { useConfirmationDialog } from "context/ConfirmationDialogProvider/useConfirmationDialog";
import { useTranslate } from "hooks/useTranslate";
import PageWrapper from "layout/PageWrapper";
import { PageName } from "models/layout";
import { ROUTER_PATH } from "routes/AppRoutes";
import { Car } from "../models";
import useDeleteCar from "../mutations/useDeleteCar";
import useCars from "../queries/useCars";

const InventoryPage = () => {
  const { translate } = useTranslate();
  const navigate = useNavigate();
  const { cars, isLoading, isError, error } = useCars();
  const { deleteCar } = useDeleteCar();
  const { getConfirmation } = useConfirmationDialog();

  const handleCarItemClick = (car: Car) => {
    navigate(ROUTER_PATH.CAR.replace(":carId", car.id));
  };

  const handleDeleteCar = async (car: Car) => {
    const shouldDelete = await getConfirmation({
      title: translate("inventory.delete.title", "Delete car"),
      description: translate(
        "inventory.delete.description",
        "Are you sure you want to delete this car?",
        { car: car.Name }
      ),
      confirmText: translate("inventory.delete.confirm_text", "Delete"),
      cancelText: translate("inventory.delete.cancel_text", "Close")
    });

    if (shouldDelete) {
      deleteCar(car.id);
    }
  };

  const renderCarsList = () => {
    if (!cars || !cars.length) {
      return null;
    }

    return cars.map((car: Car) => (
      <Grid
        key={car.id}
        container
        alignItems="center"
        justifyContent="space-around"
      >
        <Typography
          onClick={() => {
            handleCarItemClick(car);
          }}
        >
          {car.Name}
        </Typography>
        <IconButton
          onClick={() => {
            handleDeleteCar(car);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
    ));
  };

  return (
    <PageWrapper isLoading={isLoading} isError={isError} error={error}>
      <WelcomeMessage
        message={translate("welcome", "Hello from the inventory page!", {
          page: PageName.INVENTORY_PAGE
        })}
      />
      {renderCarsList()}
    </PageWrapper>
  );
};

export default InventoryPage;
