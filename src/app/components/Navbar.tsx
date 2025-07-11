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
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(64); // default to 64px (16)
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const toggleLanguage = () => {
    setIsLoading(true); // Set loading to true when language switch is initiated
    const newLang = isUzbek ? "ru" : "uz";
    
    // *** KEY CHANGE HERE: Add { scroll: false } to router.push options ***
    router.push(`/${newLang}`, { scroll: false }); 
  };

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  // Effect to hide loading screen once the route change is complete
  useEffect(() => {
    // This effect is still useful for the loading overlay.
    // However, the `scroll: false` option handles the scroll position itself.
    if (isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Adjust this delay as needed, or remove if the loader is tied to a more precise content load event

      return () => clearTimeout(timeout);
    }
  }, [isLoading, pathname]);

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999, // Ensure it's on top of everything
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          {/* Simple loading spinner */}
          <div
            style={{
              border: "4px solid rgba(255, 255, 255, 0.3)",
              borderTop: "4px solid #fff",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <style jsx global>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

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
          <div className="text-xl font-bold text-black">GAZBOS</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <button className="buff">{t('btn1')}</button>
            <span className="textBreaker">|</span>
            <button className="buff">{t('btn2')}</button>
            <span className="textBreaker">|</span>
            <button className="buff">{t('btn3')}</button>
            <span className="textBreaker">|</span>
            <button
              onClick={toggleLanguage}
              className="buff"
              disabled={isLoading} // Disable button while loading
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
              disabled={isLoading} // Disable button while loading
            >
              {isUzbek ? 'UZ' : 'RU'}
            </button>
          </div>
        )}
      </nav>
    </>
  );
}