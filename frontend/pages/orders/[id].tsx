import { useRouter } from "next/router";
import "firebase/firestore";
import { AuthAction, withAuthUser } from "next-firebase-auth";

import { Container, Loading, UpdateModal } from "components";
import OrderDetailCard from "modules/OrderDetailCard";
import useOrderDetail from "hooks/useOrderDetail";
import { useState } from "react";

function OrderDetail() {
  const [showModal, toggleModal] = useState(false);
  const {
    query: { id },
  } = useRouter();

  const { order, setOrder } = useOrderDetail(id);

  const handleModal = () => {
    toggleModal(!showModal);
  };

  return (
    <Container>
      <>
        {order ? (
          <OrderDetailCard {...order} toggleModal={() => toggleModal(true)} />
        ) : (
          <Loading />
        )}
        <UpdateModal
          showModal={showModal}
          handleModal={handleModal}
          content={order}
          setOrder={setOrder}
        />
      </>
    </Container>
  );
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: "/login",
  LoaderComponent: Loading,
})(OrderDetail);
