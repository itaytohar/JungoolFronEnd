import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { ThemeType } from "../../global-styles/theme";
import { Loader } from "../../Shared/Loader/Loader";
import { PreviewLayout } from "../../Shared/PreviewLayout/PreviewLayout";
import { List } from "../../Shared/CardTemplate/style";
import { insightURL } from "../../varaibles";
import { Card } from "./components/Card";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { CustomerContext } from "../../CustomerContext";

export const Warranty: React.FC = () => {
  interface IWarranty {
    insightID: string;
    customerID: string;
    warranties: {
      EndDate: string;
      model: string;
      url: string;
      warrantyID: string;
      warrantyType: string;
      serviceProvider: string;
    }[];
  }

  const [warranty, setWarranty] = useState<IWarranty | null>(null);
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
      isMounted && setWarranty(res.data);
    });

      if (warranty && warranty.customerID) {

      setCustomer(warranty.customerID);
      setStorageCustomer(warranty.customerID);
      }
   return () => {
      isMounted = false;
    };
  }, [params, warranty, setCustomer, setStorageCustomer]);

  return  warranty ? (
    <PreviewLayout header="my warranty"  customer={customer}>
      <List>
        {  warranty.warranties.map(({ warrantyID, ...warrantyProps }) => (
            <Card key={warrantyID} {...warrantyProps} />
          ))}
      </List>
    </PreviewLayout>
        ) : (
          <Loader />
        )
};
