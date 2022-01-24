export const theme = {
  colors: {
    innerText: "#28AE68",
    smartPick: {
      backgroundColor: "rgb(247,151,68,5%)",
      headerColor: "#F8AF6F",
      contentColor: "#49C4A8",
      graphColors: ["#33D6AF", "#F8AF6F"],
    },
    renewalPlans: {
      backgroundColor: "rgb(118,231,235,7%)",
      headerColor: "#76E7EB",
      contentColor: "#49C4A8",
      graphColors: ["#33D6AF", "#76E7EB"],
    },
    warranty: {
      backgroundColor: "rgb(229,234,117,5%)",
      headerColor: "#D9E030",
      contentColor: "#49C4A8",
      graphColors: ["#33D6AF", "#D9E030"],
    },
    loaderColor: "#33D6AF",
    divider: "#2699FB",
    addButton: "#33D6AF",
    previewHeaderBackground: "#33D6AF",
    previewHeaderContent: "white",
  },
};

export type ThemeType = typeof theme;
