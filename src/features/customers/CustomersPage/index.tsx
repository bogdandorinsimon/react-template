import { Button, Typography } from "@mui/material";
import { useState } from "react";
import WelcomeMessage from "components/WelcomeMessage";
import { Customer } from "features/customers/models";
import { useTranslate } from "hooks/useTranslate";
import PageWrapper from "layout/PageWrapper";
import useCustomers from "../queries/useCustomers";

const PAGE_SIZE = 2;

const CustomersPage = () => {
  const { translate } = useTranslate();

  const [pageNumber, setPageNumber] = useState<number>(1);
  const { customers, isLoading, isError, error } = useCustomers({
    pageNumber,
    pageSize: PAGE_SIZE
  });

  const handlePreviousClick = () => {
    setPageNumber(pageNumber - 1);
  };

  const handleNextClick = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <PageWrapper isLoading={isLoading} isError={isError} error={error}>
      <WelcomeMessage
        message={translate(
          "welcome.customers",
          "Hello from the customers page!"
        )}
      />
      {customers?.map((customer: Customer) => (
        <Typography key={customer.id}>{customer.name}</Typography>
      ))}
      <Button onClick={handlePreviousClick} disabled={pageNumber === 1}>
        {translate("customers.previous", "Previous")}
      </Button>
      <Button onClick={handleNextClick} disabled={pageNumber === 5}>
        {translate("customers.next", "Next")}
      </Button>
    </PageWrapper>
  );
};

export default CustomersPage;
