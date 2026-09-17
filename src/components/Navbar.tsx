"use client";
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }} className="w-full border-b border-transparent">
      <nav className='w-full px-6 md:px-8 lg:px-[4vw] xl:px-[6vw] py-4 lg:py-7 flex items-center justify-between relative z-50'>
        {/* Logo */}
        <div className="shrink-0">
          <a href="/" className="flex flex-col">
            <span className="font-serif text-[1.4rem] md:text-[1.8rem] font-normal leading-tight tracking-wide" style={{ color: "var(--color-primary)" }}>
              Dr. Maya Reynolds, PsyD
            </span>
            <span className="font-sans text-[0.7rem] md:text-[0.9rem] uppercase tracking-[0.3em] mt-1" style={{ color: "var(--text-muted)" }}>
              Therapy in Santa Monica
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-[2vw] text-[13px] tracking-[0.1em] uppercase font-normal"
          style={{ color: "var(--text-primary)" }}>
          <li><a href="#about" className="hover:opacity-60 transition-opacity">About</a></li>
          <li><a href="#specialties" className="hover:opacity-60 transition-opacity">Specialties</a></li>
          <li><a href="#approach" className="hover:opacity-60 transition-opacity">My Approach</a></li>
          <li><a href="#office" className="hover:opacity-60 transition-opacity">Our Office</a></li>
          <li><a href="/faqs" className="hover:opacity-60 transition-opacity">FAQs</a></li>
          <li>
            <a href="#contact"
              className="inline-block w-fit px-6 py-[10px] rounded-full border transition-colors duration-300 uppercase tracking-[0.12em] text-[0.7rem] font-semibold text-[var(--color-primary)] border-[var(--color-primary)] hover:text-[#F8F6F2] relative overflow-hidden z-0 before:absolute before:inset-0 before:bg-[var(--color-primary)] before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10">
              Schedule a Consultation
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`w-6 h-px bg-(--text-primary) transition-all ${menuOpen ? 'rotate-45 translate-y-1.75' : ''}`} />
          <div className={`w-6 h-px bg-(--text-primary) transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-px bg-(--text-primary) transition-all ${menuOpen ? '-rotate-45 -translate-y-1.75' : ''}`} />
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full flex flex-col items-center gap-6 px-10 py-10 z-50 lg:hidden shadow-lg border-t border-(--border-color)"
            style={{ backgroundColor: "var(--bg-primary)" }}>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-[14px] tracking-[0.2em] uppercase" style={{ color: "var(--text-primary)" }}>About</a>
            <a href="#specialties" onClick={() => setMenuOpen(false)} className="text-[14px] tracking-[0.2em] uppercase" style={{ color: "var(--text-primary)" }}>Specialties</a>
            <a href="#approach" onClick={() => setMenuOpen(false)} className="text-[14px] tracking-[0.2em] uppercase" style={{ color: "var(--text-primary)" }}>My Approach</a>
            <a href="#office" onClick={() => setMenuOpen(false)} className="text-[14px] tracking-[0.2em] uppercase" style={{ color: "var(--text-primary)" }}>Santa Monica Office</a>
            <a href="/faqs" onClick={() => setMenuOpen(false)} className="text-[14px] tracking-[0.2em] uppercase" style={{ color: "var(--text-primary)" }}>FAQs</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} 
              className="mt-4 inline-block w-fit px-8 py-[12px] rounded-full border transition-colors duration-300 uppercase tracking-[0.12em] text-[0.75rem] font-semibold text-[var(--color-primary)] border-[var(--color-primary)] hover:text-[#F8F6F2] relative overflow-hidden z-0 before:absolute before:inset-0 before:bg-[var(--color-primary)] before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10">
              Schedule a Consultation
            </a>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar;