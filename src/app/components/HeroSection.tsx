'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const t = useTranslations('Hero');
  const facts = t.raw('facts') as string[];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [facts.length]);

  return (
    <div className="min-h-screen flex flex-col justify-between mt-6">
      {/* Content Container */}
      <div className="w-full px-6 sm:px-16 lg:px-32 pt-12 flex flex-col gap-6 max-w-5xl mx-auto">
        <h1 className="Btext text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          {t('title')}
        </h1>
        <h2 className="Btext text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-700">
          {t('subtitle')}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="button-primary w-full sm:w-auto px-8 py-3 text-lg rounded-md">
            {t('btn1')}
          </button>
          <button className="button-secondary w-full sm:w-auto px-8 py-3 text-lg rounded-md">
            {t('btn2')}
          </button>
        </div>
      </div>

      {/* Fun Fact Section */}
      <div className="w-full bg-gray-100 py-16 flex justify-center px-6 sm:px-16 lg:px-32 mt-6 sm:mt-10">
        <p className="fact max-w-4xl text-center text-xl sm:text-3xl lg:text-4xl text-gray-900 font-medium transition-opacity duration-500">
          {facts[currentIndex]}
        </p>
      </div>
    </div>
  );
}
