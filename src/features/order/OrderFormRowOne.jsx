import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function OrderFormRowOne({ name, email, phone, dispatch }) {
  return (
    <>
      <FormRow label="name">
        <Input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) =>
            dispatch({ type: "order/name", payload: e.target.value })
          }
        />
      </FormRow>
      <FormRow label="email">
        <Input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) =>
            dispatch({ type: "order/email", payload: e.target.value })
          }
        />
      </FormRow>
      <FormRow label="phone number">
        <Input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) =>
            dispatch({ type: "order/phone", payload: e.target.value })
          }
        />
      </FormRow>
    </>
  );
}

export default OrderFormRowOne;
