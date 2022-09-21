import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from './components/PokemonList';
import PokemonDescription from './components/PokemonDescription';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/:id" element={<PokemonDescription />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
