import { QueryOptions } from "models/query";
import Http from "api/http";
import { Customer } from "./models";

const CUSTOMERS_SERVICE_ROUTES = {
  customers: (queryOptions: QueryOptions) =>
    `customers?_limit=${queryOptions.pageSize}&_page=${queryOptions.pageNumber}`
};

const getCustomers = (queryOptions: QueryOptions): Promise<Customer[]> => {
  return Http.get<Customer[]>(
    CUSTOMERS_SERVICE_ROUTES.customers(queryOptions)
  ).then((response) => response.data);
};

export default getCustomers;
