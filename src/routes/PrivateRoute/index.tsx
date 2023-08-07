import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import UnauthorizedErrorPage from "routes/UnauthorizedErrorPage";

type Props = {
  component: JSX.Element;
};

const PrivateRoute = ({ component }: Props) => {
  // get the user info like: isUnauthorized, isInitialized, isUnauthenticated, user etc.
  const isInitialized = true;
  const isUnauthorized = false;

  if (!isInitialized) {
    return <CircularProgress />;
  }

  if (isUnauthorized) {
    return <UnauthorizedErrorPage />;
  }

  return <Suspense fallback={<CircularProgress />}>{component}</Suspense>;
};

export default PrivateRoute;
