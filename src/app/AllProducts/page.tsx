'use client'

import Image from "next/image";

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
        <main className="w-full mx-auto p-4 bg-green-400">
            <h1
                className="text-4xl font-bold mb-2 text-center"
                style={{ fontFamily: "var(--font-radley)" }}
            >
                Cachaça Nogueira
            </h1>
            <p className="text-center text-lg mb-8" style={{ fontFamily: "var(--font-dosis)" }}>
                Marcante como o nome da família, inesquecível como uma infância no sertão.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Sobre</h2>
                <p>
                    Desde os meados do século XIX, a família Nogueira mantém a tradição de produzir cachaça
                    artesanal em seu engenho localizado em Viçosa do Ceará. Produzida de forma familiar, a
                    cachaça Nogueira carrega os sabores e cultura do sertão.
                </p>
                <ul className="mt-2 text-sm text-gray-700">
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

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Produtos</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {produtos.map((produto, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
                        >
                            <div className="mb-2 w-full flex justify-center">
                                {/* Substitua pelo caminho correto da imagem em /public */}
                                <Image
                                    src={produto.imagem}
                                    alt={produto.nome}
                                    width={180}
                                    height={180}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-bold mb-1">{produto.nome}</h3>
                            <p className="text-sm mb-1">{produto.descricao}</p>
                            <div className="text-sm text-gray-700 mb-1">
                                Volume: {produto.volume} | Teor: {produto.teor}
                            </div>
                            <div className="text-green-700 font-semibold mb-1">{produto.preco}</div>
                            <div className="text-xs text-gray-500">{produto.caixa}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Portfólio de Clientes</h2>
                <ul className="list-disc list-inside text-gray-700">
                    {clientes.map((cliente, idx) => (
                        <li key={idx}>{cliente}</li>
                    ))}
                </ul>
            </section>

            <section className="mb-8 text-center">
                <p className="italic mb-2">
                    “Cada cachaça deste catálogo é fruto de tradição e paixão.”
                </p>
                <div className="flex flex-col items-center gap-2">
                    <span>
                        Contato:{' '}
                        <a
                            href="https://www.instagram.com/engenhonogueira"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 underline"
                        >
                            @engenhonogueira
                        </a>
                        {' '}
                        •{' '}
                        <a
                            href="https://wa.me/558896973991"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-700 underline"
                        >
                            (88) 9 9697-3991
                        </a>
                    </span>
                </div>
            </section>

            <p className="text-center text-sm text-gray-500 mt-8">
                Obrigado por brindar conosco!
            </p>
        </main>
    );
}
