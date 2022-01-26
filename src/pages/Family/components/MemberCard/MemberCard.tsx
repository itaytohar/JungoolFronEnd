import { StyledIcon } from "../../../SmartPick/components/PickUpSection/style";
import {
  Container,
  Image,
  ImgContainer,
  NumberContainer,
  StyledLabel,
  StyledNumber,
} from "./style";
import task from "../../../../assets/icons/task.svg";

type MemberCardProps = {
  fullName: string;
  numberOfTasks: string;
  url: string;
};

export const MemberCard: React.FC<MemberCardProps> = ({
  fullName,
  url,
  numberOfTasks,
}) => {
  return (
    <Container>
      <StyledLabel>{fullName}</StyledLabel>
      <ImgContainer>
        <Image src={require(`../../../../assets/images/family/${url}.png`)} />
        <NumberContainer>
          <StyledNumber>{numberOfTasks}</StyledNumber>
        </NumberContainer>
      </ImgContainer>
    </Container>
  );
};
