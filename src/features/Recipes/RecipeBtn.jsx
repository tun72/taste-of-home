import { HiPlay, HiStop } from "react-icons/hi2";

function RecipeBtn({ handelVideo, isOpen }) {
  let btnColor = " from-[#0de39d] to-[#7cf358] ";

  if (isOpen) {
    btnColor = "from-red-300 to-red-500 ";
  }
  return (
    <button
      onClick={handelVideo}
      className={
        "flex h-[5rem] w-[5rem]  cursor-pointer items-center justify-center rounded-[50%] bg-gradient-to-tl text-[2.5rem] font-bold text-white " +
        btnColor
      }
    >
      {isOpen ? <HiStop /> : <HiPlay />}
    </button>
  );
}

export default RecipeBtn;
