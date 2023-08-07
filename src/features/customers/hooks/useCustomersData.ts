import axios from "axios";
import { useQuery } from "react-query";
import { Customer } from "features/customers/model/Customer";

const PAGE_SIZE = 2;

const fetchCustomers = (pageNumber: number): Promise<Customer[]> =>
  axios
    .get(
      `http://localhost:4000/customers?_limit=${PAGE_SIZE}&_page=${pageNumber}`
    )
    .then((response) => response.data);

const useCustomersData = (pageNumber: number) =>
  useQuery(["customers", pageNumber], () => fetchCustomers(pageNumber));

export default useCustomersData;
