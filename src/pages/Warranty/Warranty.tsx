import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { ThemeType } from "../../global-styles/theme";
import { PreviewLayout } from "../../Shared/PreviewLayout/PreviewLayout";
import { CardContainer } from "../../Shared/WarrantyPlanCard/style";
import { WarrantyPlanCard } from "../../Shared/WarrantyPlanCard/WarrantyPlanCard";

const URL =
  "https://prod-178.westeurope.logic.azure.com/workflows/9a28197a41c444ae8b73565d01d48fa7/triggers/manual/paths/invoke/?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9WPmrKKtsAg7yptTjJwCiZmvWYPrDHkUV7RMZ49MUp0";

export const Warranty: React.FC = () => {
  const [Warranty, setWarranty] = useState();

  const params = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: URL,
      params: {
        insightID: params.insightID,
      },
    }).then((res) => {
      console.log(res.data);

      setWarranty(res.data);
    });
  }, [params]);

  const theme = useTheme() as ThemeType;

  return (
    <PreviewLayout
      header="Warranty"
      backgroundColor={theme.colors.smartPick.backgroundColor}
    ></PreviewLayout>
  );
};
