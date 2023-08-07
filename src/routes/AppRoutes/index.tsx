import { Suspense, lazy } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import ErrorBoundary from "components/ErrorBoundary";
import PrivateRoute from "routes/PrivateRoute";

const HomePage = lazy(() => import("features/home/Home"));
const InventoryPage = lazy(() => import("features/inventory/Inventory"));
const CarPage = lazy(() => import("features/inventory/Car"));
const TopCarsPage = lazy(() => import("features/topCars/TopCars"));
const LeadsPage = lazy(() => import("features/leads/Leads"));
const CustomersPage = lazy(() => import("features/customers/Customers"));
const PageNotFound = lazy(() => import("routes/PageNotFound"));

export const ROUTER_PATH = {
  HOME: "/",
  INVENTORY: "/inventory",
  CAR: "/inventory/:carId",
  TOP_CARS: "/top_cars",
  LEADS: "/leads",
  CUSTOMERS: "/customers",
  NOT_FOUND: "*"
};

const AppRoutes = () => {
  const location = useLocation();

  const routes = useRoutes([
    {
      path: ROUTER_PATH.HOME,
      element: <HomePage />
    },
    {
      path: ROUTER_PATH.INVENTORY,
      element: <PrivateRoute component={<InventoryPage />} />
    },
    {
      path: ROUTER_PATH.CAR,
      element: <PrivateRoute component={<CarPage />} />
    },
    {
      path: ROUTER_PATH.TOP_CARS,
      element: <PrivateRoute component={<TopCarsPage />} />
    },
    {
      path: ROUTER_PATH.LEADS,
      element: <PrivateRoute component={<LeadsPage />} />
    },
    {
      path: ROUTER_PATH.CUSTOMERS,
      element: <PrivateRoute component={<CustomersPage />} />
    },
    {
      path: ROUTER_PATH.NOT_FOUND,
      element: <PageNotFound />
    }
  ]);

  return (
    <Suspense>
      <ErrorBoundary key={location.pathname}>{routes}</ErrorBoundary>
    </Suspense>
  );
};

export default AppRoutes;
