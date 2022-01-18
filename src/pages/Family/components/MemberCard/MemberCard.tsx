import { StyledIcon } from "../../../SmartPick/components/PickUpSection/style";
import { Container, ImgContainer, StyledLabel, StyledNumber } from "./style";
const user = require("../../../../assets/icons/user.png");
const task = require("../../../../assets/icons/task.png");

type MemberCardProps = {
  fullName: string;
  numberOfTasks: string;
};

export const MemberCard: React.FC<MemberCardProps> = ({
  fullName,
  numberOfTasks,
}) => {
  return (
    <Container>
      <ImgContainer>
        <StyledIcon src={user} style={{ marginBottom: "24px" }} />
      </ImgContainer>
      <StyledLabel>{fullName}</StyledLabel>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "70%",
        }}
      >
        <StyledNumber>{numberOfTasks}</StyledNumber>
        <StyledIcon src={task} />
      </div>
    </Container>
  );
};
