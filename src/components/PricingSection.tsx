import { CreditCard } from 'lucide-react';

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 bg-[#faf7f5] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center bg-no-repeat opacity-10"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <CreditCard className="text-primary w-12 h-12 mx-auto mb-4" />
          <h2 className="text-primary text-4xl font-dancing mb-4">
            Información de las tarjetas
          </h2>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl px-2 mx-auto md:px-24">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-[#fdf5e0] p-6">
              <h3 className="text-primary text-2xl font-dancing text-center">
                Valor de Tarjeta
              </h3>
            </div>
            <div className="p-8 text-center">
              <p className="text-gray-500">
                Nos encantaría que nos acompañes en este día lleno de alegría y
                amor, por lo que queremos informarte que, para nuestros
                familiares, no hemos establecido ningún costo para las tarjetas
                de invitación.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg">¡Te esperamos!</p>
        </div>
      </div>
    </section>
  );
}
