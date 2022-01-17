import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { ThemeType } from "../../global-styles/theme";
import { Loader } from "../../Shared/Loader/Loader";
import { PreviewLayout } from "../../Shared/PreviewLayout/PreviewLayout";
import { List } from "../../Shared/WarrantyPlanCard/style";
import { Card } from "./components/Card";

const URL =
  "https://prod-178.westeurope.logic.azure.com/workflows/9a28197a41c444ae8b73565d01d48fa7/triggers/manual/paths/invoke/?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9WPmrKKtsAg7yptTjJwCiZmvWYPrDHkUV7RMZ49MUp0";

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
      url: URL,
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

  const theme = useTheme() as ThemeType;

  return (
    <PreviewLayout
      header="Warranty"
      backgroundColor={theme.colors.previewBackground}
    >
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
