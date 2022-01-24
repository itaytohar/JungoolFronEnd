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
      memberType: "Father" | "Daughter" | "Son" | "Mother";
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
    <PreviewLayout header="FAMILY TASKS" bgc="white">
      {family ? (
        <GridContainer>
          {family.community.map(
            ({ customerID, memberType, ...memberProps }) => {
              let url;
              switch (memberType) {
                case "Father":
                  url = "father";
                  break;
                case "Son":
                  url = "son-" + Math.floor(Math.random() * 3);
                  break;
                case "Daughter":
                  url = "mother";
                  break;
                case "Mother":
                  url = "mother";
                  break;
              }
              return <MemberCard url={url} key={customerID} {...memberProps} />;
            }
          )}
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
