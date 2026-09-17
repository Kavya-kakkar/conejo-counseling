import React from 'react'

const IntermediateBanner = () => {
  return (
    <section className="w-full pb-24 md:pb-32 pt-12 md:pt-20" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="grid grid-cols-1 lg:grid-cols-[54fr_46fr] gap-10 lg:gap-16 items-center">
        {/* Left Image Area */}
        <div className="w-full pl-4 md:pl-8 lg:pl-0 h-[50vh] lg:h-[70vh]">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/065/941/093/large_2x/serene-beach-landscape-coastal-grass-ocean-waves-and-sandy-shores-a-tranquil-summer-seascape-evoking-peace-and-relaxation-per-free-photo.jpeg" 
            alt="Serene beach landscape" 
            className="w-full h-full object-cover object-center rounded-l-lg rounded-r-none lg:rounded-l-none lg:rounded-r-lg"
          />
        </div>

        {/* Right Content Area */}
        <div className="w-full flex flex-col justify-center py-12 lg:py-0 px-8 md:px-[6vw] lg:px-0 lg:pr-[8vw]">
          <h3 className="uppercase tracking-[0.15em] text-[11px] font-semibold mb-6" style={{ color: "var(--color-primary)" }}>
            The Philosophy
          </h3>
          <h2 className="font-serif leading-[1.2]"
              style={{ fontSize: "clamp(2rem, 3.3vw, 3.2rem)", color: "var(--bg-dark)" }}>
            Honoring where you&rsquo;ve been{" "}
            <span className="font-serif italic font-[400]" style={{ color: "var(--color-accent)" }}>
              &amp;
            </span>{" "}
            helping shape where you&rsquo;re headed.
          </h2>
          <p className="mt-6 md:mt-8 font-sans font-light text-[15.5px] leading-[1.7]" style={{ color: "var(--text-main)" }}>
            Healing isn't just about analyzing the past—it's about building resilience for the future. By combining deep insight with practical nervous system tools, we create a roadmap that helps you break free from survival mode and step into a life of genuine ease.
          </p>
          <a href="#about"
            className="mt-10 inline-block w-fit px-8 py-[12px] rounded-full border transition-colors duration-300 uppercase tracking-[0.12em] text-[0.75rem] font-semibold text-[var(--color-primary)] border-[var(--color-primary)] hover:text-[#F8F6F2] relative overflow-hidden z-0 before:absolute before:inset-0 before:bg-[var(--color-primary)] before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10">
            Read My Full Approach
          </a>
        </div>
      </div>
    </section>
  )
}

export default IntermediateBanner