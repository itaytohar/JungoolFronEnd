import axios from "axios";
import { useEffect, useState } from "react";
import { useGetCustomer } from "../../hooks/useGetCustomer";
import { Loader } from "../../Shared/Loader/Loader";
import { PreviewLayout } from "../../Shared/PreviewLayout/PreviewLayout";
import { communityURL } from "../../varaibles";
import { MemberCard } from "./components/MemberCard/MemberCard";
import { GridContainer, StyledFooterImage, StyledMapImage } from "./style";
const networkMap = require("../../assets/images/network-map.png");

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
      url: communityURL,
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
    <PreviewLayout header="FAMILY TASKS">
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
