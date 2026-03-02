const Visit_us = () => {
  return (
    <div className="p-6 mt-10 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold tracking-tight">Visítanos</h2>

      <p className="mt-4 text-lg text-gray-700">
        Descubre nuestro museo de arte contemporáneo, un espacio dedicado a la creatividad,
        la experimentación y las nuevas formas de expresión artística.
      </p>

      {/* Horarios */}
      <section className="mt-8">
        <h3 className="text-2xl font-semibold">Horarios</h3>
        <ul className="mt-3 space-y-1 text-gray-700">
          <li><strong>Martes a viernes:</strong> 10:00 – 18:00</li>
          <li><strong>Sábados y domingos:</strong> 11:00 – 20:00</li>
          <li><strong>Lunes:</strong> Cerrado</li>
        </ul>
      </section>

      {/* Ubicación */}
      <section className="mt-8">
        <h3 className="text-2xl font-semibold">Ubicación</h3>
        <p className="mt-3 text-gray-700">
          Avenida del Arte 123, Distrito Cultural, Ciudad de México.
        </p>
        <div className="mt-4">
          <iframe
            className="w-full h-64 rounded-lg shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.123456789!2d-99.123456!3d19.432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sMuseo%20de%20Arte%20Contempor%C3%A1neo!5e0!3m2!1ses!2smx!4v0000000000000"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Entradas */}
      <section className="mt-8">
        <h3 className="text-2xl font-semibold">Entradas</h3>
        <ul className="mt-3 space-y-1 text-gray-700">
          <li><strong>General:</strong> $120 MXN</li>
          <li><strong>Estudiantes y maestros:</strong> $60 MXN</li>
          <li><strong>Niños menores de 12 años:</strong> Entrada gratuita</li>
          <li><strong>Domingos:</strong> Entrada libre para todo público</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="mt-10">
        <a
          href="/tickets"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
        >
          Comprar entradas
        </a>
      </div>
    </div>
  );
};

export default Visit_us;
