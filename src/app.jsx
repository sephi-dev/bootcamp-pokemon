import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/home";
import { Pokemon } from "./routes/pokemons";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* On crée deux routes une pour la home avec la liste des pokemons "leur card" et une autre pour l'affichage de chaque pokemon avec les données choisis */}
        <Route path="/" element={<Home />} />
        <Route path="/pokemons/:name" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
