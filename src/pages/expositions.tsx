import { useEffect, useState } from "react"
import { API_KEY, BASE_URL } from "../lib/utils"
import type { RecordItem } from "../types"
import ExpoCard from "../components/ExpoCard"



const Expositions = () => {
  const [expositions, setExpositions] = useState<RecordItem[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getExpositions = async (pageToLoad: number) => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(
        `${BASE_URL}/exhibition?apikey=${API_KEY}&page=${pageToLoad}`
      )

      if (!response.ok) {
        throw new Error(`Error en la solicitud, status: ${response.status}`)
      }

      const data = await response.json()

      // Filtrar exposiciones sin imagen
      const filtered = (data.records as RecordItem[]).filter(
        (item) => item.primaryimageurl
      )

      setExpositions((prev) => [...prev, ...filtered])
    } catch (err) {
      console.error("Error cargando exposiciones:", err)
      setError("Hubo un problema cargando las exposiciones.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getExpositions(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const handleLoadMore = () => {
    setPage((prev) => prev + 1)
  }

  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 max-w-6xl mx-auto">
        Exposiciones Actuales
      </h2>

      {loading && expositions.length === 0 && (
        <p className="text-lg mb-4 max-w-6xl mx-auto">Cargando exposiciones...</p>
      )}

      {error && (
        <p className="text-red-600 text-lg mb-4 max-w-6xl mx-auto">
          {error}
        </p>
      )}

      <ul className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {expositions.map((expo) => (
          <ExpoCard key={expo.id} expo={expo} />
        ))}
      </ul>

      <div className="flex justify-center mt-10">
        <button
          onClick={handleLoadMore}
          disabled={loading}
          className="px-6 py-3 rounded-lg bg-black text-white font-semibold 
                     hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Cargando..." : "Cargar más"}
        </button>
      </div>
    </section>
  )
}

export default Expositions
