import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { useTheme } from "styled-components";
import { ThemeType } from "../../global-styles/theme";
import { Section } from "./Components/Section/Section";
import {
  HeaderContainer,
  LoaderContainer,
  MainLayout,
  StyledHeader,
} from "./style";
const URL =
  "https://prod-02.westeurope.logic.azure.com:443/workflows/b858059835ba42a893f439699b522291/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=fQGHCyzr2BYw-cQ3XZS_tjJ4XNVeD93aNPVfMV478T4";

export const Home: React.FC = () => {
  interface ISmartPick {
    allPackages: string;
    bestPickingDate: string;
    insightID: string;
    insightType: "smartPickup";
    pickPackages: string;
    pickingAddress: string;
  }

  interface IPlanRenewal {
    insightID: string;
    insightType: "planRenewal";
    plansCount: string;
    renewalCount: string;
  }
  interface IWarrantyExpiration {
    expiredCount: string;
    insightID: string;
    insightType: "warrantyExpiration";
    warrantyCount: string;
  }

  const [smartPick, setSmartPick] = useState<ISmartPick | null>(null);
  const [planRenewal, setPlanRenewal] = useState<IPlanRenewal | null>(null);
  const [warrantyExpiration, setWarrantyExpiration] =
    useState<IWarrantyExpiration | null>(null);
  let params = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: URL,
      params: {
        customerID: params.customerID,
      },
    }).then((res) => {
      const { insights } = res.data;
      insights.forEach((section: any) => {
        switch (section.insightType) {
          case "smartPickup":
            setSmartPick(section);
            break;
          case "planRenewal":
            setPlanRenewal(section);
            break;
          case "warrantyExpiration":
            setWarrantyExpiration(section);
            break;
        }
      });
    });
  }, [params]);

  const createData = useCallback(
    (totalVal, completedVal) => [
      { name: "unfinished", value: totalVal - completedVal },
      { name: "finished", value: Number(completedVal) },
    ],
    []
  );

  const theme = useTheme() as ThemeType;

  return smartPick && warrantyExpiration && planRenewal ? (
    <MainLayout>
      <HeaderContainer backgroundColor={theme.colors.headerBackground}>
        <StyledHeader color={theme.colors.headerColor}>My Jungool</StyledHeader>
      </HeaderContainer>
      <Section
        navigateTo={`/smartpick/${smartPick.insightID}`}
        backgroundColor={theme.colors.smartPick.backgroundColor}
        graphProps={{
          data: createData(smartPick.allPackages, smartPick.pickPackages),
          colors: theme.colors.smartPick.graphColors,
        }}
        contentHeader={{
          text: "smart picks",
          color: theme.colors.smartPick.headerColor,
        }}
        content={{
          text: `${smartPick.bestPickingDate} will be the ideal time to pick ${smartPick.pickPackages} OUT of ${smartPick.allPackages} packages. \n${smartPick.pickingAddress}.`,
          color: theme.colors.smartPick.contentColor,
        }}
      />
      <Section
        navigateTo={`/plan/${planRenewal.insightID}`}
        reversed
        backgroundColor={theme.colors.renewalPlans.backgroundColor}
        graphProps={{
          data: createData(planRenewal.plansCount, planRenewal.renewalCount),
          colors: theme.colors.renewalPlans.graphColors,
        }}
        contentHeader={{
          text: "plan renewal",
          color: theme.colors.renewalPlans.headerColor,
        }}
        content={{
          text: `${planRenewal.renewalCount} plans are waiting this month for renewal.`,
          color: theme.colors.renewalPlans.contentColor,
        }}
      />
      <Section
        navigateTo={`/warranty/${warrantyExpiration.insightID}`}
        backgroundColor={theme.colors.warranty.backgroundColor}
        graphProps={{
          data: createData(
            warrantyExpiration.warrantyCount,
            warrantyExpiration.expiredCount
          ),
          colors: theme.colors.warranty.graphColors,
        }}
        contentHeader={{
          text: "warranty expiration",
          color: theme.colors.warranty.headerColor,
        }}
        content={{
          text: `${warrantyExpiration.expiredCount} upcoming expirations in the next month.`,
          color: theme.colors.warranty.contentColor,
        }}
      />
    </MainLayout>
  ) : (
    <LoaderContainer>
      <SyncLoader size={30} color={theme.colors.loaderColor} />
    </LoaderContainer>
  );
};
