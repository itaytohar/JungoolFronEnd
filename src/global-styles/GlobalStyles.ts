import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

type ThemeType = typeof theme;

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`


*{
box-sizing: border-box;
  margin: 0;
}


html{
  height: 100%;
  width: 100%;

}
body {
  font-family:"Roboto";
  height: 100%;
}

#root{
  height: 100%;
  width: 100%;

}


`;
