import { useRoutes } from "react-router-dom";
import { Main } from "../components/layouts/Main";
import { DetailFilm } from "../pages/Detail/DetailFilm";
import { Home } from "../pages/Home/Home";

export const Routers = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "detail/:idFilm",
          element: <DetailFilm />,
        },
      ],
    },
  ]);
  return routing;
};

export default Routers;
