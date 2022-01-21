import { useState } from "react";
import { Collapsed } from "../../../../Shared/Collapsed/Collapsed";
import {
  StyledArrow,
  StyledButton,
  StyledButtonText,
  StyledContainer,
  StyledFillSection,
  StyledOpenButton,
  StyledTextArea,
} from "./style";
import arrow from "../../../../assets/icons/arrow.svg";

export const OtherTasks: React.FC<{
  isOpen: boolean;
  toggle: () => any;
  onSave: (textValue: string) => any;
}> = ({ isOpen, toggle, onSave }) => {
  const [textValue, setTextValue] = useState("");

  return (
    <>
      <StyledContainer onClick={() => toggle()}>
        <StyledOpenButton>
          <StyledArrow isOpen={isOpen} src={arrow} />
          <StyledButtonText>Other Tasks</StyledButtonText>
        </StyledOpenButton>
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
