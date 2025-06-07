"use client";
import { useTranslations } from "next-intl";
import { Map, Fuel, Watch } from "lucide-react";
import { useState, useEffect } from "react";

export default function Cards() {
  const t = useTranslations("Cards");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if device supports touch (mobile)
    setIsTouchDevice(
      typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0)
    );
  }, []);

  const cards = [
    { icon: <Map size={68} />, text: t("card1") },
    { icon: <Fuel size={68} />, text: t("card2") },
    { icon: <Watch size={68} />, text: t("card3") },
  ];

  return (
    <div className="h-screen">
      <div className="w-full h-1/3 cloud flex items-center justify-center">
        <span>{t("title")}</span>
      </div>

      <div className="flex h-screen flex-col">
        <div className="p-16 h-1/4">
          <h2 className="font-bold">{t("sectitle")}</h2>
        </div>

        <div className="h-1/2 flex flex-col sm:flex-row justify-evenly items-center sm:items-stretch gap-4 px-4">
          {cards.map(({ icon, text }, i) => (
            <div
              key={i}
              onClick={() => {
                if (isTouchDevice) {
                  setActiveIndex(activeIndex === i ? null : i);
                }
              }}
              className="text-black card group bg-white h-full sm:w-1/6 w-full flex justify-center items-center cursor-pointer relative"
              style={{ minHeight: 100 }}
            >
              {/* Icon: visible unless (on desktop hover) OR (on mobile and clicked active) */}
              <div
                className={`absolute flex justify-center items-center w-full h-full transition-opacity duration-300
                ${
                  isTouchDevice
                    ? activeIndex === i
                      ? "opacity-0"
                      : "opacity-100"
                    : "group-hover:opacity-0 opacity-100"
                }`}
              >
                {icon}
              </div>

              {/* Text: visible on desktop hover OR on mobile click toggle */}
              <div
                className={`absolute flex justify-center items-center w-full h-full p-4 text-center text-black transition-opacity duration-300
                ${
                  isTouchDevice
                    ? activeIndex === i
                      ? "opacity-100"
                      : "opacity-0"
                    : "group-hover:opacity-100 opacity-0"
                }`}
                style={{ whiteSpace: "normal", wordWrap: "break-word" }}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
