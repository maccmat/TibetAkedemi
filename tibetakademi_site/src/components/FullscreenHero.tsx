
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import MarqueeText from './MarqueeText'; // Import MarqueeText

const FullscreenHero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white relative overflow-hidden">
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Erasmus Projeleriyle Geleceğe Köprü Kuruyoruz
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Sosyal yardım ve dayanışma projelerimizle Avrupa'dan katılımcılarla birlikte çalışıyor, fark yaratıyoruz.
        </p>

        {/* Marquee Slogan Section */}
        <div className="w-full max-w-4xl mx-auto my-8">
          <MarqueeText 
            text="Avrupa Fırsatları • Kültürlerarası Etkileşim • Sosyal Sorumluluk • Gönüllülük Projeleri • Gençlik Değişimleri • Yenilikçi Yaklaşımlar"
            className="text-gray-400"
          />
        </div>

        <div className="space-x-4">
          <Link href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition-colors duration-300 transform hover:scale-105">
            Projelerimizi Keşfedin
          </Link>
          <Link href="/contact"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Bize Ulaşın
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <svg className="w-8 h-8 text-gray-400 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default FullscreenHero;

