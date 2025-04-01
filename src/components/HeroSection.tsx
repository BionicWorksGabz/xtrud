"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage = "/images/hero-bg.jpg",
}: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="hero-background">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            style={{ objectFit: "cover", opacity: 0.5 }}
            priority
          />
        )}
      </div>
      
      <div className="container-custom">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          
          {ctaText && ctaLink && (
            <a href={ctaLink} className="hero-cta">
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
