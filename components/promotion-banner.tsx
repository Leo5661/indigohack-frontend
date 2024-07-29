"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
export type Slide = {
  id: number;
  image: string;
  mainText: string;
  subText: string;
  href?: string;
};

type PromotionBannerProps = {
  slides: Slide[];
};

export function PromotionBanner({ slides }: PromotionBannerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [slides]);

  return (
    <div className="relative h-80 w-full rounded-md">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`relative h-full w-full transition duration-500 ease-out ${index === activeIndex ? "flex" : "hidden"}`}
        >
          <Image
            src={slide.image}
            alt={`Slide background ${index}`}
            fill
            className="absolute z-0 w-full rounded-xl object-cover"
            quality={100}
          />
          <div className="z-10 flex flex-grow flex-col items-center justify-center">
            <div className="font-mono text-6xl text-background">
              {slide.mainText}
            </div>
            <div className="mt-4 font-sans text-xl text-background">
              {slide.subText}
            </div>
            {slide.href ? (
              <Link
                className="mt-6 rounded-md bg-background/45 px-4 py-2 font-sans text-lg text-background/60 hover:cursor-pointer"
                href={slide.href}
              >
                Book now
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <span key={index} className={` ${index === activeIndex ? "" : ""}`} />
        ))}
      </div>
    </div>
  );
}
