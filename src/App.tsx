import { routes } from "./routes";
import { Routes, Route } from "react-router-dom";
import { CustomerContext } from "./CustomerContext";
import { useEffect, useMemo, useState } from "react";
import ReactGA from "react-ga";
ReactGA.initialize("UA-218984193-1");

const App: React.FC = () => {
  const [customer, setCustomer] = useState<string | null>(null);

  const providerVal = useMemo(
    () => ({ customer, setCustomer }),
    [customer, setCustomer]
  );
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <CustomerContext.Provider value={providerVal}>
      <Routes>
        {routes.map(({ path, element }, idx) => (
          <Route path={path} element={element} key={idx} />
        ))}
      </Routes>
    </CustomerContext.Provider>
  );
};

export default App;
