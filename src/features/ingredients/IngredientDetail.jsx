import { useIngredient } from "./usegetIngredients";
import Spinner from "../../ui/Spinner";
import IngredientDetailBox from "./IngredientDetailBox";
import IngredientSimilar from "./IngredientSimilar";


function IngredientDetail() {
  const { data, isLoading } = useIngredient();

  // const { error } = useSelector((state) => state.cart);

  // console.log(error);
  // useEffect(() => {
  //   console.log(error);
  //   if (error) {
  //     toast.error(error);
  //   }
  // }, [error]);


  if (isLoading) return <Spinner />;

  const { imageUrl, name } = data;


  return (
    <>
      <section className="detail-section section-container">
        {/* <Prevoius> &larr; Back to menu</Prevoius> */}
        <div className="detail">
          <div className="detail-img">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="detail-data">
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
