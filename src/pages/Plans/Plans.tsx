import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { theme } from "../../global-styles/theme";
import { PreviewLayout } from "../../Shared/PreviewLayout/PreviewLayout";
import { WarrantyPlanCard } from "../../Shared/WarrantyPlanCard/WarrantyPlanCard";
import {
  StyledDetail,
  StyledDetailsContainer,
  StyledImage,
  StyledPropertyName,
  StyledPropertyValue,
  Wrapper,
} from "../SmartPick/components/PickUpSection/style";
import { Document, PlanList } from "./style";

const URL =
  "https://prod-178.westeurope.logic.azure.com/workflows/9a28197a41c444ae8b73565d01d48fa7/triggers/manual/paths/invoke/?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9WPmrKKtsAg7yptTjJwCiZmvWYPrDHkUV7RMZ49MUp0";

export const Plans: React.FC = () => {
  interface IPlans {
    insightID: string;
    plans: {
      EndDate: string;
      monthlyCost: string;
      planID: string;
      serviceProvider: string;
      url: string;
    }[];
  }

  const [plans, setPlans] = useState<IPlans | null>(null);

  const params = useParams();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  useEffect(() => {
    axios({
      method: "GET",
      url: URL,
      params: {
        insightID: params.insightID,
      },
    }).then((res) => {
      console.log(res.data);

      setPlans(res.data);
    });
  }, [params]);

  return (
    <PreviewLayout
      header="Plans"
      backgroundColor={theme.colors.smartPick.backgroundColor}
    >
      <PlanList>
        {plans &&
          plans.plans.map(
            ({ url, EndDate, monthlyCost, serviceProvider, planID }) => (
              <WarrantyPlanCard key={planID} viewItem={<Document src={url} />}>
                <StyledImage />
                <StyledDetailsContainer>
                  <StyledDetail>
                    <StyledPropertyName>Service Provider: </StyledPropertyName>
                    <StyledPropertyValue>{serviceProvider}</StyledPropertyValue>
                  </StyledDetail>
                  <StyledDetail>
                    <StyledPropertyName>Expiration Date: </StyledPropertyName>
                    <StyledPropertyValue>{EndDate}</StyledPropertyValue>
                  </StyledDetail>
                  <StyledDetail>
                    <StyledPropertyName>Monthly Cost: </StyledPropertyName>
                    <StyledPropertyValue>{monthlyCost}</StyledPropertyValue>
                  </StyledDetail>
                </StyledDetailsContainer>
              </WarrantyPlanCard>
            )
          )}
      </PlanList>
    </PreviewLayout>
  );
};
