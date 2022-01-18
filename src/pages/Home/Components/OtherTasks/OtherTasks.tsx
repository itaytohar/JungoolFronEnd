import { useState } from "react";
import { Collapsed } from "../../../../Shared/Collapsed/Collapsed";
import { StyledIcon } from "../../../SmartPick/components/CheckedBox/style";
import {
  StyledArrow,
  StyledButton,
  StyledContainer,
  StyledFillSection,
  StyledTextArea,
} from "./style";
const arrow = require("../../../../assets/icons/arrow.png");

export const OtherTasks: React.FC<{
  isOpen: boolean;
  toggle: () => any;
  onSave: (textValue: string) => any;
}> = ({ isOpen, toggle, onSave }) => {
  const [textValue, setTextValue] = useState("");

  return (
    <>
      <StyledContainer onClick={() => toggle()}>
        <h1>Other Tasks</h1>
        <StyledArrow isOpen={isOpen} src={arrow} />
      </StyledContainer>
      <Collapsed
        type="full"
        isOpen={isOpen}
        viewItem={
          <StyledFillSection>
            <StyledTextArea
              value={textValue}
              placeholder="Paste here any other task you have..."
              onChange={(e) => setTextValue(e.target.value)}
            />
            <StyledButton
              onClick={() => {
                onSave(textValue);
                setTextValue("");
              }}
            >
              Save
            </StyledButton>
          </StyledFillSection>
        }
      ></Collapsed>
    </>
  );
};
