'use client';
// import DraggableBox from '@/components/buttom';
import React from 'react';

export default function RestaurantPage() {

  return (
    <main className="max-full mx-auto p-4 text-gray-900 bg-emerald-800">
      {/* <DraggableBox /> */}
      <h1 className="md:text-4xl text-3xl font-bold text-center mb-6" style={{ fontFamily: "var(--font-radley)" }}>
        Cardápio do Restaurante
      </h1>

      <div className='max-w-3xl mx-auto bg-white p-2 rounded-lg shadow-lg'>
        <div className='p-4 border-2 border-gray-400 rounded-lg'>

          {/* Entradas */}
          <section className="mb-6 border-b-2 border-gray-300 p-4 rounded-lg">
            <h2 className="text-2xl text-center font-semibold mb-2 border-b-2" >Entradas</h2>
            <ul className="space-y-1">
              <li className="flex justify-between"><span>Calabresa Flambada</span><span>R$25,00</span></li>
              <li className="flex justify-between"><span>Macaxeira frita</span><span>R$20,00</span></li>
              <li className="flex justify-between"><span>Batata frita</span><span>R$15,00</span></li>
              <li className="flex justify-between"><span>Ovo de codorna</span><span>R$15,00</span></li>
              <li className="flex justify-between"><span>Queijo com orégano</span><span>R$17,00</span></li>
              <li className="flex justify-between"><span>Queijo com mel</span><span>R$17,00</span></li>
              <li className="flex justify-between"><span>Paçoca</span></li>
            </ul>
          </section>

          {/* Guarnições */}
          <section className="mb-6 border-b-2 border-gray-300 p-4 rounded-lg">
            <h2 className="text-2xl text-center font-semibold mb-2 border-b-2">Guarnições</h2>
            <ul className="space-y-1">
              <li className="flex justify-between"><span>Arroz</span><span>R$12,00</span></li>
              <li className="flex justify-between"><span>Feijão</span><span>R$12,00</span></li>
              <li className="flex justify-between"><span>Fava</span><span>R$12,00</span></li>
              <li className="flex justify-between"><span>Farofa</span><span>R$5,00</span></li>
              <li className="flex justify-between"><span>Salada</span><span>R$5,00</span></li>
              <li className="flex justify-between"><span>Pirão</span><span>R$10,00</span></li>
            </ul>
          </section>

          {/* Refeições */}
          <section className="mb-6 border-b-2 border-gray-300 p-4 rounded-lg">
            <h2 className="text-2xl text-center font-semibold mb-2 border-b-2">Refeições</h2>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Galinha Caipira</span>
                <span className="block text-sm text-gray-600">Arroz, feijão ou fava, pirão, salada e farofa</span>
                <span className="block">4 Pessoas: <b>R$140,00</b> | 2 Pessoas: <b>R$80,00</b></span>
              </li>
              <li>
                <span className="font-semibold">Pato à Cabidela</span>
                <span className="block text-sm text-gray-600">Arroz, feijão ou fava, farofa e salada</span>
                <span className="block">4 Pessoas: <b>R$150,00</b> | 2 Pessoas: <b>R$85,00</b></span>
              </li>
              <li>
                <span className="font-semibold">Porco Assado</span>
                <span className="block text-sm text-gray-600">Arroz, feijão ou fava, farofa e salada</span>
                <span className="block">4 Pessoas: <b>R$130,00</b> | 2 Pessoas: <b>R$75,00</b></span>
              </li>
              <li>
                <span className="font-semibold">Assado de Panela</span>
                <span className="block text-sm text-gray-600">Arroz, feijão ou fava, farofa e salada</span>
                <span className="block">4 Pessoas: <b>R$130,00</b> | 2 Pessoas: <b>R$75,00</b></span>
              </li>
            </ul>
          </section>
        </div>

      </div>

      <div className='max-w-3xl mx-auto bg-white p-2 rounded-lg shadow-lg mt-8'>
        <div className='p-4 border-2 border-gray-400 rounded-lg'>

          {/* Bebidas */}
          <section className="mb-6 border-b-2 border-gray-300 p-4 rounded-lg">
            <h2 className="text-2xl text-center font-semibold mb-2 border-b-2">Bebidas</h2>
            <ul className="space-y-1">
              <li className="flex justify-between"><span>Água Mineral</span><span>R$3,00</span></li>
              <li className="flex justify-between"><span>Água com gás</span><span>R$4,00</span></li>
              <li className="flex justify-between"><span>Refrigerante (lata)</span><span>R$6,00</span></li>
              <li className="flex justify-between"><span>Refrigerante (1l)</span><span>R$10,00</span></li>
              <li className="flex justify-between"><span>Jarra de Suco</span><span>R$12,00</span></li>
              <li className="flex justify-between"><span>Suco (copo)</span><span>R$6,00</span></li>
              <li className="flex justify-between"><span>Heineken (330ml)</span><span>R$12,00</span></li>
              <li className="flex justify-between"><span>Brahma (350ml)</span><span>R$7,00</span></li>
            </ul>
          </section>

          {/* Drinks */}
          <section className="mb-6 border-b-2 border-gray-300 p-4 rounded-lg">
            <h2 className="text-2xl text-center font-semibold mb-2 border-b-2">Drinks</h2>
            <ul className="space-y-1">
              <li className="flex justify-between"><span>Caipirinha Tradicional</span><span>R$10,00</span></li>
              <li className="flex justify-between"><span>Batida Cremosa</span><span>R$12,00</span></li>
            </ul>
          </section>

          {/* Sobremesa */}
          <section className="mb-6 border-b-2 border-gray-300 p-4 rounded-lg">
            <h2 className="text-2xl text-center font-semibold mb-2 border-b-2">Sobremesa</h2>
            <ul className="space-y-1">
              <li className="flex justify-between"><span>Doce (porção individual)</span><span>R$7,00</span></li>
            </ul>
            <p className="text-sm text-gray-600 mt-1">** Consultar as opções disponíveis. **</p>
          </section>
        </div>
      </div>
      <p className="text-center text-sm text-gray-700 mt-4">Obs: Cobramos taxa de 10%</p>
    </main>
  );
}
