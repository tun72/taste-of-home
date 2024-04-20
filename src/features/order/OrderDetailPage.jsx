import { HiCheckCircle, HiXCircle, HiXMark } from "react-icons/hi2";
import FormRow from "../../ui/FormRow";
import OrderDetailRow from "./OrderDetailRow";

function OrderDetailPage({ state }) {
  const { name, email, address, zipcode, phone, city, payment } = state;
  return (
    <>
      <OrderDetailRow item={name} title={"name"}></OrderDetailRow>
      <OrderDetailRow item={email} title={"email"}></OrderDetailRow>
      <OrderDetailRow item={phone} title={"phone"}></OrderDetailRow>
      <OrderDetailRow item={city} title={"city"}></OrderDetailRow>
      <OrderDetailRow item={address} title={"address"}></OrderDetailRow>
      <OrderDetailRow item={zipcode} title={"zipcode"}></OrderDetailRow>
      <OrderDetailRow item={payment} title={"payment"}></OrderDetailRow>
    </>
  );
}

export default OrderDetailPage;
