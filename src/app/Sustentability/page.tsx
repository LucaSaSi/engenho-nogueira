'use client';
import Link from "next/link";
import { IoArrowUndoCircle } from "react-icons/io5";

export default function SustentabilidadePage() {
    return (
        <main className="w-full flex flex-col justify-center items-center mx-auto bg-gradient-to-b from-emerald-800 to-emerald-50">
            <Link href="/" className="absolute top-4 left-4 bg-emerald-600 rounded-full w-8 h-8 flex justify-center items-center text-center text-shadow-emerald-500 hover:bg-emerald-300 transition-colors">
                <IoArrowUndoCircle fontSize={30} />
            </Link>
            <h1 className="flex items-center justify-center md:text-3xl text-2xl h-20 w-full bg-gray-700 text-center font-bold text-gray-100"
                style={{ fontFamily: 'var(--font-radley)' }}
            >Sustentabilidade no Engenho Nogueira</h1>

            <section className="mb-8 mt-8 space-y-4 max-w-6xl"
                style={{ backgroundImage: 'url(/engenho-fundo.png)', backgroundSize: 'cover' }}>
                <div className="w-full flex flex-col items-center justify-between md:h-120 backdrop-blur-xs bg-black/50 p-4">

                    <p className=" text-center text-gray-100 text-lg md:text-xl" style={{ fontFamily: 'var(--font-dosis)' }}>
                        O Engenho Nogueira é um exemplo vivo de como tradição e sustentabilidade podem andar juntas. Com práticas que respeitam o meio ambiente e valorizam os recursos naturais da região, o processo produtivo da cachaça é cuidadosamente mantido com baixo impacto ecológico.
                    </p>

                    <ul className="list-none space-y-2 text-green-200 border-2 p-6 border-amber-100 backdrop-blur-sm bg-black/10 rounded-lg">
                        <li>Uso de força animal para movimentar o engenho</li>
                        <li>Aproveitamento completo da cana-de-açúcar</li>
                        <li>Reutilização do bagaço como combustível para o alambique</li>
                        <li>Preservação da mata nativa ao redor do engenho</li>
                        <li>Baixo uso de eletricidade e maquinário moderno</li>
                        <li>Produção local, artesanal e familiar</li>
                    </ul>

                    <p className=" text-center text-gray-100 text-2xl md:text-xl" style={{ fontFamily: 'var(--font-dosis)' }}>
                        Essa forma de produção não apenas mantém viva a cultura do sertão, mas também colabora com o meio ambiente e a economia local.
                    </p>
                </div>
            </section>

            <section className="mb-10 bg-emerald-900 max-w-6xl w-full rounded-lg">
                <div className="w-full h-full backdrop-blur-sm bg-black/50 p-4 flex flex-col items-center justify-center">

                    <h2 className="text-2xl font-semibold mb-4 text-green-700">Assista ao vídeo</h2>

                    <video
                        controls
                        className="w-full h-150 rounded shadow-lg"
                        poster="/brinde.png"
                    >
                        <source src="/video/video-adubo.mp4" type="video/mp4" />
                        Seu navegador não suporta vídeo HTML5.
                    </video>
                </div>
            </section>
        </main>
    );
}
