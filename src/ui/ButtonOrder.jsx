import { Link } from "react-router-dom";

function ButtonOrder({ children, onClick, type, to }) {
  let btnClass =
    "inline-block rounded-full bg-green-400 px-[2rem] py-[1rem] text-[1.2rem] font-semibold uppercase tracking-wide text-stone-700 transition-colors duration-300 hover:bg-green-300 focus:bg-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  if (type === "rounded") {
    btnClass =
      "px-[1.4rem] py-[0.7rem] inline-block text-[1.5rem] rounded-full bg-green-400 uppercase tracking-wide text-stone-700 transition-colors duration-300 hover:bg-green-300 focus:bg-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  }

  if (type === "delete") {
    btnClass =
      "inline-block rounded-full bg-red-500 px-[1.8rem] py-[1rem] text-[1.2rem] font-semibold uppercase tracking-wide text-red-100 transition-colors duration-300 hover:bg-red-400 focus:bg-red-400 focus:outline-none focus:ring focus:ring-red-400 focus:ring-offset-2 disabled:cursor-not-allowed";
  }

  if (type === "secondary")
    btnClass =
      "inline-block rounded-full bg-stone-200 px-[2rem] py-[1rem] text-[1.2rem] font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  if (to) {
    return (
      <Link className={btnClass} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonOrder;
