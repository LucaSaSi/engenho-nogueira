'use client'
import Header from "@/components/Header";
import Image from "next/image";
import Contact from "@/components/Contact";

export default function Home() {

  return (
    <main className="min-h-screen bg-white text-gray-800 scroll-smooth">
      <Header />

      {/* Banner */}
      <section className="pt-20 relative h-[90vh] bg-cover bg-center">
        {/* Camada de fundo com blur */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          style={{
            backgroundImage: "url('/engenho.png')",
            backgroundSize: "cover",
            filter: "blur(2px)",
          }}
        ></div>

        {/* Texto acima do blur */}
        <div className="absolute inset-0 flex items-center justify-center"
        >
          <h1
            className="inset-0 pl-3 h-1/2 w-full flex items-center text-3xl md:text-6xl text-gray-200 font-bold text-left"
            style={{
              fontFamily: "var(--font-rubik-doodle-shadow)",
              fontSize: "4rem",
              textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
            }}
          >
            Engenho Nogueira <br /> Tradição e Sabor <br /> em cada Dose
          </h1>
        </div>
      </section>

      {/* Introdução */}
      <section className="p-6 md:p-12 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-">
          Tradição, sabor e história desde 1892
        </h2>
        <p className="text-lg leading-relaxed">
          O Engenho está localizado no Vale do Lambedouro, zona rural do município de Viçosa do Ceará, tendo uma distância aproximada de 15 km do centro da cidade até o mesmo. O percurso é feito boa parte em asfalto, contando apenas com 2,5 km de estrada de terra, mas sendo possível o tráfego de vans e micro-ônibus durante todo o ano.
          No trajeto o visitante pode apreciar a paisagem natural e singular da região, enquanto desce a ladeira que liga o centro à zona rural.        </p>
      </section>

      {/* Sobre o Engenho */}
      <section id="sobre" className="p-6 md:p-12 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center">Sobre o Engenho</h2>
        <div className="max-w-4xl mx-auto text-center text-gray-800 space-y-4">
          <Image
            src="/casa-grande.png"
            alt="Sobre o Engenho Nogueira"
            className="rounded-lg mb-4"
            width={800}
            height={400} />
          <p>Desde os meados do século XX, a família Nogueira mantém a tradição de produzir cachaça artesanal de alambique e de cuidar da história singular desta produção de aguardente.
            O processo de produção artesanal, a vivência da cultura sertaneja e os sabores da culinária tradicional do sertão são atrativos que proporcionam aos visitantes momentos inesquecíveis.
            A casa grande, como é conhecida pela família, é o contato com um pedaço da história de Viçosa do Ceará, contada através da arquitetura, culinária e agricultura familiar mantida há 111 anos.</p>
        </div>

      </section>

      {/* Produtos */}
      <section id="produtos" className="p-6 md:p-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4 text-center">Nossos Produtos</h2>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {/* Produto 1 */}
          <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/produto1.png"
              alt={"Produto 1"}
              className="h-100 w-full mx-auto object-cover rounded-lg"
              width={300}
              height={300} />
            <h3 className="text-lg font-semibold mt-2">Licor de Bombom</h3>
            <p className="text-sm text-gray-600">Licor de Bombom: A mistura de sabores da cachaça Nogueira e os toques doces dos bombons de morango, menta, café e chocolate</p>
          </div>

          {/* Produto 2 */}
          <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/produto2.png"
              alt="Cachaça no Amendoim"
              className="h-100 w-full mx-auto object-cover rounded-lg"
              width={400}
              height={400} />
            <h3 className="text-lg font-semibold mt-2">Cachaça Envelhecida</h3>
            <p className="text-sm text-gray-600">Cachaças envelhecidas: Envelhecidas em toneis de Aroeira, Umburana, Bálsamo, Carvalho Europeu, Pau D'arco, Sabiá e Jaqueira. Classificadas em Premium, Extra Premium e Reserva Especial</p>
          </div>

          {/* Produto 3 */}
          {/* <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/produto3.png"
              alt="Licor artesanal"
              className="h-100 w-full mx-auto object-cover rounded-lg"
              width={400}
              height={400} />
            <h3 className="text-lg font-semibold mt-2">Licor Caseiro</h3>
            <p className="text-sm text-gray-600">Sabores variados preparados com frutas da região e muito carinho.</p>
          </div> */}

          Produto 4
          <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/produto4.png"
              alt="Licor artesanal"
              className="h-100 w-full mx-auto object-cover rounded-lg"
              width={400}
              height={400} />
            <h3 className="text-lg font-semibold mt-2">Suvenir</h3>
            <p className="text-sm text-gray-600">Souvernir: Produtos que levam a marca e o slogam da cachaça Nogueira. Como bonés, copos e camisas.</p>
          </div>

          {/* Produto 5 */}
          <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/produto5.png"
              alt="Licor artesanal"
              className="h-100 w-full mx-auto object-cover rounded-lg"
              width={400}
              height={400} />
            <h3 className="text-lg font-semibold mt-2">Licor Tradicional</h3>
            <p className="text-sm text-gray-600">Licores Tradicionais: A mistura de sabores da Cachaça Nogueira e das especiarias, raízes, folhas e frutos tradicionais da região.</p>
          </div>

          {/* Produto 6 */}
          <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/produto6.png"
              alt="Licor artesanal"
              className="h-100 w-full mx-auto object-cover rounded-lg"
              width={400}
              height={400} />
            <h3 className="text-lg font-semibold mt-2">Bebida alcólica mista</h3>
            <p className="text-sm text-gray-600">Bebida: Uma caipirinha pronta que vai surpreender com o sabor das frutas e da cachaça Nogueira, ideal para tomar gelada ou preparar seu drink.</p>
          </div>
        </div>

      </section>

      {/* Visitas */}
      <section id="visitas" className="p-6 md:p-12 bg-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Agende Sua Visita</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full p-3 border rounded-md focus:outline-none"
            />
            <input
              type="date"
              className="w-full p-3 border rounded-md focus:outline-none"
            />
            <textarea
              placeholder="Mensagem"
              rows={4}
              className="w-full p-3 border rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition"
            >
              Confirmar Visita
            </button>
          </form>
        </div>
      </section>


      {/* Contato */}
      <Contact />

      {/* Rodapé */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} Engenho Nogueira — Todos os direitos reservados.
      </footer>
    </main>
  );
}
