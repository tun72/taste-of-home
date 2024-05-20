import { useIngredient } from "./usegetIngredients";
import Spinner from "../../ui/Spinner";
import IngredientDetailBox from "./IngredientDetailBox";
import IngredientSimilar from "./IngredientSimilar";

function IngredientDetail() {
  const { data, isLoading } = useIngredient();

  if (isLoading) return <Spinner />;

  const { imageUrl, name } = data;

  return (
    <>
      <section className="max-w[84%] mb-[4rem]">
        {/* <Prevoius> &larr; Back to menu</Prevoius> */}
        <div className="flex h-full w-full">
          <div className="h-[70rem] flex-[0_0_62%] p-[2rem_6rem]">
            <img src={imageUrl} alt={name} className="w-[100%] h-full object-cover rounded-[2rem]"/>
          </div>
          <div className="flex-[0_0_38%] p-[2rem]">
            <IngredientDetailBox data={data}  />
            <IngredientDetailBox data={data} type={1}  />

          </div>
        </div>
      </section>
      <IngredientSimilar />
    </>
  );
}

export default IngredientDetail;
