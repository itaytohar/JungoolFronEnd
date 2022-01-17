import { createContext } from "react";

type Context = {
  customer: null | string | undefined;
  setCustomer: React.Dispatch<React.SetStateAction<null | string>>;
};

export const CustomerContext = createContext({} as Context);
