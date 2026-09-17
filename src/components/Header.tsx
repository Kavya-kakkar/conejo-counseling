"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-200/60 bg-brand-50/95 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="font-serif text-xl font-medium tracking-tight text-ink md:text-2xl">
          Conejo Valley Family Counseling
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-muted md:flex">
          <Link href="/therapists-newbury-park" className="hover:text-ink">
            Our Team
          </Link>
          <Link href="/couples-therapy" className="hover:text-ink">
            Couples
          </Link>
          <Link href="/children-and-teens" className="hover:text-ink">
            Children & Teens
          </Link>
          <Link href="/contact" className="btn-primary !px-5 !py-2.5 text-xs">
            Book an Appointment
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-brand-200 bg-brand-50 px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-4 text-base font-medium">
            <Link href="/therapists-newbury-park" onClick={() => setOpen(false)}>
              Our Team
            </Link>
            <Link href="/couples-therapy" onClick={() => setOpen(false)}>
              Couples
            </Link>
            <Link href="/children-and-teens" onClick={() => setOpen(false)}>
              Children & Teens
            </Link>
            <Link
              href="/contact"
              className="btn-primary mt-2 text-center"
              onClick={() => setOpen(false)}
            >
              Book an Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}