import { Car } from "features/inventory/models";
import { QueryOptions } from "../models/query";

export const BASE_URL = "http://localhost:4000";

export const INVENTORY_KEYS = {
  all: ["cars"],
  car: (carId?: Car["id"]) => [...INVENTORY_KEYS.all, carId]
} as const;

export const LEADS_KEYS = {
  all: ["leads"]
};

export const CUSTOMERS_KEYS = {
  all: ["customers"],
  list: (queryOptions: QueryOptions) => [...CUSTOMERS_KEYS.all, queryOptions]
};
