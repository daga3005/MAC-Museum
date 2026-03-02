const Tickets = () => {
  return (
    <div className="p-6 mt-10 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold tracking-tight">Entradas</h2>

      <p className="mt-4 text-lg text-gray-700">
        Adquiere tus entradas para explorar nuestras exposiciones permanentes y temporales.
        Vive el arte contemporáneo desde nuevas perspectivas.
      </p>

      {/* Tipos de entradas */}
      <section className="mt-10">
        <h3 className="text-2xl font-semibold">Tipos de entrada</h3>

        <div className="mt-6 space-y-6">

          {/* General */}
          <div className="border rounded-lg p-5 shadow-sm">
            <h4 className="text-xl font-semibold">Entrada General</h4>
            <p className="text-gray-600 mt-2">Acceso completo a todas las salas del museo.</p>
            <p className="text-2xl font-bold mt-3">$120 MXN</p>
            <button className="mt-4 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
              Comprar
            </button>
          </div>

          {/* Estudiantes */}
          <div className="border rounded-lg p-5 shadow-sm">
            <h4 className="text-xl font-semibold">Estudiantes y Maestros</h4>
            <p className="text-gray-600 mt-2">Presentando credencial vigente.</p>
            <p className="text-2xl font-bold mt-3">$60 MXN</p>
            <button className="mt-4 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
              Comprar
            </button>
          </div>

          {/* Niños */}
          <div className="border rounded-lg p-5 shadow-sm">
            <h4 className="text-xl font-semibold">Niños menores de 12 años</h4>
            <p className="text-gray-600 mt-2">Entrada gratuita acompañados de un adulto.</p>
            <p className="text-2xl font-bold mt-3">Gratis</p>
          </div>

          {/* Domingo */}
          <div className="border rounded-lg p-5 shadow-sm bg-gray-50">
            <h4 className="text-xl font-semibold">Domingo de Entrada Libre</h4>
            <p className="text-gray-600 mt-2">
              Acceso gratuito para todo el público todos los domingos.
            </p>
            <p className="text-2xl font-bold mt-3">Gratis</p>
          </div>

        </div>
      </section>

      {/* Información adicional */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Información importante</h3>
        <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
          <li>Las entradas son válidas únicamente para la fecha seleccionada.</li>
          <li>No se requiere imprimir el boleto; puedes mostrarlo en tu dispositivo móvil.</li>
          <li>Las compras no son reembolsables.</li>
        </ul>
      </section>

      {/* CTA final */}
      <div className="mt-12 text-center">
        <a
          href="/visit_us"
          className="text-black underline hover:text-gray-700 transition"
        >
          Ver horarios y ubicación
        </a>
      </div>
    </div>
  );
};

export default Tickets;
