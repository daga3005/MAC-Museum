

const Destacado = () => {
  return (
    <section className="py-8 px-6 max-w-6xl mx-auto bg-gray-200 mt-8">
      <h2 className="text-3xl font-bold mb-8">Obras Destacadas</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 h-100">
        <div className="p-2 bg-gray-300 rounded-lg 
      ">
          <img className=" hover:border-4 hover:border-gray-700"
          src="/abstract.jpg" alt="abstract"  />
        </div>
        <div className="p-2 bg-gray-300 rounded-lg 
        ">

          <img className=" hover:border-4 hover:border-gray-700"
          src="/emperatrix.png" alt="emperatrix" />
        </div>

        <div className="p-2 bg-gray-300 rounded-lg
         hover:scale-102">
          <img className=" hover:border-4 hover:border-gray-700"
          src="/frida.jpg" alt="frida" />
        </div>
        <div className="p-2 bg-gray-300 rounded-lg
         ">
          <img className=" hover:border-4 hover:border-gray-700"
          src="/couple.jpg" alt="couple"  />
        </div>
      </div>
    </section>
  )
}

export default Destacado