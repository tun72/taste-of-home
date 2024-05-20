import { useIngredient } from "./usegetIngredients";
import Spinner from "../../ui/Spinner";
import IngredientDetailBox, { IngidientCard } from "./IngredientDetailBox";
import IngredientSimilar from "./IngredientSimilar";

function IngredientDetail() {
  const { data, isLoading } = useIngredient();

  if (isLoading) return <Spinner />;

  const { imageUrl, name } = data;

  return (
    <>
      <section className="mx-auto max-w-[84%] py-[4rem]">
        {/* <Prevoius> &larr; Back to menu</Prevoius> */}
        <div className="flex h-full w-full  justify-between">
          <IngidientCard className="h-[60rem] flex-[0_0_60%] rounded-[2rem] p-[2rem] shadow-2xl">
            <img
              src={imageUrl}
              alt={name}
              className="h-full w-[100%] rounded-[2rem] object-cover"
            />
          </IngidientCard>
          <div className="flex-[0_0_35%]">
            <IngredientDetailBox data={data} />
            <IngredientDetailBox data={data} type={1} />
          </div>
        </div>
      </section>
      <IngredientSimilar />
    </>
  );
}

export default IngredientDetail;
