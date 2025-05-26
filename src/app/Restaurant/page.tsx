'use client';
// import DraggableBox from '@/components/buttom';
import React from 'react';

export default function RestaurantPage() {

  return (
    <main className="max-full mx-auto p-4 text-gray-900 bg-gradient-to-b from-emerald-800 to-emerald-200 min-h-screen">
      {/* <DraggableBox /> */}
      <h1 className="md:text-5xl text-3xl text-teal-100 font-bold text-center mb-6" style={{ fontFamily: "var(--font-joti-one)" }}>
        Cardápio do Restaurante
      </h1>

      <div className='max-w-3xl mx-auto bg-white p-2 rounded-lg shadow-lg'
        style={{ backgroundImage: "url('/prato.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}

      >
        <div
          className='p-4 rounded-lg bg-white/30 backdrop-blur-sm'
        >

          {/* Entradas */}
          <section className="mb-6 border-b-2 border-gray-300 p-4 rounded-lg">
            <h2 className="text-2xl md:text-gray-900 text-teal-50 text-center font-semibold mb-2 border-b-2 border-gray-900" >Entradas</h2>
            <ul className="space-y-1">
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Calabresa Flambada</span><span className='flex flex-col text-amber-950 font-semibold'>R$25,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Macaxeira frita</span><span className='flex flex-col text-amber-950 font-semibold'>R$20,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Batata frita</span><span className='flex flex-col text-amber-950 font-semibold'>R$15,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Ovo de codorna</span><span className='flex flex-col text-amber-950 font-semibold'>R$15,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Queijo com orégano</span><span className='flex flex-col text-amber-950 font-semibold'>R$17,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Queijo com mel</span><span className='flex flex-col text-amber-950 font-semibold'>R$17,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Paçoca</span></li>
            </ul>
          </section>

          {/* Guarnições */}
          <section className="mb-6 border-b-2 border-gray-300 p-4 rounded-lg">
            <h2 className="text-2xl md:text-gray-900 text-teal-50 text-center font-semibold mb-2 border-b-2 border-gray-900">Guarnições</h2>
            <ul className="space-y-1">
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Arroz</span><span className='flex flex-col text-amber-950 font-semibold'>R$12,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Feijão</span><span className='flex flex-col text-amber-950 font-semibold'>R$12,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Fava</span><span className='flex flex-col text-amber-950 font-semibold'>R$12,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Farofa</span><span className='flex flex-col text-amber-950 font-semibold'>R$5,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Salada</span><span className='flex flex-col text-amber-950 font-semibold'>R$5,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Pirão</span><span className='flex flex-col text-amber-950 font-semibold'>R$10,00</span></li>
            </ul>
          </section>

          {/* Refeições */}
          <section className="mb-6 border-b-2 border-gray-300 p-4 rounded-lg">
            <h2 className="text-2xl md:text-gray-900 text-teal-50 text-center font-semibold mb-2 border-b-2 border-gray-900">Refeições</h2>
            <ul className="space-y-2">
              <li>
                <span className="text-2xl md:text-gray-900 text-teal-400 text-center font-semibold mb-2 border-b-2 border-gray-900">Galinha Caipira</span>
                <span className="block text-sm text-amber-950 font-semibold">Arroz, feijão ou fava, pirão, salada e farofa</span>
                <span className=" flex flex-col text-amber-950 font-semibold">4 Pessoas: R$140,00 <b></b> 2 Pessoas: R$80,00</span>
              </li>
              <li>
                <span className="text-2xl md:text-gray-900 text-teal-400 text-center font-semibold mb-2 border-b-2 border-gray-900">Pato à Cabidela</span>
                <span className="block text-sm text-amber-950 font-semibold">Arroz, feijão ou fava, farofa e salada</span>
                <span className=" flex flex-col text-amber-950 font-semibold">4 Pessoas: R$150,00 <b></b> 2 Pessoas: R$85,00</span>
              </li>
              <li>
                <span className="text-2xl md:text-gray-900 text-teal-400 text-center font-semibold mb-2 border-b-2 border-gray-900">Porco Assado</span>
                <span className="block text-sm text-amber-950 font-semibold">Arroz, feijão ou fava, farofa e salada</span>
                <span className=" flex flex-col text-amber-950 font-semibold">4 Pessoas: R$130,00 <b></b> 2 Pessoas: R$75,00</span>
              </li>
              <li>
                <span className="text-2xl md:text-gray-900 text-teal-400 text-center font-semibold mb-2 border-b-2 border-gray-900">Assado de Panela</span>
                <span className="block text-sm text-amber-950 font-semibold">Arroz, feijão ou fava, farofa e salada</span>
                <span className=" flex flex-col text-amber-950 font-semibold">4 Pessoas: R$130,00 <b></b> 2 Pessoas: R$75,00</span>
              </li>
            </ul>
          </section>
        </div>

      </div>

      <div className='max-w-3xl mx-auto bg-white p-2 rounded-lg shadow-lg mt-8'
        style={{ backgroundImage: "url('/brinde.png')", backgroundSize: 'contain', backgroundPosition: 'center' }}
      >
        <div className='p-4 rounded-lg bg-white/30 backdrop-blur-sm'>

          {/* Bebidas */}
          <section className="mb-6 border-b-2 border-gray-300 p-4 rounded-lg">
            <h2 className="text-2xl md:text-gray-900 text-teal-50 text-center font-semibold mb-2 border-b-2 border-gray-900">Bebidas</h2>
            <ul className="space-y-1">
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Água Mineral</span><span className='flex flex-col text-amber-950 font-semibold'>R$3,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Água com gás</span><span className='flex flex-col text-amber-950 font-semibold'>R$4,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Refrigerante (lata)</span><span className='flex flex-col text-amber-950 font-semibold'>R$6,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Refrigerante (1l)</span><span className='flex flex-col text-amber-950 font-semibold'>R$10,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Jarra de Suco</span><span className='flex flex-col text-amber-950 font-semibold'>R$12,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Suco (copo)</span><span className='flex flex-col text-amber-950 font-semibold'>R$6,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Heineken (330ml)</span><span className='flex flex-col text-amber-950 font-semibold'>R$12,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Brahma (350ml)</span><span className='flex flex-col text-amber-950 font-semibold'>R$7,00</span></li>
            </ul>
          </section>

          {/* Drinks */}
          <section className="mb-6 border-b-2 border-gray-300 p-4 rounded-lg">
            <h2 className="text-2xl md:text-gray-900 text-teal-50 text-center font-semibold mb-2 border-b-2 border-gray-900">Drinks</h2>
            <ul className="space-y-1">
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Caipirinha Tradicional</span><span className='flex flex-col text-amber-950 font-semibold'>R$10,00</span></li>
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Batida Cremosa</span><span className='flex flex-col text-amber-950 font-semibold'>R$12,00</span></li>
            </ul>
          </section>

          {/* Sobremesa */}
          <section className="mb-6 border-b-2 border-gray-300 p-4 rounded-lg">
            <h2 className="text-2xl md:text-gray-900 text-teal-50 text-center font-semibold mb-2 border-b-2 border-gray-900">Sobremesa</h2>
            <ul className="space-y-1">
              <li className="flex justify-between md:text-gray-800 text-teal-50 font-semibold"><span>Doce (porção individual)</span><span className='flex flex-col text-amber-950 font-semibold'>R$7,00</span></li>
            </ul>
            <p className="text-sm text-gray-100 mt-1">** Consultar as opções disponíveis. **</p>
          </section>
        </div>
      </div>
      <p className="text-center text-sm text-gray-800 mt-4">Obs: Cobramos taxa de 10%</p>
    </main>
  );
}
