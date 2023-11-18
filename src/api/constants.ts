export const BASE_URL = "http://localhost:4000";

export const PRODUCT_KEYS = {
  all: ["products"],
  lists: () => [...PRODUCT_KEYS.all, "lists"],
  product: (id: string) => [...PRODUCT_KEYS.all, id]
};
