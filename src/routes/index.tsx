import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "~/pages";
import protectedRoutes from "./protected-routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />
  },
  protectedRoutes
]);

export default router