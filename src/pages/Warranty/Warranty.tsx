import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { ThemeType } from "../../global-styles/theme";
import { Loader } from "../../Shared/Loader/Loader";
import { PreviewLayout } from "../../Shared/PreviewLayout/PreviewLayout";
import { List } from "../../Shared/WarrantyPlanCard/style";
import { insightURL } from "../../varaibles";
import { Card } from "./components/Card";

export const Warranty: React.FC = () => {
  interface IWarranty {
    insightID: string;
    warranties: {
      EndDate: string;
      model: string;
      url: string;
      warrantyID: string;
      warrantyType: string;
    }[];
  }

  const [warranty, setWarranty] = useState<IWarranty | null>(null);

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
    return () => {
      isMounted = false;
    };
  }, [params]);

  return (
    <PreviewLayout header="my warranty">
      <List>
        {warranty ? (
          warranty.warranties.map(({ warrantyID, ...warrantyProps }) => (
            <Card key={warrantyID} {...warrantyProps} />
          ))
        ) : (
          <Loader />
        )}
      </List>
    </PreviewLayout>
  );
};
