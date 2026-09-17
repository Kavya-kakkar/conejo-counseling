export default function Hero() {
  return (
    <section className="grid grid-cols-[82%_18%] md:flex md:flex-row overflow-hidden gap-x-4 md:gap-x-0" 
      style={{ backgroundColor: "var(--bg-primary)", minHeight: "85vh" }}>

      {/* Left image - main hero image */}
      <div className="flex flex-col col-span-1 w-full md:w-[34.5%] shrink-0 h-[45vh] md:h-[86vh]">
        <div className="hidden md:block h-11" style={{ backgroundColor: "var(--bg-primary)" }} />
        <img
          src="/images/dr-maya-hero.jpg"
          alt="Dr. Maya Reynolds"
          className="w-full h-full md:flex-1 object-cover object-top rounded-r-lg md:rounded-l-none"
        />
      </div>

      {/* Center content */}
      <div className="col-span-2 flex-1 flex flex-col px-8 md:pl-[6vw] lg:pl-[8vw] md:pr-27 pt-12 md:pt-11 pb-16 md:pb-4 order-first md:order-none">

        {/* Eyebrow - sits at top */}
        <p className="text-[13px] md:text-[15px] font-normal leading-[1.8] tracking-[0.18em] uppercase mb-auto"
          style={{ color: "var(--text-primary)" }}>
          Online & In-Person Therapy in Santa Monica <br className="hidden md:block" />
          & Across California
        </p>

        {/* Bottom content */}
        <div className="flex flex-col gap-6 mb-0">

          {/* H1 */}
          <h1 className="font-serif leading-[1.2]"
            style={{ 
              fontSize: "clamp(2.2rem, 3.2vw, 4.8rem)", 
              color: "var(--text-primary)",
            }}>
            Licensed Clinical Psychologist in Santa Monica, CA for
            <span className="font-serif italic font-[400] block mt-2"
              style={{ 
                color: "var(--color-accent)",
              }}>
              Anxiety, Trauma & Burnout
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-[15px] md:text-[17px] font-light my-10 md:my-8.5"
            style={{ color: "var(--text-muted)" }}>
            Warm, evidence-based therapy for high-achieving adults, professionals, and creatives ready to break free from constant worry, chronic stress, and lingering past experiences.
          </p>

          {/* CTA */}
          <a href="#contact"
            className="inline-block w-fit px-8 py-[12px] rounded-full border transition-colors duration-300 uppercase tracking-[0.12em] text-[0.75rem] font-semibold text-[var(--color-primary)] border-[var(--color-primary)] hover:text-[#F8F6F2] relative overflow-hidden z-0 before:absolute before:inset-0 before:bg-[var(--color-primary)] before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10">
            Schedule an In-Person or Telehealth Session
          </a>

        </div>
      </div>

      {/* Right peeking image */}
      <div className="flex flex-col justify-end col-span-1 w-full lg:w-48 xl:w-32 shrink-0 h-[45vh] md:h-[86vh] lg:h-auto">
        <div className="hidden lg:block h-[36%]" style={{ backgroundColor: "var(--bg-primary)" }} />
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Sunlit neutral space"
          className="w-full h-[32vh] lg:h-full lg:flex-1 object-cover object-center rounded-l-lg lg:rounded-r-none mt-auto lg:mt-0"
        />
      </div>

    </section>
  );
}