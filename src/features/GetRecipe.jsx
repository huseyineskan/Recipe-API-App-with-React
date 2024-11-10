import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomRecipe } from "./getRecipeSlice";

export function GetRecipe() {
  const data = useSelector((state) => state.getRecipe.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomRecipe());
  }, []);

  return (
    <div>
      <h2>GetRecipe</h2>
      <button onClick={() => dispatch(getRandomRecipe())}>Get Recipe</button>
      {data[0] && (
        <div>
          <p>Name: {data[0].strMeal}</p>
          <img src={data[0].strMealThumb} />
        </div>
      )}
    </div>
  );
}

export default GetRecipe;
