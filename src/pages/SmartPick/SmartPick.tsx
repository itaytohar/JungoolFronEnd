import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../Shared/Loader/Loader";
import { PreviewLayout } from "../../Shared/PreviewLayout/PreviewLayout";
import { CheckedBox } from "./components/CheckedBox/CheckedBox";
import { Modal } from "./components/Modal/Modal";
import { OrderCard } from "./components/OrderCard/OrderCard";
import { PickUpSection } from "./components/PickUpSection/PickUpSection";
import { OrdersContainer } from "./style";

const URL =
  "https://prod-178.westeurope.logic.azure.com/workflows/9a28197a41c444ae8b73565d01d48fa7/triggers/manual/paths/invoke/?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9WPmrKKtsAg7yptTjJwCiZmvWYPrDHkUV7RMZ49MUp0";

export const SmartPick: React.FC = () => {
  let params = useParams();

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

  useEffect(() => {
    axios({
      method: "GET",
      url: URL,
      params: {
        insightID: params.insightID,
      },
    }).then((res) => {
      console.log(res.data);

      setPickOrder(res.data);
    });
  }, [params]);

  const onClose = () => setIsModalOpen(false);

const onCheck = () => {

  onClose()
}

  return (
    <PreviewLayout backgroundColor="#F1F9FF" header="SMART PICK">
      {pickOrder ? (
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
      ) : (
        <Loader />
      )}
      <Modal isOpen={isModalOpen} onClose={onClose}>
        <CheckedBox
          onClose={onClose}
          onCheck={() => console.log("checked")}
        />
      </Modal>
    </PreviewLayout>
  );
};
