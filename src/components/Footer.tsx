import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full flex flex-col" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Main Footer Content */}
      <div className="w-full px-8 md:pl-[6vw] lg:px-[8vw] pt-20 md:pt-24 pb-12 md:pb-20 flex flex-col lg:flex-row justify-between">
        
        {/* Logo & Description */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[35%] lg:max-w-[420px] lg:pr-8 mb-16 lg:mb-0 shrink-0">
          <a href="/" className="flex flex-col items-center lg:items-start">
            <span className="font-serif text-[2.2rem] md:text-[2.5rem] font-normal leading-tight tracking-wide" style={{ color: "var(--color-primary)" }}>
              Dr. Maya Reynolds, PsyD
            </span>
            <span className="font-sans text-[0.7rem] md:text-[0.9rem] uppercase tracking-[0.3em] mt-1 mb-4" style={{ color: "var(--text-muted)" }}>
              Therapy in Santa Monica
            </span>
          </a>
          <p className="font-sans font-light text-[14px] md:text-[15.5px] leading-[1.9]" style={{ color: "var(--text-main)" }}>
            Providing compassionate, evidence-based therapy for high-achieving adults in Santa Monica and online throughout California. Specialized support for burnout, trauma recovery, anxiety, and daily nervous system regulation.
          </p>
        </div>

          
          
        
        
        {/* Menus Container */}
        <div className="flex flex-col md:flex-row justify-between lg:w-[58%] gap-12 md:gap-8 lg:-mt-2 lg:ml-[2vw]">
          
          {/* Navigate */}
          <div className="flex flex-col">
            <h4 className="font-sans uppercase tracking-[0.2em] text-[13px] md:text-[14px] font-[500] mb-4 md:mb-5" style={{ color: "var(--text-primary)" }}>
              Navigate
            </h4>
            <ul className="flex flex-col space-y-[0.4rem]">
              {[
                { name: "Home", path: "/" },
                { name: "About Maya", path: "#about" },
                { name: "Areas of Focus", path: "#focus" },
                { name: "FAQs", path: "/faqs" },
                { name: "Contact", path: "#contact" }
              ].map(link => (
                <li key={link.name}>
                  <a href={link.path} className="font-sans font-light text-[14.5px] hover:text-[var(--color-primary)] transition-colors" style={{ color: "var(--text-main)" }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div className="flex flex-col">
            <h4 className="font-sans uppercase tracking-[0.2em] text-[13px] md:text-[14px] font-[500] mb-4 md:mb-5" style={{ color: "var(--text-primary)" }}>
              Specialties
            </h4>
            <ul className="flex flex-col space-y-[0.4rem]">
              {["Anxiety & Panic Relief", "Trauma & EMDR Therapy", "Professional Burnout", "Somatic Regulation", "Perfectionism & Stress", "Teletherapy Services"].map(link => (
                <li key={link}>
                  <a href="#" className="font-sans font-light text-[14.5px]" style={{ color: "var(--text-main)" }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col lg:max-w-[220px]">
            <h4 className="font-sans uppercase tracking-[0.2em] text-[13px] md:text-[14px] font-[500] mb-4 md:mb-5" style={{ color: "var(--text-primary)" }}>
              Contact
            </h4>
            <div className="font-sans font-light text-[14.5px] leading-[1.7]" style={{ color: "var(--text-main)" }}>
              <p className="mb-5">
                <strong>Office:</strong> 123th Street 45 W,<br/>
                Santa Monica, CA 90401<br/>
                <a href="mailto:contact@drmayareynolds.com">contact@drmayareynolds.com</a><br/>
                (310) 555-0199
              </p>
              <p>
                In-person sessions in Santa Monica &amp; Virtual Telehealth appointments across California.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-8 md:pl-[6vw] lg:px-[8vw] py-4" style={{ backgroundColor: "var(--color-primary)" }}>
        <p className="font-sans font-light text-[12px] md:text-[13px] tracking-wide" style={{ color: "var(--bg-primary)" }}>
          Terms &amp; Conditions | Privacy Policy | Disclaimer | &copy; 2026 Dr. Maya Reynolds Psychology Practice. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer