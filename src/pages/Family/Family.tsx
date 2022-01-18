import axios from "axios";
import { useEffect, useState } from "react";
import { useGetCustomer } from "../../hooks/useGetCustomer";
import { Loader } from "../../Shared/Loader/Loader";
import { PreviewLayout } from "../../Shared/PreviewLayout/PreviewLayout";
import { MemberCard } from "./components/MemberCard/MemberCard";
import { GridContainer, StyledFooterImage, StyledMapImage } from "./style";
const networkMap = require("../../assets/images/network-map.png");

const URL =
  "https://prod-163.westeurope.logic.azure.com:443/workflows/a803c2d3fc88421b8aab36caa0da1d25/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Cp5T1g-lrgEB7zM2G6hIN0EXJga2EjQTu-HT0yU1Ws4";

export const Family: React.FC = () => {
  interface IFamily {
    community: {
      customerID: string;
      fullName: string;
      numberOfTasks: string;
    }[];
  }

  const [family, setFamily] = useState<IFamily | null>(null);
  const { customer } = useGetCustomer();

  useEffect(() => {
    let isMounted = true;
    if (!customer) return;
    axios({
      method: "GET",
      url: URL,
      params: {
        customerID: customer,
      },
    }).then((res) => {
      isMounted && setFamily(res.data);
    });

    return () => {
      isMounted = false;
    };
  }, [customer]);

  return (
    <PreviewLayout backgroundColor="white" header="FAMILY TASKS">
      {family ? (
        <GridContainer>
          {family.community.map(({ customerID, ...memberProps }) => (
            <MemberCard key={customerID} {...memberProps} />
          ))}
        </GridContainer>
      ) : (
        <Loader />
      )}
      <StyledFooterImage>
        <StyledMapImage src={networkMap} />
      </StyledFooterImage>
    </PreviewLayout>
  );
};
