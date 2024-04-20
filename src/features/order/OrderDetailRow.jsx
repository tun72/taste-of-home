import { HiCheckCircle, HiXCircle } from "react-icons/hi2";
import FormRow from "../../ui/FormRow";

function OrderDetailRow({ item, title}) {
  return (
    <FormRow
      label={title}
      success={item && <HiCheckCircle />}
      error={!item && <HiXCircle />}
    >
      <p>{item}</p>
    </FormRow>
  );
}

export default OrderDetailRow;
