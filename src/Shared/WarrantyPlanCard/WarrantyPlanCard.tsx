import { Children, ReactElement, useState } from "react";
import {
  CardContainer,
  Collapsed,
  CollapsedParent,
  StyledButton,
} from "./style";

interface IWarrantyPlanCard {
  viewItem: ReactElement<any, any>;
}
export const WarrantyPlanCard: React.FC<IWarrantyPlanCard> = ({
  viewItem,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CardContainer>
        {children}
        <StyledButton onClick={() => setIsOpen((isOpen) => !isOpen)} />
      </CardContainer>
      <CollapsedParent isOpen={isOpen}>
        <Collapsed>{viewItem}</Collapsed>
      </CollapsedParent>
    </>
  );
};
