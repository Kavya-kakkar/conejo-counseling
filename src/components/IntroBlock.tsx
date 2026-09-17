import React from 'react'

const IntroBlock = () => {
  return (
    <section id="about" className="flex flex-col lg:flex-row items-center w-full pt-16 lg:pt-32 pb-8 lg:pb-0" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Left Content Area */}
      <div className="w-full lg:w-[70%] px-8 md:pl-[6vw] lg:pl-[9vw] pr-8 lg:pr-24 pb-20 lg:pb-0 flex flex-col justify-center">
        
        {/* H2 Heading */}
        <h2 className="font-serif leading-[1.2] mb-8"
            style={{ fontSize: "clamp(2.2rem, 3.2vw, 4.8rem)", color: "var(--bg-dark)" }}>
          You&rsquo;re high-achieving and capable, but internally feeling exhausted and overwhelmed.
        </h2>

        {/* 2-Column Text Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-4">
          
          {/* Left Text Column */}
          <div className="flex flex-col gap-5">
            <h3 className="uppercase tracking-[0.05em] text-[12px] md:text-[15px] font-normal leading-[1.8]"
                style={{ color: "var(--color-secondary)" }}>
              At Dr. Maya Reynolds Psychology Practice, we help you find your ground.
            </h3>
            <p className="font-sans font-light text-[15px] md:text-[18px] leading-[1.5]"
               style={{ color: "var(--text-primary)" }}>
              Many of the adults I work with are thoughtful, successful, and self-aware&mdash;yet quietly struggle with constant overthinking, body tension, or a sense of always bracing for something to go wrong. Therapy is a space to slow down, process, and reconnect.
            </p>
          </div>

          {/* Mobile Image (Between paragraphs) */}
          <div className="flex md:hidden w-full h-[35vh]">
            <img 
              src="https://images.stockcake.com/public/a/1/8/a188ca19-1a92-4281-a0d8-edfeac01a528_large/balanced-stone-stack-stockcake.jpg" 
              alt="Balanced stone stack" 
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>

          {/* Right Text Column */}
          <div className="flex flex-col justify-end">
            <p className="font-sans font-light text-[15px] md:text-[18px] leading-[1.6]"
               style={{ color: "var(--text-primary)" }}>
              Taking a warm, collaborative, and grounded approach, I combine evidence-based methods&mdash;including CBT, EMDR, mindfulness, and somatic practices. Whether you are healing from past trauma, navigating burnout, or managing chronic anxiety, we work together at a safe pace toward long-term resilience and ease.
            </p>
          </div>

        </div>
      </div>

      {/* Right/Bottom Image Area */}
      <div className="hidden md:flex w-full px-8 md:px-[6vw] lg:px-0 lg:w-[31%] h-[35vh] lg:h-[86vh]">
        <img 
          src="https://images.stockcake.com/public/a/1/8/a188ca19-1a92-4281-a0d8-edfeac01a528_large/balanced-stone-stack-stockcake.jpg" 
          alt="Balanced stone stack" 
          className="w-full h-full object-cover object-center rounded-lg lg:rounded-l-lg lg:rounded-r-none"
        />
      </div>
    </section>
  )
}

export default IntroBlock