import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { CUSTOMERS_KEYS } from "api/constants";
import { Customer } from "features/customers/models";
import { QueryOptions } from "models/query";
import getCustomers from "../services";

const useCustomers = (queryOptions: QueryOptions) => {
  const {
    data: customers,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery<Customer[], AxiosError>(CUSTOMERS_KEYS.list(queryOptions), () =>
    getCustomers(queryOptions)
  );

  return { customers, isLoading, isError, error, refetch };
};

export default useCustomers;
