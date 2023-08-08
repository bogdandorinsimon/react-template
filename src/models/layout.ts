export enum PageName {
  HOME = "home",
  CAR_PAGE = "CAR_PAGE",
  INVENTORY_PAGE = "INVENTORY_PAGE",
  CUSTOMERS_PAGE = "CUSTOMERS_PAGE",
  LEADS_PAGE = "LEADS_PAGE"
}

export type Page = {
  title: string;
  name: PageName;
  link: string;
};
