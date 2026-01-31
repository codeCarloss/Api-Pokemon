import { useState } from "react";
import Pokemon from "./components/Pokemon.jsx";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!input.trim()) return;
    setPokemon(input.trim().toLowerCase());
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-sky-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200 p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-800">Busca un Pokémon</h1>
          <p className="text-sm text-slate-500 mt-1">Escribe el nombre y pulsa ENVIAR</p>
        </header>

        <form onSubmit={handleSubmit} className="flex gap-3 items-center">
          <label className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ej. pikachu"
              aria-label="Buscar Pokémon"
              className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-300 transition text-slate-700"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔎</span>
          </label>

          <button
            type="submit"
            onClick={handleSubmit}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium px-5 py-3 rounded-xl shadow hover:scale-[1.02] active:scale-95 transition"
          >
            ENVIAR
          </button>
        </form>

        <div className="mt-6">
          {pokemon ? (
            <div className="animate-fadeIn">
              <Pokemon pokemon={pokemon} />
            </div>
          ) : (
            <div className="text-sm text-slate-500">No hay Pokémon seleccionado</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
