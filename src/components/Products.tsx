import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Products() {
    return (
        <section id="produtos" className="p-6 md:p-12 bg-gray-100 w-full border-t-2 border-b-2 border-gray-300">
            <h2 className="text-5xl font-bold mb-4 text-center" style={{ fontFamily: 'var(--font-radley)' }}>Principais Produtos</h2>
            <Swiper
                pagination={{ clickable: false }}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 2000, disableOnInteraction: true }}
                loop={true}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className="w-full h-130"
            >
                {/* Produto 1 */}
                <SwiperSlide>
                    <div style={{ fontFamily: "var(--font-radley)" }} className="h-120  flex flex-col justify-between bg-white rounded-xl shadow-md p-4 text-center ">
                        <Image src="/produto1.png" alt={"Licor de Bombom"}
                            className="h-80 mx-auto object-cover border-2 rounded-lg hover:scale-105 transition-transform duration-300"
                            width={350} height={300} />
                        <h3 className="text-lg font-semibold" >LICOR DE BOMBOM</h3>
                        <p
                            className="text-sm text-gray-700 overflow-hidden text-ellipsis line-clamp-3"
                            style={{ fontFamily: "var(--font-dosis)" }}
                        >
                            Licor de Bombom: A mistura de sabores da cachaça Nogueira e os toques doces dos bombons de morango, menta, café e chocolate
                        </p>
                    </div>
                </SwiperSlide>

                {/* Produto 2 */}
                <SwiperSlide>
                    <div style={{ fontFamily: "var(--font-radley)" }} className="h-120 flex flex-col justify-between bg-white rounded-xl shadow-md p-4 text-center ">
                        <Image src="/produto2.png" alt="Cachaça envelhecida" className="h-80 mx-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300" width={350} height={300} />
                        <h3 className="text-lg font-semibold mt-2">CACHAÇA ENVELHECIDA</h3>
                        <p
                            className="text-sm text-gray-700 h-14 overflow-y-scroll text-ellipsis line-clamp-3"
                            style={{ fontFamily: "var(--font-dosis)" }}
                        >
                            Cachaças envelhecidas: Envelhecidas em toneis de Aroeira, Umburana, Bálsamo, Carvalho Europeu, Pau Darco, Sabiá e Jaqueira. Classificadas em Premium, Extra Premium e Reserva Especial
                        </p>
                    </div>
                </SwiperSlide>

                {/* Produto 3 */}
                <SwiperSlide>
                    <div style={{ fontFamily: "var(--font-radley)" }} className="h-120 flex flex-col justify-between bg-white rounded-xl shadow-md p-4 text-center">
                        <Image src="/produto3.png" alt="Chachaça Prata" className="h-80  mx-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300" width={350} height={300} />
                        <h3 className="text-lg font-semibold mt-2">CACHAÇA PRATA</h3>
                        <p
                            className="text-sm text-gray-700 overflow-hidden text-ellipsis line-clamp-3"
                            style={{ fontFamily: "var(--font-dosis)" }}
                        >
                            Cachaça Prata: O sabor autêntico da cachaça de alambique de cobre produzida em Viçosa do Ceará
                        </p>
                    </div>
                </SwiperSlide>

                {/* Produto 4 */}
                <SwiperSlide>
                    <div style={{ fontFamily: "var(--font-radley)" }} className="h-120 flex flex-col justify-between bg-white rounded-xl shadow-md p-4 text-center">
                        <Image src="/produto4.png" alt="SUVENIR" className="h-80  mx-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300" width={350} height={300} />
                        <h3 className="text-lg font-semibold mt-2">SUVENIR</h3>
                        <p
                            className="text-sm text-gray-700 overflow-hidden text-ellipsis line-clamp-3"
                            style={{ fontFamily: "var(--font-dosis)" }}
                        >
                            Souvernir: Produtos que levam a marca e o slogam da cachaça Nogueira. Como bonés, copos e camisas.
                        </p>
                    </div>
                </SwiperSlide>

                {/* Produto 5 */}
                <SwiperSlide>
                    <div style={{ fontFamily: "var(--font-radley)" }} className="h-120 flex flex-col justify-between bg-white rounded-xl shadow-md p-4 text-center">
                        <Image src="/produto5.png" alt="LICOR TRADICIONAL" className="h-80  mx-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300" width={350} height={300} />
                        <h3 className="text-lg font-semibold mt-2">LICOR TRADICIONAL</h3>
                        <p
                            className="text-sm text-gray-700 overflow-hidden text-ellipsis line-clamp-3"
                            style={{ fontFamily: "var(--font-dosis)" }}
                        >
                            Licores Tradicionais: A mistura de sabores da Cachaça Nogueira e das especiarias, raízes, folhas e frutos tradicionais da região.
                        </p>
                    </div>
                </SwiperSlide>

                {/* Produto 6 */}
                <SwiperSlide>
                    <div style={{ fontFamily: "var(--font-radley)" }} className="h-120 flex flex-col justify-between bg-white rounded-xl shadow-md p-4 text-center">
                        <Image src="/produto6.png" alt="BIBIDA ALCÓOLICA MISTA" className="h-80  mx-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300" width={350} height={300} />
                        <h3 className="text-lg font-semibold mt-2">BEBIDA ALCÓOLICA MISTA</h3>
                        <p
                            className="text-sm text-gray-700 overflow-hidden text-ellipsis line-clamp-3"
                            style={{ fontFamily: "var(--font-dosis)" }}
                        >
                            Bebida: Uma caipirinha pronta que vai surpreender com o sabor das frutas e da cachaça Nogueira, ideal para tomar gelada ou preparar seu drink.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* Link para catálogo */}
            <Link href={"/AllProducts"} className="flex items-center justify-center h-full">
                <span className="text-lg font-bold text-green-700 underline">ver todos</span>
            </Link>
        </section>
    )
}
