import { HiShoppingCart } from "react-icons/hi2";

import { Link } from "react-router-dom";

function CartHeader() {
  

  return (
    <ul>
      <li className="mt-4  align-middle font-sans text-[3rem]  lg:ml-6 lg:mt-0 lg:inline-block">
        <Link className="relative flex cursor-pointer " to="/cart">
          <HiShoppingCart />
          <span class="top right absolute right-0 top-0 m-0 h-7 w-7 rounded-full bg-green-600 p-0 text-center font-mono text-[1.4rem]  leading-tight text-white">
            {0}
          </span>
        </Link>
      </li>
    </ul>
  );
}

export default CartHeader;
