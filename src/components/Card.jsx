import React from "react";

const typeColor = {
  default: "bg-gray-200 text-gray-800",
  hp: "bg-red-500",
  attack: "bg-orange-500",
  defense: "bg-yellow-500",
  "special-attack": "bg-pink-500",
  "special-defense": "bg-indigo-500",
  speed: "bg-green-500",
};

export default function Card({
  nom = "Desconocido",
  url = "",
  habilitats = [],
  id = "—",
  shiny = "",
  stats = [],
  // opcional: types (["fire","water"]) si quieres colores por tipo
  types = [],
}) {
  const safeStats = Array.isArray(stats) ? stats : [];
  const safeHabs = Array.isArray(habilitats) ? habilitats : [];

  const primaryType = types?.[0] ?? null;
  const headerBg =
    primaryType === "fire"
      ? "from-red-500 to-yellow-400"
      : primaryType === "water"
      ? "from-blue-500 to-cyan-400"
      : "from-gray-100 to-white";

  const imgFallback =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-size='12'>No image</text></svg>";

  return (
    <article
      className={`max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transition-transform transform hover:scale-[1.02]`}
      aria-labelledby={`pokemon-${id}`}
    >
      {/* Header */}
      <header
        className={`p-4 bg-gradient-to-r ${headerBg} flex items-center justify-between gap-4`}
      >
        <div>
          <h2
            id={`pokemon-${id}`}
            className="text-2xl font-extrabold text-white tracking-tight"
          >
            #{id} — {String(nom).toUpperCase()}
          </h2>
          <p className="text-sm text-white/90 mt-1">
            {safeHabs.length > 0 ? safeHabs.join(" / ") : "Habilidades desconocidas"}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {types && types.length > 0 ? (
            <div className="flex gap-2">
              {types.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      {/* Body */}
      <div className="p-5 bg-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
          {/* Images */}
          <div className="flex gap-4 justify-center sm:justify-start mb-4 sm:mb-0">
            <figure className="text-center">
              <figcaption className="text-xs text-gray-500 mb-2">Normal</figcaption>
              <img
                src={url || imgFallback}
                alt={`${nom} normal`}
                onError={(e) => (e.currentTarget.src = imgFallback)}
                className="w-24 h-24 rounded-full object-cover border-4 border-red-300 shadow"
              />
            </figure>

            <figure className="text-center">
              <figcaption className="text-xs text-gray-500 mb-2">Shiny</figcaption>
              <img
                src={shiny || imgFallback}
                alt={`${nom} shiny`}
                onError={(e) => (e.currentTarget.src = imgFallback)}
                className="w-24 h-24 rounded-full object-cover border-4 border-yellow-300 shadow"
              />
            </figure>
          </div>

          {/* Stats */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Stats</h3>

            <ul className="space-y-2">
              {safeStats.length > 0 ? (
                safeStats.map((s, i) => {
                  const key = s.id ?? i;
                  const statName = String(s.stat ?? "stat").replace("-", " ");
                  const value = Number(s.value ?? 0);
                  const pct = Math.min(100, Math.round((value / 255) * 100)); // escala visual
                  const colorClass =
                    typeColor[statName.toLowerCase()] || "bg-sky-400";

                  return (
                    <li key={key} className="flex items-center gap-3">
                      <div className="w-28 text-xs text-gray-600">{statName}</div>
                      <div className="flex-1">
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`${colorClass} h-full rounded-full`}
                            style={{ width: `${pct}%` }}
                            aria-hidden
                          />
                        </div>
                      </div>
                      <div className="w-10 text-right text-sm font-medium text-gray-700">
                        {value}
                      </div>
                    </li>
                  );
                })
              ) : (
                <li className="text-sm text-gray-500">Stats no disponibles</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
