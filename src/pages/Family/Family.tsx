import axios from "axios";
import { useEffect, useState } from "react";
import { useGetCustomer } from "../../hooks/useGetCustomer";
import { Loader } from "../../Shared/Loader/Loader";
import { PreviewLayout } from "../../Shared/PreviewLayout/PreviewLayout";
import { communityURL } from "../../varaibles";
import { MemberCard } from "./components/MemberCard/MemberCard";
import {
  GridContainer,
  MemberMap,
  StyledFooterImage,
  StyledMapImage,
} from "./style";
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
  const members: string[] = [];
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
      isMounted && setTimeout(() => setFamily(res.data), 1000);
    });

    return () => {
      isMounted = false;
    };
  }, [customer]);

  return family ? (
    <PreviewLayout header="FAMILY TASKS" bgc="white">
      <GridContainer>
        {family.community.map(({ customerID, memberType, ...memberProps }) => {
          let url: string;
          switch (memberType) {
            case "Father":
              url = "father";
              break;
            case "Son":
              url = "son-" + Math.floor(Math.random() * 2);
              break;
            case "Daughter":
              url = "daughter-" + Math.floor(Math.random() * 3);
              break;
            case "Mother":
              url = "mother";
              break;
          }
          members.push(url);
          return <MemberCard url={url} key={customerID} {...memberProps} />;
        })}
      </GridContainer>
      <StyledFooterImage>
        <StyledMapImage src={networkMap} />
        {members.map((member, idx) => (
          <MemberMap
            top={Math.random() * 80 + 10}
            right={Math.random() * 80 + 10}
            key={idx}
            src={require(`../../assets/images/family/${member}.png`)}
          />
        ))}
      </StyledFooterImage>
    </PreviewLayout>
  ) : (
    <Loader />
  );
};
