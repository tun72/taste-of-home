import { MealCard, MealData, MealLayout } from "./MostRecipeSection";

function MealLoading() {
  return (
    <div className="mx-auto w-full p-[8rem_7rem_8rem_7rem]">
      <MealLayout className="animate-pulse">
        {Array.from(Array(8).keys()).map((arr) => (
          <MealCard key={arr}>
            <div className="h-[100%] w-[100%] rounded-[2rem] bg-slate-500"></div>
            <MealData>
              <div className="h-2 w-[3rem] rounded bg-slate-500"></div>
              <div className="mt-[1rem] flex items-center justify-between">
                <div className="h-2 w-[3rem] rounded bg-slate-500"></div>
                <div className="h-10 w-10 rounded-full bg-slate-500"></div>
              </div>
            </MealData>
          </MealCard>
        ))}
      </MealLayout>
    </div>
  );
}

export default MealLoading;
