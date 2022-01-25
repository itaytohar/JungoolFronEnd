import { SyncLoader } from "react-spinners";
import { useTheme } from "styled-components";
import { ThemeType } from "../../global-styles/theme";
import { Container, LoaderCircle, LoaderContainer } from "./style";

export const Loader: React.FC = () => {
  const theme = useTheme() as ThemeType;

  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const circleVariant1 = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  };
  const circleVariant2 = {
    start: {
      y: "0px",
    },
    end: {
      y: "15px",
    },
  };

  const loadingCircleTranstion = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut",
  };

  return (
    <LoaderContainer>
      <Container variants={containerVariants} initial="start" animate="end">
        <LoaderCircle
          variants={circleVariant1}
          transition={loadingCircleTranstion}
          size="md"
          color="#FBB03B"
        />
        <LoaderCircle
          variants={circleVariant1}
          transition={loadingCircleTranstion}
          size="md"
          color="#76E7EB"
        />
        <LoaderCircle
          variants={circleVariant2}
          transition={loadingCircleTranstion}
          size="lg"
          color="white"
        />
        <LoaderCircle
          variants={circleVariant1}
          transition={loadingCircleTranstion}
          size="md"
          color="#D8DD75"
        />
        <LoaderCircle
          variants={circleVariant1}
          transition={loadingCircleTranstion}
          size="xs"
          color="#49C4A8"
        />
      </Container>
    </LoaderContainer>
  );
};
