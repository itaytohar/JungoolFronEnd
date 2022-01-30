import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { ThemeType } from "../../global-styles/theme";
import { useGetCustomer } from "../../hooks/useGetCustomer";
import { Loader } from "../../Shared/Loader/Loader";
import { PreviewLayout } from "../../Shared/PreviewLayout/PreviewLayout";
import { insightURL, updateURL } from "../../varaibles";
import { CheckedBox } from "./components/CheckedBox/CheckedBox";
import { Modal } from "./components/Modal/Modal";
import { OrderCard } from "./components/OrderCard/OrderCard";
import { PickUpSection } from "./components/PickUpSection/PickUpSection";
import { OrdersContainer } from "./style";

export const SmartPick: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  interface IPickOrder {
    bestPickingDate: string;
    insightID: string;
    orders: {
      orderID: string;
      trackingID: string;
      statusDesc: string;
      PackageLocation: string;
      supplier: string;
      tag: string;
    }[];
    pickingAddress: string;
  }

  const [pickOrder, setPickOrder] = useState<IPickOrder | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { customer } = useGetCustomer();

  useEffect(() => {
    let isMounted = true;
    axios({
      method: "GET",
      url: insightURL,
      params: {
        insightID: params.insightID,
      },
    }).then((res) => isMounted && setPickOrder(res.data));

    return () => {
      isMounted = false;
    };
  }, [params]);

  const onClose = () => setIsModalOpen(false);

  const onCheck = () => {
    axios({
      method: "PATCH",
      url: updateURL,
      data: {
        InsightID: params.insightID,
        CustomerID: customer,
        StatusID: 3,
      },
    })
      .then(() => navigate(`/home/${customer}`))
      .catch(() => navigate(`/home/${customer}`));
  };

  return pickOrder ? (
    <PreviewLayout header="SMART Collect">
      <>
        <PickUpSection
          adress={pickOrder.pickingAddress}
          eta={pickOrder.bestPickingDate}
          pickupId={pickOrder.insightID}
          onClickChecked={() => setIsModalOpen(true)}
        />
        <OrdersContainer>
          {pickOrder.orders.map((order) => (
            <OrderCard key={order.orderID} {...order} />
          ))}
        </OrdersContainer>
      </>
      <Modal isOpen={isModalOpen} onClose={onClose}>
        <CheckedBox
          text={"Are you sure the\n task was completed?"}
          onClose={onClose}
          onCheck={onCheck}
        />
      </Modal>
    </PreviewLayout>
  ) : (
    <Loader />
  );
};
