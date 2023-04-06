import "./App.css";
import Search from "./Components/Search";
import Ribbon from "./Components/Ribbon";
import RecipeState from "./Context/Recipe/RecipeState";
import Recipes from "./Components/Recipes";

function App() {
  return (
    <>
      <RecipeState>
        <Search />
        <Ribbon />
        <Recipes/>
      </RecipeState>
    </>
  );
}

export default App;
