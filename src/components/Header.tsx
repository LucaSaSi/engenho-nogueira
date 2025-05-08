// src/components/Header.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-green-100 shadow-md fixed top-0 w-full z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Image
                    src="/logo.png"
                    alt="logo engenho nogueira"
                    width={200}
                    height={200}
                    className="rounded-full w-40 h-20 md:w-50 md:h-25"
                />

                {/* Botão do menu para dispositivos móveis */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>

                {/* Navegação */}
                <nav
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } absolute top-full left-0 w-full bg-green-100 md:static md:flex md:space-x-4 md:w-auto`}
                >
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.google.com/maps/dir//Lambedouro,+Vi%C3%A7osa+do+Cear%C3%A1+-+CE,+62300-000+@-3.581498,-41.022260/@-3.5818372,-41.0221632,17z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x7eb41bdc35ffe85:0xcde5000c89462cfe!3e0"
                        className="block font-semibold text-2xl text-gray-700 hover:text-green-800 transition py-2 px-4 md:inline"
                    >
                        Localização
                    </a>
                    <Link href="#sobre" className="block font-semibold text-2xl text-gray-700 hover:text-green-800 transition py-2 px-4 md:inline">
                        Sobre
                    </Link>
                    <Link href="#produtos" className="block font-semibold text-2xl text-gray-700 hover:text-green-800 transition py-2 px-4 md:inline">
                        Produtos
                    </Link>
                    <Link href="#visitas" className="block font-semibold text-2xl text-gray-700 hover:text-green-800 transition py-2 px-4 md:inline">
                        Visitas
                    </Link>
                    <Link href="#contato" className="block font-semibold text-2xl text-gray-700 hover:text-green-800 transition py-2 px-4 md:inline">
                        Contato
                    </Link>
                </nav>
            </div>
        </header>
    );
}
