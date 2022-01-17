import { useContext, useEffect } from "react";
import { CustomerContext } from "../CustomerContext";
import { useLocalStorage } from "./useLocalStorage";

export const useGetCustomer = () => {
  const { customer, setCustomer } = useContext(CustomerContext);
  const [storageCustomer, setStorageCustomer] = useLocalStorage(
    "customer",
    null
  );

  useEffect(() => {
    if (!customer) setCustomer(storageCustomer);
    else setStorageCustomer(customer);
  }, [customer, setCustomer, storageCustomer, setStorageCustomer]);

  return { customer, setCustomer };
};
