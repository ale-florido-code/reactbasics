// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { data } from "./utils/data";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";

//Here i have used condition and useState to display only the selected page

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipeLabel) => {
    setSelectedRecipe(recipeLabel);
  };

  const handleRecipeDeselect = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage
          recipe={
            data.hits.find((hit) => hit.recipe.label === selectedRecipe).recipe
          }
          onBackButtonClick={handleRecipeDeselect}
        />
      ) : (
        <RecipeListPage handleRecipeSelect={handleRecipeSelect} />
      )}
    </div>
  );
}

export default App;
