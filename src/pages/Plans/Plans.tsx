import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../Shared/Loader/Loader";
import { PreviewLayout } from "../../Shared/PreviewLayout/PreviewLayout";
import { List } from "../../Shared/CardTemplate/style";
import { insightURL } from "../../varaibles";
import { Card } from "./components/Card";

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

    return () => {
      isMounted = false;
    };
  }, [params]);


  return (
    <PreviewLayout header="my plans">
      <List>
        {plans ? (
          plans.plans.map(({ planID, ...planProps }) => (
            <Card key={planID} {...planProps} />
          ))
        ) : (
          <Loader />
        )}
      </List>
    </PreviewLayout>
  );
};
