import styled from "styled-components";
import { useToken } from "../../hooks/useToken";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import OrderRow from "../order/OrderRow";
import { useHistory } from "./useHistory";

function HIstoryTable() {
  const { data, isLoading } = useHistory();

  if (isLoading) {
    return <Spinner />;
  }
  let { shipping: orders } = data;

  return (
    <Table columns="2fr 1fr 1fr 1fr 1fr 1fr 1fr">
      <Table.Header>
        <div>Order ID</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Payment</div>
        <div>Recipes</div>
        <div>Status</div>
      </Table.Header>
      <Table.Body
        data={orders}
        render={(order) => <OrderRow order={order} />}
      />
    </Table>
  );
}

export default HIstoryTable;
