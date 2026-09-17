import React from 'react'

const HowWeWork = () => {
  return (
    <section id="approach" className="flex flex-col lg:flex-row justify-between w-full" style={{ backgroundColor: "var(--bg-secondary)" }}>
      {/* Left Content Area */}
      <div className="w-full lg:w-[77%] px-8 md:pl-[6vw] lg:pl-[9vw] pr-8 lg:pr-[4vw] xl:pr-[5vw] pt-24 md:pt-32 pb-24 md:pb-28 flex flex-col justify-center">
        
        {/* Eyebrow */}
        <h3 className="uppercase tracking-[0.18em] text-[12px] md:text-[15px] font-normal leading-[1.8] mb-24 md:mb-32"
            style={{ color: "var(--color-secondary)" }}>
          My Therapeutic Approach
        </h3>

        {/* Heading */}
        <h2 className="font-serif font-light leading-[1.1] mt-6 md:mt-5 mb-12 md:mb-14"
            style={{ fontSize: "clamp(2.5rem, 3.4vw, 4rem)", color: "var(--bg-dark)" }}>
          A Warm, Grounded & Collaborative Approach to Healing
        </h2>

        {/* Mobile Image */}
        <div className="block lg:hidden w-full h-[30vh] md:h-[40vh] mb-12 md:mb-16">
          <img 
            src="https://thumbs.dreamstime.com/b/wooden-desk-sunlit-window-open-book-houseplants-shelves-books-warm-decor-cozy-home-study-reading-nook-interior-396691561.jpg" 
            alt="Desk workspace with laptop and notebook" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* 2 Column Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-8 xl:gap-8 mb-12 md:mb-26">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <p className="uppercase tracking-[0.18em] text-[13px] md:text-[14px] font-[400] leading-[1.8]"
               style={{ color: "var(--bg-dark)" }}>
              Sessions are structured enough to feel supportive, while leaving space for reflection and depth.
            </p>
            <p className="font-sans font-light text-[14px] md:text-[16px] leading-[1.85] tracking-[0.05em]"
               style={{ color: "var(--text-main)" }}>
              I integrate evidence-based methods such as Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented somatic techniques. This allows us to address both the emotional and physiological sides of what you are experiencing.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <p className="font-sans font-light text-[14px] md:text-[16px] leading-[1.85] tracking-[0.05em]"
               style={{ color: "var(--text-main)" }}>
              Trauma and anxiety work is paced carefully, emphasizing safety, stabilization, and daily nervous system regulation. My goal is not just temporary symptom relief, but helping you cultivate deep self-insight, resilience, and a stronger, healthier relationship with yourself over time.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <a href="#about"
          className="inline-block w-fit mt-10 text-[0.75rem] md:text-[13px] tracking-[0.12em] uppercase font-semibold rounded-full border transition-all duration-300 px-6 py-2.5 text-[var(--color-primary)] border-[var(--color-primary)] hover:text-[#F8F6F2] relative overflow-hidden z-0 before:absolute before:inset-0 before:bg-[var(--color-primary)] before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10"
        >
          Learn More About My Approach
        </a>
      </div>

      <div className="hidden lg:block w-full lg:w-[22.5%] h-[60vh] lg:h-auto pt-12 lg:pt-33 pb-49">
        <img 
          src="https://thumbs.dreamstime.com/b/wooden-desk-sunlit-window-open-book-houseplants-shelves-books-warm-decor-cozy-home-study-reading-nook-interior-396691561.jpg" 
          alt="Desk workspace with laptop and notebook" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  )
}

export default HowWeWork