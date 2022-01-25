import { Family } from "./pages/Family/Family";
import { Home } from "./pages/Home/Home";
import { Plans } from "./pages/Plans/Plans";
import { SmartPick } from "./pages/SmartPick/SmartPick";
import { Warranty } from "./pages/Warranty/Warranty";

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
  {
    path: "warranty/:insightID",
    element: <Warranty />,
  },
  {
    path: "plan/:insightID",
    element: <Plans />,
  },
  {
    path: "family",
    element: <Family />,
  },
];
