import { useRoutes } from "react-router-dom";
import { Login } from "../Login/index";
import { CreateAccount } from "../CreateAccount/index";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/Log-in", element: <Login /> },
    { path: "/Create-Account", element: <CreateAccount /> },
  ]);

  return routes;
};

export { AppRoutes };
