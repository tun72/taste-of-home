import { Link, useNavigate } from "react-router-dom";

function Prevoius({ children }) {
  const navigate = useNavigate();
  function handelBack() {
    navigate(-1);
  }
  return (
    <button
      onClick={handelBack}
      className="text-[1.4rem] text-blue-500 hover:text-blue-600 hover:underline"
    >
      {children}
    </button>
  );
}

export default Prevoius;
