import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../Shared/Loader/Loader";
import { PreviewLayout } from "../../Shared/PreviewLayout/PreviewLayout";
import { List } from "../../Shared/CardTemplate/style";
import { insightURL } from "../../varaibles";
import { Card } from "./components/Card";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { CustomerContext } from "../../CustomerContext";

export const Plans: React.FC = () => {
  interface IPlans {
    insightID: string;
    customerID: string;
    plans: {
      EndDate: string;
      monthlyCost: string;
      planID: string;
      serviceProvider: string;
      url: string;
    }[];
  }

  const [plans, setPlans] = useState<IPlans | null>(null);
  const { customer, setCustomer } = useContext(CustomerContext);
  const [, setStorageCustomer] = useLocalStorage("customer", null);

  const params = useParams();

  useEffect(() => {
    let isMounted = true;
    axios({
      method: "GET",
      url: insightURL,
      params: {
        insightID: params.insightID,
      },
    }).then((res) => {
      if (!isMounted) return;
      setPlans(res.data);
    });

      if (plans && plans.customerID) {
        setCustomer(plans.customerID);
        setStorageCustomer(plans.customerID);
      }

    return () => {
      isMounted = false;
    };
  }, [params, plans, setCustomer, setStorageCustomer]);

  return plans ? (
    <PreviewLayout header="my plans" customer={customer}>
      <List>
        {plans.plans.map(({ planID, ...planProps }) => (
          <Card key={planID} {...planProps} />
        ))}
      </List>
    </PreviewLayout>
  ) : (
    <Loader />
  );
};
