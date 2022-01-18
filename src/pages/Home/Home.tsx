import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { CustomerContext } from "../../CustomerContext";
import { ThemeType } from "../../global-styles/theme";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Loader } from "../../Shared/Loader/Loader";
import { Section } from "./Components/Section/Section";
import { HeaderContainer, MainLayout, StyledHeader } from "./style";
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
  interface IEInsights {
    smartPick: ISmartPick | null;
    warrantyExpiration: IWarrantyExpiration | null;
    planRenewal: IPlanRenewal | null;
  }

  const [insights, setInsights] = useState<IEInsights>({
    smartPick: null,
    warrantyExpiration: null,
    planRenewal: null,
  });

  const [loading, setLoading] = useState(true);
  const { setCustomer } = useContext(CustomerContext);
  const [, setStorageCustomer] = useLocalStorage("customer", null);

  const params = useParams();

  useEffect(() => {
    if (!params.customerID) return;
    setCustomer(params.customerID);
    setStorageCustomer(params.customerID);
  }, [params, setCustomer, setStorageCustomer]);

  useEffect(() => {
    let isMounted = true;
    if (!params || !loading) return;
    axios({
      method: "GET",
      url: URL,
      params: {
        customerID: params.customerID,
      },
    }).then((res) => {
      if (!isMounted) return;
      const { insights } = res.data;
      const myInsights = {
        smartPick: null,
        warrantyExpiration: null,
        planRenewal: null,
      };
      insights.forEach((section: any) => {
        switch (section.insightType) {
          case "smartPickup":
            myInsights.smartPick = { ...section };
            break;
          case "planRenewal":
            myInsights.planRenewal = { ...section };
            break;
          case "warrantyExpiration":
            myInsights.warrantyExpiration = { ...section };
            break;
        }
      });
      setInsights(myInsights);
      setLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, [params, loading]);

  const createData = useCallback(
    (totalVal, completedVal) => [
      { name: "unfinished", value: totalVal - completedVal },
      { name: "finished", value: Number(completedVal) },
    ],
    []
  );

  const theme = useTheme() as ThemeType;
  const { smartPick, planRenewal, warrantyExpiration } = insights;

  return (
    <MainLayout>
      <HeaderContainer backgroundColor={theme.colors.headerBackground}>
        <StyledHeader color={theme.colors.headerColor}>My Jungool</StyledHeader>
      </HeaderContainer>
      {!loading ? (
        <>
          <Section
            navigateTo={smartPick && `/smartpick/${smartPick.insightID}`}
            backgroundColor={theme.colors.smartPick.backgroundColor}
            graphProps={{
              data: smartPick
                ? createData(smartPick.allPackages, smartPick.pickPackages)
                : createData("0", "0"),
              colors: theme.colors.smartPick.graphColors,
            }}
            contentHeader={{
              text: "smart picks",
              color: theme.colors.smartPick.headerColor,
            }}
            content={{
              text: smartPick
                ? `${smartPick.bestPickingDate} will be the ideal time to pick ${smartPick.pickPackages} OUT of ${smartPick.allPackages} packages. \n${smartPick.pickingAddress}.`
                : `No Packages yet`,
              color: theme.colors.smartPick.contentColor,
            }}
          />
          <Section
            navigateTo={planRenewal && `/plan/${planRenewal.insightID}`}
            reversed
            backgroundColor={theme.colors.renewalPlans.backgroundColor}
            graphProps={{
              data: planRenewal
                ? createData(planRenewal.plansCount, planRenewal.renewalCount)
                : createData("0", "0"),
              colors: theme.colors.renewalPlans.graphColors,
            }}
            contentHeader={{
              text: "plan renewal",
              color: theme.colors.renewalPlans.headerColor,
            }}
            content={{
              text: planRenewal
                ? `${planRenewal.renewalCount} plans are waiting this month for renewal.`
                : "No Plans yet",
              color: theme.colors.renewalPlans.contentColor,
            }}
          />
          <Section
            navigateTo={
              warrantyExpiration && `/warranty/${warrantyExpiration.insightID}`
            }
            backgroundColor={theme.colors.warranty.backgroundColor}
            graphProps={{
              data: warrantyExpiration
                ? createData(
                    warrantyExpiration.warrantyCount,
                    warrantyExpiration.expiredCount
                  )
                : createData("0", "0"),
              colors: theme.colors.warranty.graphColors,
            }}
            contentHeader={{
              text: "warranty expiration",
              color: theme.colors.warranty.headerColor,
            }}
            content={{
              text: warrantyExpiration
                ? `${warrantyExpiration.expiredCount} upcoming expirations in the next month.`
                : "No Warranties yet",
              color: theme.colors.warranty.contentColor,
            }}
          />
        </>
      ) : (
        <Loader />
      )}
    </MainLayout>
  );
};
