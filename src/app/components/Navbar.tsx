"use client";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const t = useTranslations('Navbar');
  const router = useRouter();
  const pathname = usePathname();
  const isUzbek = pathname.startsWith("/uz");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(64); // default to 64px (16)

  const toggleLanguage = () => {
    const newLang = isUzbek ? "ru" : "uz";
    router.push(`/${newLang}`);
  };

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  return (
    <nav
      ref={navRef}
      style={{
        backgroundColor: "var(--secondary)",
        color: "var(--foreground)",
      }}
      className="fixed top-0 w-full z-50 shadow-md px-4 py-3 flex items-center"
    >
      {/* Center content in container */}
      <div className="flex justify-center w-full md:justify-evenly items-center relative">
        {/* Logo */}
        <div className="text-xl font-bold">GAZBOS</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
            <button className="buff"><div><span>{t('btn1')}</span></div></button>
            <button className="buff"><div><span>{t('btn2')}</span></div></button>
            <button className="buff"><div><span>{t('btn3')}</span></div></button>


          <button
            onClick={toggleLanguage}
            className="buff"
          >
            <div><span>{isUzbek ? 'UZ' : 'RU'}</span></div>
          </button>
        </div>

        {/* Mobile menu toggle (right aligned) */}
        <div className="absolute right-0 md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute left-0 w-full px-4 py-3 flex flex-col gap-3 md:hidden z-40"
          style={{
            top: `${navHeight}px`,
            backgroundColor: "var(--secondary)",
            color: "var(--foreground)",
          }}
        >
          <button onClick={() => setMenuOpen(false)}>{t('btn1')}</button>
          <button onClick={() => setMenuOpen(false)}>{t('btn2')}</button>
          <button onClick={() => setMenuOpen(false)}>{t('btn3')}</button>
          <button
            onClick={() => {
              toggleLanguage();
              setMenuOpen(false);
            }}
            className="px-3 py-1 border rounded text-sm w-max"
            style={{
              backgroundColor: "var(--button-secondary)",
              color: "var(--accent)",
              borderColor: "var(--accent)",
            }}
          >
            {isUzbek ? 'UZ' : 'RU'}
          </button>
        </div>
      )}
    </nav>
  );
}
