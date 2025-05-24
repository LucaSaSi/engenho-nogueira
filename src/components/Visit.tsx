import React from 'react'

export default function Visit() {
    return (
        <section id="visitas" className="p-6 md:p-12 bg-gray-200">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Quer fazer uma Visita?</h2>

                <div className="mb-4 p-4 bg-white rounded shadow text-gray-800">
                    <h3 className="text-xl font-semibold mb-2">Visitação</h3>
                    <p>
                        A visita é um Tour guiado por nossa casa centenária, instalações do Engenho e degustação de nossos produtos, por uma taxa de <span className="font-bold">R$15,00</span> por pessoa. 🤠🏠⚙🥃
                    </p>
                </div>

                <div className="mb-4 p-4 bg-white rounded shadow text-gray-800">
                    <h3 className="text-xl font-semibold mb-2">Não pagam a taxa de visitação:</h3>
                    <ul className="list-disc list-inside">
                        <li>Crianças até 12 anos 👶🏻</li>
                        <li>Idosos a partir de 65 anos 👨🏻‍🦳</li>
                    </ul>
                </div>

                <div className="mb-4 p-4 bg-white rounded shadow text-gray-800">
                    <h3 className="text-xl font-semibold mb-2">Horários</h3>
                    <li>Sexta, Sábado e Domingo</li>
                    <li>10:00 as 17:00</li>
                </div>
                <div className="text-center mt-6">
                    <a
                        href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-600 transition"
                    >
                        Agende uma visita no WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}
