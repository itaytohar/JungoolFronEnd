import { Home } from "./pages/Home/Home";
import { SmartPick } from "./pages/SmartPick/SmartPick";
type RouteProps = {
  path: string;
  element: JSX.Element;
};

export const routes: RouteProps[] = [
  {
    path: "home/:customerID",
    element: <Home />,
  },
  {
    path: "smartpick/:insightID",
    element: <SmartPick />,
  },
];
