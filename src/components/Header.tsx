// src/components/Header.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gray-800 shadow-md fixed top-0 w-full z-50">
            <div
                style={{
                    fontFamily: 'var(--font-sigmar)',
                }}
                className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center"
            >
                {/* Logo */}
                <Image
                    src="/logo.png"
                    alt="logo engenho nogueira"
                    width={120}
                    height={120}
                    className="rounded-full w-16 h-16 md:w-32 md:h-16 object-contain"
                />

                {/* Botão do menu para mobile */}
                <button
                    className="md:hidden text-gray-100 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Abrir menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
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
                    className={`
                        ${isMenuOpen ? 'flex' : 'hidden'}
                        flex-col text-center absolute top-full left-0 w-full bg-gray-800 md:static md:flex md:flex-row md:w-auto md:items-center md:space-x-4
                    `}
                >
                    <Link
                        style={{ fontFamily: "var(--font-radley)" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.google.com/maps/dir//Lambedouro,+Vi%C3%A7osa+do+Cear%C3%A1+-+CE,+62300-000+@-3.581498,-41.022260/@-3.5818372,-41.0221632,17z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x7eb41bdc35ffe85:0xcde5000c89462cfe!3e0"
                        className="block text-xl text-gray-100 hover:text-green-400 transition py-2 px-4"
                    >
                        Localização
                    </Link>
                    <Link style={{ fontFamily: "var(--font-radley)" }} href="#produtos" className="block text-xl text-gray-100 hover:text-green-400 transition py-2 px-4">
                        Produtos
                    </Link>
                    <Link style={{ fontFamily: "var(--font-radley)" }} href="#contato" className="block text-xl text-gray-100 hover:text-green-400 transition py-2 px-4">
                        Contato
                    </Link>
                    <Link style={{ fontFamily: "var(--font-radley)" }} href="#visitas" className="block text-xl text-gray-100 hover:text-green-400 transition py-2 px-4">
                        Visitas
                    </Link>
                    <Link style={{ fontFamily: "var(--font-radley)" }} href="#sobre" className="block text-xl text-gray-100 hover:text-green-400 transition py-2 px-4">
                        Sobre
                    </Link>
                   <Link style={{ fontFamily: "var(--font-radley)" }} href="/Restaurant" className="block text-xl text-gray-100 hover:text-green-400 transition py-2 px-4">
                        Restaurante
                    </Link>
                </nav>
            </div>
        </header>
    );
}
