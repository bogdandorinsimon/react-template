import { Button, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { useState } from "react";
import WelcomeMessage from "components/WelcomeMessage";
import useCustomersData from "features/customers/hooks/useCustomersData";
import { Customer } from "features/customers/model/Customer";

const Customers = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const {
    data: customers,
    isLoading,
    isError,
    error
  } = useCustomersData(pageNumber);

  if (isLoading) {
    return <Typography variant="h2">Loading...</Typography>;
  }

  if (isError) {
    return (
      <Typography variant="h2">{(error as AxiosError).message}</Typography>
    );
  }

  const handlePreviousClick = () => {
    setPageNumber(pageNumber - 1);
  };
  const handleNextClick = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <>
      <WelcomeMessage message="Hello from the customers page!  " />
      {customers?.map((customer: Customer) => (
        <Typography key={customer.id}>{customer.name}</Typography>
      ))}
      <Button onClick={handlePreviousClick} disabled={pageNumber === 1}>
        Previous
      </Button>
      <Button onClick={handleNextClick} disabled={pageNumber === 5}>
        Next
      </Button>
    </>
  );
};

export default Customers;
