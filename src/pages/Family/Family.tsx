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
let members: string[] = [];

export const Family: React.FC = () => {
  type Member = {
    customerID: string;
    fullName: string;
    numberOfTasks: string;
    memberType: "Father" | "Daughter" | "Son" | "Mother";
    url: string;
  };

  const [family, setFamily] = useState<Member[] | null>(null);
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
      if (!isMounted) return;
      members = [];
      const { community } = res.data;
      community.map((member: Member) => {
          let url;
          let imageCode = (+member.customerID % 7);
        switch (member.memberType) {
            case "Father":
                url = "man" + imageCode;
            break;
            case "Son":
                url = "boy" + imageCode;
            break;
          case "Daughter":
                url = "girl" + imageCode;
            break;
          case "Mother":
                url = "woman" + imageCode;
            break;
        }
        member.url = url;
        members.push(url);
      });
      setFamily(community);
    });

    return () => {
      isMounted = false;
    };
  }, [customer]);

  return family ? (
      <PreviewLayout header="FAMILY TASKS" bgc="white" isFamily>
      <GridContainer>
        {family.map(({ customerID, ...memberProps }) => {
          return <MemberCard key={customerID} {...memberProps} />;
        })}
      </GridContainer>
      <StyledFooterImage>
        <StyledMapImage src={networkMap} />
        {members.map((member, idx) => {
          return (
            <MemberMap
              top={Math.random() * 80 + 10}
              right={Math.random() * 80 + 10}
              key={idx}
              src={require(`../../assets/images/family/${member}.png`)}
            />
          );
        })}
      </StyledFooterImage>
    </PreviewLayout>
  ) : (
    <Loader />
  );
}; 
