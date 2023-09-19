import { useRoutes } from "react-router-dom";
import { Login } from "../Login/index";
import { CreateAccount } from "../CreateAccount/index";
import { MyAccount } from "../My Account/index";
import { Home } from "../Home/index";

const AppRoutes = () => {
  let routes = useRoutes([
    { path:"/", element: <Home /> },
    { path: "/Log-in", element: <Login /> },
    { path: "/Create-Account", element: <CreateAccount /> },
    { path:"/My-Account", element: <MyAccount /> }
  ]);

  return routes;
};

export { AppRoutes };
