// components/Contato.tsx
import { AiFillTikTok } from "react-icons/ai";
import { FaWhatsappSquare, FaInstagramSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const Contact = () => {
    return (
        <section id="contato" className="bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Contato e mais</h2>
                <p className="text-gray-700 mb-6">Fale conosco ou acompanhe nas redes sociais:</p>

                <div className="flex justify-center flex-wrap gap-6">
                    {process.env.NEXT_PUBLIC_WHATSAPP_URL && (
                        <Link href={process.env.NEXT_PUBLIC_WHATSAPP_URL} target="_blank">
                            <div className="bg-gray-100 p-4 rounded-full shadow hover:scale-110 transition">
                                <FaWhatsappSquare size={40} color="#25D366" />
                            </div>
                        </Link>
                    )}

                    {process.env.NEXT_PUBLIC_INSTAGRAM_URL && (
                        <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank">
                            <div className="bg-gray-100 p-4 rounded-full shadow hover:scale-110 transition">
                                <FaInstagramSquare size={40} color="#25D366" />
                            </div>
                        </Link>
                    )}
                    {process.env.NEXT_PUBLIC_FACEBOOK_URL &&
                        <Link href={process.env.NEXT_PUBLIC_FACEBOOK_URL} target="_blank">
                            <div className="bg-gray-100 p-4 rounded-full shadow hover:scale-110 transition">
                                <FaFacebookSquare size={40} color="#25D366" />
                            </div>
                        </Link>
                    }
                    {process.env.NEXT_PUBLIC_YOUTUBE_URL && (
                        <Link href={process.env.NEXT_PUBLIC_YOUTUBE_URL} target="_blank">
                            <div className="bg-gray-100 p-4 rounded-full shadow hover:scale-110 transition">
                                <FaYoutube size={40} color="#25D366" />
                            </div>
                        </Link>
                    )}
                    {process.env.NEXT_PUBLIC_TIKTOK_URL && (
                        <Link href={process.env.NEXT_PUBLIC_TIKTOK_URL} target="_blank">
                            <div className="bg-gray-100 p-4 rounded-full shadow hover:scale-110 transition">
                                <AiFillTikTok size={40} color="#25D366" />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
