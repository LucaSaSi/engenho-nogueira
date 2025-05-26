'use client'
import Image from "next/image";
// import DraggableButton from "@/components/buttom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const produtos = [
    {
        nome: "Cachaça Nogueira Prata",
        descricao: "Destilada em 2022, adormecida em dorna. Notas doces de cana-de-açúcar.",
        preco: "R$28,00",
        volume: "700ml",
        teor: "40% G º L",
        caixa: "R$336,00 (12 unid.)",
        imagem: "/produto-prata.png",
    },
    {
        nome: "Cachaça Nogueira Pau D’Arco",
        descricao: "Sabor herbal com toque cítrico e noz moscada. Ouro, envelhecida 1 ano em tonel de 700L.",
        preco: "R$35,00",
        volume: "700ml",
        teor: "40% G º L",
        caixa: "R$420,00 (12 unid.)",
        imagem: "/produto-pau-darco.png",
    },
    {
        nome: "Cachaça Nogueira Carvalho Europeu",
        descricao: "Sabor suave com notas de coco, baunilha e mel. Premium, 1 ano em barrica de 200L.",
        preco: "R$45,00",
        volume: "700ml",
        teor: "40% G º L",
        caixa: "R$540,00 (12 unid.)",
        imagem: "/produto-carvalho.png",
    },
    {
        nome: "Cachaça Nogueira Sabiá",
        descricao: "Exclusiva de Viçosa do Ceará. Toques florais no aroma, contragosto marcante. Ouro, 2 anos em tonel de 700L.",
        preco: "R$40,00",
        volume: "700ml",
        teor: "40% G º L",
        caixa: "R$480,00 (12 unid.)",
        imagem: "/produto-sabia.png",
    },
    // produto de maracujá
    {
        nome: "Cachaça Nogueira Maracujá",
        descricao: "Sabor tropical com notas de maracujá. Ouro, 1 ano em tonel de 700L.",
        preco: "R$35,00",
        volume: "500ml",
        teor: "40% G º L",
        caixa: "R$420,00 (12 unid.)",
        imagem: "/produto-maracuja.png",
    },
    {
        nome: "Licor Bombom",
        descricao: "Sabores: Café, Chocolate, Morango, Menta. Validade: Indeterminada.",
        preco: "R$30,00",
        volume: "350ml",
        teor: "40% G º L",
        caixa: "R$360,00 (12 unid.)",
        imagem: "/produto-licor-bombom.png",
    },
];

const clientes = [
    "Armazém Real (Fortaleza)",
    "Cachaçaria São Francisco (Fortaleza)",
    "Artesanato Sabor Serrano (Fortaleza)",
    "Cachaçaria Palassi (Fortaleza)",
    "Restaurante Giulietta (Viçosa)",
    "Mercadinho Ponto da Economia (Viçosa)",
    "Mercantil O Ricardo (Viçosa)",
    "Gratti Restaurante (Tianguá)",
    "Café com Rosas (São Benedito)",
    "Casa Vasto (Porto Alegre-RS)",
    "ABC Bar Clube (São Luiz – Maranhão)",
];

