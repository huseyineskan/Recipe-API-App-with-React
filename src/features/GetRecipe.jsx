import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomRecipe } from "./getRecipeSlice";
import "../css/get_recipe.css";

export function GetRecipe() {
  const data = useSelector((state) => state.getRecipe.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomRecipe());
  }, []);

  return (
    <div className="container">
      {data[0] ? (
        <div className="recipe">
          <div className="recipe-img">
            <img src={data[0].strMealThumb} />
            <a
              href={data[0].strYoutube}
              target="_blank"
              className="recipe-youtube-link-btn"
            >
              Youtube Video
            </a>
          </div>
          <div className="recipe-informations">
            <div className="recipe-title">
              <div className="recipe-categorg-area">
                <span className="recipe-category">{data[0].strCategory}</span>
                <span className="recipe-area">{data[0].strArea}</span>
              </div>
              <h1>{data[0].strMeal}</h1>
              <div className="recipe-ingrediens-measure">
                <div className="repice-ingrediens">
                  <h3>Ingredients and Measure</h3>
                  <p>
                    {data[0].strIngredient1} -{" "}
                    <span>{data[0].strMeasure1}</span>
                  </p>
                </div>
              </div>
              <div className="recipe-instructions">
                <h3>Instructions</h3>
                <p>{data[0].strInstructions}</p>
              </div>
              <p></p>
            </div>
          </div>
          <button
            id="get-recipe-btn"
            onClick={() => dispatch(getRandomRecipe())}
          >
            Get Recipe
          </button>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default GetRecipe;
