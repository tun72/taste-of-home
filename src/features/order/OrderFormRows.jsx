import OrderFormRowTwo from "./OrderFormRowTwo";
import OrderFormRowOne from "./OrderFormRowOne";
import OrderFormRowThree from "./OrderFormRowThree";
import OrderForm from "./OrderForm";
import { useReducer, useState } from "react";
import { useUser } from "../authentication/useUser";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import OrderDetailPage from "./OrderDetailPage";
import { useOrder } from "./useOrder";
import Spinner from "../../ui/Spinner";
import Error from "./Error";
import OrderSuccess from "./OrderSuccess";
import { useDispatch } from "react-redux";
import { clearCart } from "../cart/cartSlice";

const initialState = {
  payment: "",
  name: "",
  email: "",
  address: "",
  phone: "",
  city: "",
  zipcode: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "order/name":
      return { ...state, name: action.payload };
    case "order/email":
      return { ...state, email: action.payload };
    case "order/phone":
      return { ...state, phone: action.payload };
    case "order/address":
      return { ...state, address: action.payload };
    case "order/city":
      return { ...state, city: action.payload };
    case "order/payment":
      return { ...state, payment: action.payload };
    case "order/zipcode":
      return { ...state, zipcode: action.payload };
    default:
      return { ...state };
  }
}

function OrderFormRows() {
  const [orderPage, setOrderPage] = useState(0);
  const { user } = useUser();

  const [state, dispatch] = useReducer(reducer, { ...initialState, ...user });

  const cartDispatch = useDispatch();

  const { orderNow, isLoading, status, data } = useOrder();
  const { name, email, phone, address, city, zipcode, payment } = state;

  let arr = [name, email, phone, address, city, zipcode, payment];
  const isDisable = arr.includes("") || arr.includes(null);

  console.log(isDisable, state);

  function nextPage() {
    setOrderPage((page) => page + 1);
  }

  function prevPage() {
    setOrderPage((page) => page - 1);
  }
  function handelOrder(e) {
    e.preventDefault();
    if (!isDisable) orderNow({ order: { city, address, zipcode, payment } });
    // cartDispatch({ type: "cart/clear" });
  }

  if (isLoading) {
    return (
      <OrderForm>
        <Spinner />
      </OrderForm>
    );
  }

  if (status === "success") {
    cartDispatch(clearCart());
    return <OrderSuccess filePath={data.filePath} />;
  }

  if(status === "error") {
    return <Error />
  }

 

  return (
    <OrderForm orderPage={orderPage}>
      {orderPage === 0 && (
        <OrderFormRowOne
          name={name}
          email={email}
          phone={phone}
          dispatch={dispatch}
        />
      )}
      {orderPage === 1 && (
        <OrderFormRowTwo
          address={address || ""}
          city={city || ""}
          zipcode={zipcode || ""}
          dispatch={dispatch}
        />
      )}
      {orderPage === 2 && <OrderFormRowThree dispatch={dispatch} />}

      {orderPage === 3 && <OrderDetailPage state={state} />}

      <FormRow>
        {orderPage > 0 && (
          <Button type="reset" variation="secondary" onClick={prevPage}>
            Previous
          </Button>
        )}
        {orderPage < 3 && (
          <Button type="button" onClick={nextPage}>
            Next
          </Button>
        )}
        {orderPage === 3 && (
          <Button disabled={isDisable} onClick={(e) => handelOrder(e)}>
            order now
          </Button>
        )}
      </FormRow>
    </OrderForm>
  );
}

export default OrderFormRows;