export default function AllProductsPage() {
    return (
        <main className="w-full mx-auto p-4 bg-emerald-800">
            {/* Botão flutuante para mobile */}
            {/* <DraggableButton /> */}
            {/* section apresentação */}
            <section
                className="mb-8 w-full h-130 bg-cover bg-center rounded-lg"
                style={{
                    backgroundImage: "url('/thamb.png')", backgroundSize: "cover"
                    , opacity: "0.8"

                }}>
                {/* div da logo */}
                <div className="flex  flex-col items-center justify-center-safe h-1/2"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)"

                    }}>
                    <Image

                        src={"/logo.png"}
                        width={400} height={300}
                        alt="cachaça ao copo" />
                    <h1 className="font-bold text-3xl" style={{ fontFamily: "var(--font-dosis)" }}>DESDE 1892</h1>
                </div>
                {/* div do texto */}
                <div className="flex  flex-col items-center justify-end-safe h-1/2 bg-opacity-50"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)"

                    }}>
                    <p className="md:text-3xl text-center text-lg mb-8" style={{ fontFamily: "var(--font-dodis)", fontStyle: "italic" }}>
                        Marcante como o nome da família, <br /> inesquecível como uma infância no sertão.
                    </p>
                </div>
            </section>
            {/* section brinde */}
            <section
                className="flex flex-col mb-8 h-130 w-full justify-center-safe rounded-md"
                style={{
                    backgroundImage: "url('/fundobrinde.png')",
                    backgroundPositionX: "center",
                    backgroundSize: "cover",
                    backgroundPositionY: "center",
                    opacity: "0.8"

                }}>
                {/* div parágrafo */}

                <div className="flex  flex-col items-center justify-center h-1/2"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)"
                    }}
                >
                    <p className="text-center text-whith text-lg mb-8 md:w-1/2 md:text-2xl md:font-semibold" style={{ fontFamily: "var(--font-dosis)", fontStyle: "italic" }}>
                        Desde os meados do século XIX, a família Nogueira mantém a tradição de produzir cachaça
                        artesanal em seu engenho localizado em Viçosa do Ceará. Produzida de forma familiar, a
                        cachaça Nogueira carrega os sabores e cultura do sertão.
                    </p>
                </div>
                {/* div infos */}
                <ul className="flex flex-col justify-center-safe h-1/2 md:text-2xl sm:text-lg text-gray-50 p-4" style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)"

                }}>
                    <li>
                        <b>Razão Social:</b> Jorge Mauricio Mapurunga Nogueira - ME
                    </li>
                    <li>
                        <b>Nome Fantasia:</b> Cachaça Nogueira
                    </li>
                    <li>
                        <b>Endereço:</b> Lagoa do Barro dos Nogueiras, Lambedouro, Viçosa do Ceará
                    </li>
                    <li>
                        <b>Email:</b> cachaçanogueira_lambedouro@hotmail.com
                    </li>
                    <li>
                        <b>MAPA:</b> CE 001266-1.000001
                    </li>
                    <li>
                        <b>CNPJ:</b> 02.148.806/0001-57
                    </li>
                </ul>
            </section>
            {/* section produtos */}
            <section className="mb-8 pb-4 border-b-2 rounded-l-md rounded-r-md">
                <h2 className="text-5xl font-semibold mb-4 border-b-2 h-15 rounded-l-lg rounded-r-lg text-center">Catálogo</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {produtos.map((produto, idx) => (
                        <div
                            key={idx}
                            className="bg-lime-100 rounded-xl shadow-md p-4 flex flex-col items-center text-center"
                        // style={{
                        //     backgroundColor: "rgba(0, 0, 0, 0.5)"

                        // }}
                        >
                            <div className="mb-2 w-full flex justify-center hover:scale-95 transition-transform duration-300">
                                {/* Substitua pelo caminho correto da imagem em /public */}
                                <Image
                                    src={produto.imagem}
                                    alt={produto.nome}
                                    width={180}
                                    height={180}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <h3 className="text-2xl text-emerald-900 font-bold mb-1" style={{ fontFamily: "var(--font-radley)" }}>{produto.nome}</h3>
                            <p className="text-sm text-gray-800 mb-1">{produto.descricao}</p>
                            <div className="text-sm text-gray-600 mb-1">
                                Volume: {produto.volume} | Teor: {produto.teor}
                            </div>
                            <div className="text-gray-100 w-20 bg-emerald-800 border-2 font-bold mb-1">{produto.preco}</div>
                            <div className="text-xs font-semibold text-gray-500">{produto.caixa}</div>
                        </div>
                    ))}
                </div>
            </section>
            {/* section clientes */}
            <section
                className="mb-8 h-130 flex flex-col items-left justify-center gap-4 p-4"
                style={{
                    backgroundImage: "url('/barrisFundo.png')"
                    , backgroundSize: "cover",
                    backgroundPositionY: "center",
                    opacity: "0.8"
                }}>
                <h2 className="text-3xl md:w-1/4 md:text-center text-center border-b-2 font-semibold mb-2">Portfólio de Clientes</h2>
                <ul className="list-disc list-inside md:w-1/4 rounded-2xl text-gray-100 backdrop-blur-sm border-2 border-gray-400 p-4">
                    {clientes.map((cliente, idx) => (
                        <li key={idx}>{cliente}</li>
                    ))}
                </ul>
            </section>
            {/* section contato */}
            <section className="flex itens-center flex-col text-center h-80 drop-shadow-lg bg-emerald-900 rounded-lg"
                style={{
                    backgroundImage: "url('/thamb.png')",
                    backgroundSize: "cover",
                    backgroundPositionY: "center",
                    opacity: "0.8",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)"
                }}
            >
                <div className="backdrop-blur-xs h-full  flex flex-col border-gray-400 justify-center gap-2">
                    <p className="italic mb-2 text-2xl ">
                        “Cada cachaça deste catálogo é fruto de tradição e paixão.”
                    </p>
                    <span >
                        {/* Contato:{' '} */}
                        <FaInstagram className="inline text-cyan-400" />
                        <a
                            href="https://www.instagram.com/engenhonogueira"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-100 underline text-lg sm:text-sm"
                        >
                            @engenhonogueira
                        </a>
                    </span>
                    {/* {' '}
                        •{' '} */}
                    <span>
                        <FaWhatsapp className="inline text-green-600" />
                        <a
                            href="https://wa.me/558896973991"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-100 underline text-lg sm:text-sm"
                        >
                            (88) 9 9697-3991
                        </a>
                    </span>
                    <div className="flex flex-col items-center ">
                        <p className="text-center text-sm text-gray-400 mt-4">
                            Obrigado por brindar conosco!
                        </p>
                        <Image src={"/logo.png"} alt={"logo noguiera"} width={200} height={200} />
                    </div>
                </div>
            </section>

        </main>
    );
}
