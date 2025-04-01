import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container-custom">
        <div className="header-content">
          <Link href="/" className="logo">
            <Image 
              src="/images/logo-white.svg" 
              alt="Xtrud Studio Logo" 
              width={120} 
              height={40} 
              priority
            />
          </Link>
          
          <nav className="nav-links">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/projetos" className="nav-link">
              Projetos
            </Link>
            <Link href="/sobre" className="nav-link">
              Sobre
            </Link>
            <Link href="/contato" className="nav-link">
              Contato
            </Link>
          </nav>
          
          <button className="mobile-menu-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
