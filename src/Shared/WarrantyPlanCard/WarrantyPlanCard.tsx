import Tippy from "@tippyjs/react";
import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledIcon } from "../../pages/SmartPick/components/PickUpSection/style";
import { Collapsed } from "../Collapsed/Collapsed";
import { CardContainer } from "./style";

const fix = require("../../assets/icons/fix.png");
const renew = require("../../assets/icons/renew.png");
const view = require("../../assets/icons/view.png");
const person = require("../../assets/icons/person.png");

interface IWarrantyPlanCard {
  isWarranty?: boolean;
  viewItem: ReactElement<any, any>;
}
export const WarrantyPlanCard: React.FC<IWarrantyPlanCard> = ({
  viewItem,
  children,
  isWarranty = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <CardContainer>
        {children}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "30%",
            height: "80%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Tippy content={`Renew ${isWarranty ? "Warranty" : "Plan"}`}>
              <StyledIcon src={renew} />
            </Tippy>
            {isWarranty && (
              <Tippy content="Fix">
                <StyledIcon src={fix} />
              </Tippy>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Tippy content="Delegate">
              <StyledIcon src={person} onClick={() => navigate("/family")} />
            </Tippy>
            <Tippy
              content={`View ${isWarranty ? "Warranty" : "plan contract"}`}
            >
              <StyledIcon
                src={view}
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              />
            </Tippy>
          </div>
        </div>
      </CardContainer>
      <Collapsed isOpen={isOpen} viewItem={viewItem} />
    </>
  );
};
