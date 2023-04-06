import "./App.css";
import Search from "./Components/Search";
import Ribbon from "./Components/Ribbon";
import RecipeState from "./Context/Recipe/recipeState";

function App() {
  return (
    <>
      <RecipeState>
        <Search />
        <Ribbon />
      </RecipeState>
    </>
  );
}

export default App;
