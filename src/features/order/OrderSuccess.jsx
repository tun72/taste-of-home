import Confetti from "react-confetti";
import { HiCheckCircle } from "react-icons/hi2";
import OrderForm from "./OrderForm";
import { URL } from "../../utils/constants";

function OrderSuccess({ filePath }) {
  return (
    <OrderForm>
      <div className="relative flex flex-col items-center justify-center">
        <Confetti />
        <HiCheckCircle className="text-[20rem] text-green-500" />
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-[2rem]">
            Your ingredients is successfully ordered ✅
          </h2>

          <a href={URL + "/docs/" + filePath} download className="text-green-400 underline hover:underline">download reciepe</a>
        </div>
      </div>
    </OrderForm>
  );
}

export default OrderSuccess;
