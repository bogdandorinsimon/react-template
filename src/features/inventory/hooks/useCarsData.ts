import axios from "axios";
import { useQuery } from "react-query";

const fetchCars = () =>
  axios.get("http://localhost:4000/cars").then((response) => response.data);

const useCarsData = (options: any) => useQuery("cars", fetchCars, options);

export default useCarsData;
