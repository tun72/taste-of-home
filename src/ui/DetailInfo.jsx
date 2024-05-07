import {
    HiGift,
  HiLockClosed,
  HiMapPin,
  HiOutlineCircleStack,
  HiReceiptRefund,
  HiTruck,
} from "react-icons/hi2";

function DetailInfo() {
  return (
    <div className="detail-box__pickup">
      <ul className="detail-box__list">
        <li className="detail-box__item flex items-center gap-3">
          <HiTruck /> Pick up today at <span>Yangon, Tharkayta</span>
        </li>
        <li className="detail-box__item flex items-center gap-3">
          <HiMapPin /> Tharkayta
        </li>
        <li className="detail-box__item flex items-center gap-3">
          <HiOutlineCircleStack /> Sold and shipped by walmart.com
        </li>
        <li className="detail-box__item flex items-center gap-3">
          <HiReceiptRefund /> Free 90-day returns
        </li>
        <li className="detail-box__item flex items-center gap-3">
          <HiGift /> Delivered from store
        </li>
      </ul>
    </div>
  );
}

export default DetailInfo;
