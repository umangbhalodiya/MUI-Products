import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./Home";
import { Protectedroute } from "./protectedroute";
import { DefaultPage } from "../components/DefaultPage/DefaultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/products" replace />,
  },

  {
    path: "/products",
    element: (
      // <Protectedroute>
        // <DefaultPage>
          <Home />
        // </DefaultPage>
      // </Protectedroute>
    ),
  },
]);

export default router;
