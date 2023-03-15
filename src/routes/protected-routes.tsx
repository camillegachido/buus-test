import Dashboard from "~/layouts/dashboard"
import { Embarks } from "~/pages"

const protectedRoutes = {
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    {
      path: "",
      element: <Embarks />,
    }
  ],
}

export default protectedRoutes