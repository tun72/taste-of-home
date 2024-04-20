import { HiBackspace } from "react-icons/hi2";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function OrderFormRowThree({ dispatch }) {
  return (
    <>
      <FormRow label="Pick Up Today">
        <input
          id="cod"
          name="payment-method"
          type="radio"
          className="radio"
          onChange={() =>
            dispatch({ type: "order/payment", payload: "Pick Up Today" })
          }
        />
      </FormRow>
      <FormRow
        label="Cash On
            Delivery"
      >
        <input
          id="cod"
          name="payment-method"
          type="radio"
          className="radio"
          onChange={() =>
            dispatch({ type: "order/payment", payload: "Cash On Delivery" })
          }
        />
      </FormRow>
      <FormRow label="Pay Now">
        <input
          id="cod"
          name="payment-method"
          type="radio"
          className="radio"
          disabled
        />
      </FormRow>
    </>
  );
}

export default OrderFormRowThree;
