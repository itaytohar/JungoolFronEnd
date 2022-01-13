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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 100%;
}

#root{
  height: 100%;
  width: 100%;

}


`;
