import axios from "axios";
import dayjs from "dayjs";
import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { CustomerContext } from "../../CustomerContext";
import { ThemeType } from "../../global-styles/theme";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Loader } from "../../Shared/Loader/Loader";
import { PreviewLayout } from "../../Shared/PreviewLayout/PreviewLayout";
import { addOtherTaskURL, homeURL } from "../../varaibles";
import { OtherTasks } from "./Components/OtherTasks/OtherTasks";
import { Section } from "./Components/Section/Section";
import { SectionsContainer } from "./style";
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
  const [isOtherTasksOpen, setIsOtherTasksOpen] = useState(false);
  const { customer, setCustomer } = useContext(CustomerContext);
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
      url: homeURL,
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

  const onSaveOtherTask = (value: string) => {
    setIsOtherTasksOpen(false);
    if (!value) return;
    axios({
      method: "POST",
      url: addOtherTaskURL,
      data: {
        CustomerID: customer,
        TaskData: value,
      },
    });
  };

  return !loading ? (
    <PreviewLayout header="MY Jungool" isHome>
      <>
        <SectionsContainer isOtherTasksOpen={isOtherTasksOpen}>
          <Section
            navigateTo={smartPick && `/smartpick/${smartPick.insightID}`}
            backgroundColor={theme.colors.smartPick.backgroundColor}
            graphProps={{
              data: smartPick
                ? createData(smartPick.allPackages, smartPick.pickPackages)
                : createData("0", "0"),
              colors: theme.colors.smartPick.graphColors,
            }}
            firstContent={{
              text: "packages",
              subHeader: "smart pick",
              color: theme.colors.smartPick.headerColor,
            }}
            secondContent={{
              text: smartPick
                ? `will be the ideal time to pick ${smartPick.pickPackages} OUT of ${smartPick.allPackages} packages. \n${smartPick.pickingAddress}.`
                : `No Packages yet`,
              subHeader: smartPick
                ? dayjs(smartPick.bestPickingDate).format("dddd YY/MM")
                : ``,
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
            firstContent={{
              subHeader: "plan renewal",
              text: "Subsciptions",
              color: theme.colors.renewalPlans.headerColor,
            }}
            secondContent={{
              subHeader: ``,
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
            firstContent={{
              subHeader: "warranty expiration",
              text: "",
              color: theme.colors.warranty.headerColor,
            }}
            secondContent={{
              text: warrantyExpiration
                ? `${warrantyExpiration.expiredCount} upcoming expirations in the next month.`
                : "No Warranties yet",
              subHeader: "",
              color: theme.colors.warranty.contentColor,
            }}
          />
        </SectionsContainer>
        <OtherTasks
          onSave={(val) => {
            onSaveOtherTask(val);
          }}
          isOpen={isOtherTasksOpen}
          toggle={() => setIsOtherTasksOpen((prev) => !prev)}
        />
      </>
    </PreviewLayout>
  ) : (
    <Loader />
  );
};
