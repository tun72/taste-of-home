import styled from "styled-components";
import Table from "../../ui/Table";
import { URL } from "../../utils/constants";

const OrderId = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function  OrderRow({ order }) {
  // const total = order?.ingredients?.reduce(
  //   (prev, curr) => prev + curr.ingredient.price * curr.quantity,
  //   0,
  // );

  const total = 0;
  let pending = "bg-yellow-50 text-yellow-600 ring-yellow-600/20";
  let success = "bg-green-50 text-green-600 ring-green-600/20";
  return (
    <Table.Row>
      <OrderId>{order?._id}</OrderId>
      <Amount>{order?.ingredients.length} ingredients</Amount>

      <Amount>$ {total}</Amount>
      <p>{order?.payment}</p>

      <p>
        <a href={URL + "/docs/" + order?.filePath} className="text-green-400">
          download receipt
        </a>
      </p>

      <p
        className={`w-fit  rounded-md px-2 py-1  text-[1.25rem] ring-1 ring-inset ${
          order?.status === "Pending" ? pending : success
        }`}
      >
        {order?.status}
      </p>
      <p>{new Date(order?.createdAt).toLocaleString()}</p>
    </Table.Row>
  );
}

export default OrderRow;
