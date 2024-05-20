import {
    HiGift,
  HiLockClosed,
  HiMapPin,
  HiOutlineCircleStack,
  HiReceiptRefund,
  HiTruck,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

function DetailInfo() {
  return (
    <div className="font-mono mt-[1.8rem] mb-[1.8rem] text-[1.5rem]">
      <ul className="flex flex-col gap-[1.2rem]">
        <li className="flex items-center gap-3">
          <HiTruck /> Pick up today at <Link to="/" className="text-blue-600 hover:underline">Yangon, Tharkayta</Link>
        </li>
        <li className="flex items-center gap-3">
          <HiMapPin /> Tharkayta
        </li>
        <li className="flex items-center gap-3">
          <HiOutlineCircleStack /> Sold and shipped by <Link to="/" className="text-blue-600 hover:underline">walmart.com</Link>
        </li>
        <li className="flex items-center gap-3">
          <HiReceiptRefund /> Free 90-day returns
        </li>
        <li className="flex items-center gap-3">
          <HiGift /> Delivered from store
        </li>
      </ul>
    </div>
  );
}

export default DetailInfo;
