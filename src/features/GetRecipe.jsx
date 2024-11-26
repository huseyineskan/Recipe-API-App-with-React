import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRandomRecipe } from "./getRecipeSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../css/get_recipe.css";

export function GetRecipe() {
  const data = useSelector((state) => state.getRecipe.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomRecipe());
  }, []);

  const ingredients = data[0]
    ? Object.entries(data[0])
        .filter(([key, value]) => key.startsWith("strIngredient") && value)
        .map(([_, value]) => value)
    : [];

  return (
    <div className="container">
      {data[0] ? (
        <div className="recipe">
          <div className="recipe-img">
            <LazyLoadImage
              src={data[0].strMealThumb}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: "1s" },
              }}
            />
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
                  <ul>
                    {ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
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
