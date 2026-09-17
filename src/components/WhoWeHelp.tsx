import React from 'react'

const WhoWeHelp = () => {
  return (
    <section className="w-full px-8 md:pl-[6vw] lg:px-[8vw] py-16 md:py-24 lg:py-32" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Heading */}
      <h2 className="font-serif leading-[1.2] mb-16 md:mb-24 lg:w-[45%]"
          style={{ fontSize: "clamp(2.2rem, 3.2vw, 4.8rem)", color: "var(--bg-dark)" }}>
        Who I Work{" "}
        <em className="font-serif italic font-[400]" style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
          With
        </em>
      </h2>
      

      {/* 3 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-5 md:pl-18 lg:pl-[10.5vw]">
        
        {/* Column 1 */}
        <div className="flex flex-col">
          <div className="relative w-full aspect-[3/2] lg:aspect-square bg-gray-100 overflow-hidden rounded-lg">
            <img 
              src="https://imageio.forbes.com/specials-images/imageserve/6687fc38b3cadb73515dc071/A-Frustrated-Beautiful-Asian-Businesswoman-With-Glasses-Using-Her-Computer-While/0x0.jpg" 
              alt="Professional looking out" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
          <h3 className="font-serif text-[1.4rem] md:text-[1.79rem] mt-6 lg:mt-10" style={{ color: "var(--color-primary)" }}>Overthinking Professionals</h3>
          <p className="font-sans font-light text-[15px] md:text-[17px] leading-[1.6] mt-2" 
             style={{ color: "var(--text-main)" }}>
            Feeling functional on the outside while quietly struggling with constant worry, panic, or a sense that you're always bracing for something to go wrong.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col">
          <div className="relative w-full aspect-[3/2] lg:aspect-square bg-gray-100 overflow-hidden rounded-lg">
            <img 
              src="https://cdn.openviowebsites.com/source/sites/90188310-0e23-4951-be7e-3c9938c250e9/images/stress-burnout-therapy-thumb.webp" 
              alt="Burnout and stress" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
          <h3 className="font-serif text-[1.4rem] md:text-[1.79rem] mt-6 lg:mt-10" style={{ color: "var(--color-primary)" }}>Burnout & Stress Recovery</h3>
          <p className="font-sans font-light text-[15px] md:text-[17px] leading-[1.6] mt-2" 
             style={{ color: "var(--text-main)" }}>
            Designed for entrepreneurs, creatives, and high-achieving adults exhausted by internal pressure, perfectionism, and high-stress environments.
          </p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
          <div className="relative w-full aspect-[3/2] lg:aspect-square bg-gray-100 overflow-hidden rounded-lg">
            <img 
              src="https://familystrongcounseling.com/wp-content/uploads/2025/09/portrait-young-woman-with-low-self-esteem-sitting-by-window-home-1.jpg" 
              alt="Trauma healing" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
          <h3 className="font-serif text-[1.4rem] md:text-[1.79rem] mt-6 lg:mt-10" style={{ color: "var(--color-primary)" }}>Trauma & Past Experiences</h3>
          <p className="font-sans font-light text-[15px] md:text-[17px] leading-[1.6] mt-2" 
             style={{ color: "var(--text-main)" }}>
            Support for navigating single-incident trauma or long-standing patterns from childhood that continue to affect your confidence and safety today.
          </p>
        </div>

      </div>
    </section>
  )
}

export default WhoWeHelp