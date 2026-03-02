import { useEffect, useState } from "react"
import type { RecordItem } from "../types"
import { API_KEY, BASE_URL } from "../lib/utils"

const ArtCard = ({ art }: { art: RecordItem }) => {
  return (
    <li
      className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden 
                 hover:shadow-lg transition-shadow p-1"
    >
      <img
        src={art.primaryimageurl}
        alt={art.title}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = "/fallback.jpg" // opcional, si tienes una imagen de respaldo
        }}
        className="w-full max-h-80 object-cover"
      />
      <div className="p-5 flex flex-col gap-3 text-lg mt-3 font-semibold">
        <p>{`Title: ${art.title || "Unknown"}`}</p>
        <p>{`Date: ${art.dated || "Unknown"}`}</p>
        <p>{`Department: ${art.department || "Unknown"}`}</p>
      </div>
    </li>
  )
}

const Galery = () => {
  const [artWork, setArtWork] = useState<RecordItem[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getImages = async (pageToLoad: number) => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(
        `${BASE_URL}/object?apikey=${API_KEY}&page=${pageToLoad}`
      )

      if (!response.ok) {
        throw new Error(`Error en la solicitud, status: ${response.status}`)
      }

      const data = await response.json()

      const filtered = (data.records as RecordItem[]).filter(
        (item) => item.primaryimageurl
      )

      setArtWork((prev) => [...prev, ...filtered])
    } catch (err) {
      console.error("Error en el fetching de datos:", err)
      setError("Hubo un problema cargando las imágenes.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getImages(page)
    
  }, [page])

  const handleLoadMore = () => {
    setPage((prev) => prev + 1)
  }

  return (
    <div className="p-6 mt-10">
      <h2 className="text-4xl font-bold m-5 p-4">Galería</h2>
      <p className="mt-4 text-2xl mb-10">Una selección de obras destacadas.</p>

      {loading && artWork.length === 0 && (
        <p className="text-lg mb-4">Cargando obras...</p>
      )}

      {error && (
        <p className="text-red-600 text-lg mb-4">
          {error}
        </p>
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-10 bg-gray-200 gap-10">
        {artWork.map((art) => (
          <ArtCard key={art.id} art={art} />
        ))}
      </ul>

      <div className="flex justify-center mt-6 mb-10">
        <button
          onClick={handleLoadMore}
          disabled={loading}
          className="px-6 py-3 rounded-lg bg-black text-white font-semibold 
                     hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Cargando..." : "Cargar más"}
        </button>
      </div>
    </div>
  )
}

export default Galery
