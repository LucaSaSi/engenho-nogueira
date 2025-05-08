import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 scroll-smooth">
      <Header />

      {/* Banner */}
      <section className="pt-20 relative h-[60vh] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
            Engenho Nogueira
          </h1>
        </div>
      </section>

      {/* Introdução */}
      <section className="p-6 md:p-12 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Tradição, sabor e história desde 1892
        </h2>
        <p className="text-lg leading-relaxed">
          Diretamente do Vale do Lambedouro em Viçosa do Ceará, o Engenho Nogueira mantém viva a arte da produção artesanal de cachaça, herdada há gerações. Conheça nossos produtos e venha visitar essa história viva do sertão.
        </p>
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
          <p>
            Fundado há mais de 130 anos, o Engenho Nogueira é um símbolo de tradição no coração de Viçosa do Ceará, localizado na região do Vale do Lambedouro. A produção de cachaça artesanal é feita com esmero e respeito às técnicas passadas por gerações da família.
          </p>
          <p>
            Com equipamentos que preservam o estilo tradicional e um ambiente que respira história, o Engenho é muito mais que um local de produção — é uma experiência cultural e sensorial.
          </p>
          <p>
            Todo o processo é feito de forma artesanal, desde o corte da cana até o envelhecimento da cachaça. O resultado é um produto genuíno, saboroso e cheio de identidade.
          </p>
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
            <h3 className="text-lg font-semibold mt-2">Cachaça Tradicional</h3>
            <p className="text-sm text-gray-600">Sabor suave, produzida de forma artesanal, direto do alambique.</p>
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
            <p className="text-sm text-gray-600">Envelhecida em tonéis de amendoim, com sabor amadeirado e marcante.</p>
          </div>

          {/* Produto 3 */}
          <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/produto3.png"
              alt="Licor artesanal"
              className="h-100 w-full mx-auto object-cover rounded-lg"
              width={400}
              height={400} />
            <h3 className="text-lg font-semibold mt-2">Licor Caseiro</h3>
            <p className="text-sm text-gray-600">Sabores variados preparados com frutas da região e muito carinho.</p>
          </div>

          {/* Produto 4 */}
          <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/produto4.png"
              alt="Licor artesanal"
              className="h-100 w-full mx-auto object-cover rounded-lg"
              width={400}
              height={400} />
            <h3 className="text-lg font-semibold mt-2">Licor Caseiro</h3>
            <p className="text-sm text-gray-600">Sabores variados preparados com frutas da região e muito carinho.</p>
          </div>

          {/* Produto 5 */}
          <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/produto5.png"
              alt="Licor artesanal"
              className="h-100 w-full mx-auto object-cover rounded-lg"
              width={400}
              height={400} />
            <h3 className="text-lg font-semibold mt-2">Licor Caseiro</h3>
            <p className="text-sm text-gray-600">Sabores variados preparados com frutas da região e muito carinho.</p>
          </div>

          {/* Produto 6 */}
          <div className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300">
            <Image
              src="/produto6.png"
              alt="Licor artesanal"
              className="h-100 w-full mx-auto object-cover rounded-lg"
              width={400}
              height={400} />
            <h3 className="text-lg font-semibold mt-2">Licor Caseiro</h3>
            <p className="text-sm text-gray-600">Sabores variados preparados com frutas da região e muito carinho.</p>
          </div>
        </div>

      </section>

      {/* Visitas */}
      <section id="visitas" className="p-6 md:p-12 bg-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-center">Agende Sua Visita</h2>
        <p className="text-center text-gray-700">[Informações de visitas e funcionamento]</p>
      </section>

      {/* Contato */}
      <section id="contato" className="p-6 md:p-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Contato</h2>
        <p className="text-center text-gray-700">[WhatsApp, Instagram, Formulário... tudo aqui]</p>
      </section>

      {/* Rodapé */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} Engenho Nogueira — Todos os direitos reservados.
      </footer>
    </main>
  );
}
