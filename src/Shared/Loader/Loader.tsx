import { SyncLoader } from "react-spinners";
import { useTheme } from "styled-components";
import { ThemeType } from "../../global-styles/theme";
import { LoaderContainer } from "./style";

export const Loader: React.FC = () => {
  const theme = useTheme() as ThemeType;

  return (
    <LoaderContainer>
      <SyncLoader size={30} color={theme.colors.loaderColor} />
    </LoaderContainer>
  );
};
