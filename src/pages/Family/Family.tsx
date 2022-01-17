import axios from "axios";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { ThemeType } from "../../global-styles/theme";
import { useGetCustomer } from "../../hooks/useGetCustomer";
import { PreviewLayout } from "../../Shared/PreviewLayout/PreviewLayout";

const URL =
  "https://prod-163.westeurope.logic.azure.com:443/workflows/a803c2d3fc88421b8aab36caa0da1d25/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Cp5T1g-lrgEB7zM2G6hIN0EXJga2EjQTu-HT0yU1Ws4";

export const Family: React.FC = () => {
  interface IFamily {
    community: {
      customerID: string;
      fullName: string;
      numberOfTasks: string;
    }[];
  }

  const [family, setFamily] = useState<IFamily | null>(null);
  const { customer } = useGetCustomer();

  useEffect(() => {
    let isMounted = true;
    if (!customer) return;
    axios({
      method: "GET",
      url: URL,
      params: {
        customerID: customer,
      },
    }).then((res) => {
      isMounted && setFamily(res.data);
    });

    return () => {
      isMounted = false;
    };
  }, [customer]);

  const theme = useTheme() as ThemeType;

  return (
    <PreviewLayout
      backgroundColor={theme.colors.previewBackground}
      header="FAMILY TASKS"
    >
      {family && <pre>{JSON.stringify(family, null, 2)}</pre>}
    </PreviewLayout>
  );
};
