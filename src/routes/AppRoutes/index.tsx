import ErrorBoundary from "layout/ErrorBoundary";
import { Suspense, lazy } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import PrivateRoute from "routes/PrivateRoute";

const HomePage = lazy(() => import("features/home/HomePage"));
const InventoryPage = lazy(() => import("features/inventory/InventoryPage"));
const CarPage = lazy(() => import("features/inventory/CarPage"));
const LeadsPage = lazy(() => import("features/leads/LeadsPage"));
const CustomersPage = lazy(() => import("features/customers/CustomersPage"));
const PageNotFound = lazy(() => import("routes/PageNotFound"));

export const ROUTER_PATH = {
  HOME: "/",
  INVENTORY: "/inventory",
  CAR: "/inventory/:carId",
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
