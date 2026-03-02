import { useState } from "react"
import type { RecordItem } from "../types"

export default function ExpoCard ({ expo }: { expo: RecordItem }) {
  const [expanded, setExpanded] = useState(false)

  const description = expo.description || "Sin descripción disponible."
  const isLong = description.length > 100
  const shortText = description.slice(0, 100) + "..."

  return (
    <li
      className="bg-white rounded-xl shadow-md overflow-hidden 
                 hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={expo.primaryimageurl}
        alt={expo.title || "Exposición"}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "/fallback.jpg"
        }}
        className="w-full h-60 object-cover"
      />

      <div className="p-5 space-y-3">
        <h2 className="text-2xl font-bold text-gray-900">
          {expo.title || "Sin título"}
        </h2>

        <p className="text-gray-700 leading-relaxed">
          {isLong && !expanded ? shortText : description}
        </p>

        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-indigo-600 font-semibold hover:underline"
          >
            {expanded ? "Ver menos" : "Ver más"}
          </button>
        )}

        <p className="text-sm font-medium text-indigo-600">
          Lugar: Museo de Arte Contemporáneo
        </p>
      </div>
    </li>
  )
}


