import { Button } from "react-scroll";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function OrderFormRowTwo({ address, city, zipcode, dispatch }) {
  return (
    <>
      <FormRow label="address">
        <Input
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={(e) =>
            dispatch({ type: "order/address", payload: e.target.value })
          }
        />
      </FormRow>
      <FormRow label="city">
        <Input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={(e) =>
            dispatch({ type: "order/city", payload: e.target.value })
          }
        />
      </FormRow>
      <FormRow label="zip code">
        <Input
          type="text"
          name="zip"
          id="zip"
          value={zipcode}
          onChange={(e) =>
            dispatch({ type: "order/zipcode", payload: e.target.value })
          }
        />
      </FormRow>
    </>
  );
}

export default OrderFormRowTwo;
