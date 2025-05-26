'use client'
import Image from "next/image";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Products from "@/components/Products";
import Visit from "@/components/Visit";

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
            backgroundImage: "url('/casa-grande.png')",
            backgroundSize: "cover",
            filter: "blur(3px)",
          }}
        ></div>

        {/* Texto acima do blur */}
        <div className="absolute inset-0 flex items-center justify-center"
        >
          <h1
            className="inset-0 pl-3 h-1/2 w-full flex items-center text-5xl lg:text-7xl text-gray-200 font-bold text-left"
            style={{
              fontFamily: "var(--font-joti-one)",
              // fontSize: "3rem",
              textShadow: "6px 6px 10px rgba(4, 4, 4, 4)",
            }}
          >
            Cachaça Nogueira <br /> Marcante como o nome da família, inesquecível como uma infância no sertão
          </h1>
        </div>
      </section>

      {/* Introdução */}
      <section className="p-6 md:p-12 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-" style={{ fontFamily: "var(--font-radley)" }}>
          Tradição, sabor e história desde 1892
        </h2>
        <p className="text-lg leading-relaxed" style={{ fontFamily: "var(--font-dosis)", fontSize: 20 }}>
          O Engenho está localizado no Vale do Lambedouro, zona rural do município de Viçosa do Ceará, tendo uma distância aproximada de 15 km do centro da cidade até o mesmo. O percurso é feito boa parte em asfalto, contando apenas com 2,5 km de estrada de terra, mas sendo possível o tráfego de vans e micro-ônibus durante todo o ano.
          No trajeto o visitante pode apreciar a paisagem natural e singular da região, enquanto desce a ladeira que liga o centro à zona rural.        </p>
      </section>

      {/* Sobre o Engenho */}
      <section id="sobre" className="p-6 md:p-12 bg-gray-100 border-t-2 border-gray-200">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ fontFamily: "var(--font-radley)" }}>Casa Grande</h2>
        <div className="max-w-4xl mx-auto text-center text-gray-800 space-y-4">
          <Image
            src="/casa-grande.png"
            alt="Sobre o Engenho Nogueira"
            className="rounded-lg mb-4"
            width={800}
            height={400} />
          <p style={{ fontFamily: "var(--font-borel)", fontSize: 23 }}>Desde os meados do século XX, a família Nogueira mantém a tradição de produzir cachaça artesanal de alambique e de cuidar da história singular desta produção de aguardente.
            O processo de produção artesanal, a vivência da cultura sertaneja e os sabores da culinária tradicional do sertão são atrativos que proporcionam aos visitantes momentos inesquecíveis.
            A casa grande, como é conhecida pela família, é o contato com um pedaço da história de Viçosa do Ceará, contada através da arquitetura, culinária e agricultura familiar mantida há 111 anos.</p>
        </div>

      </section>

      {/*Seção de Produtos */}
      <Products />

      {/*Seção de Visitas */}
      <Visit />

      {/* Seção de contato */}
      <Contact />

      {/* Rodapé */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} Engenho Nogueira — Todos os direitos reservados.
      </footer>
    </main>
  );
}
