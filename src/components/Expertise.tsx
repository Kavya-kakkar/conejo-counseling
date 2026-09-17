import React from 'react'

const Expertise = () => {
  const expertiseItems = [
    "Anxiety & Panic", "Trauma & PTSD",
    "EMDR Therapy", "Somatic Regulation",
    "Professional Burnout", "Cognitive Behavioral Therapy (CBT)",
    "Perfectionism", "Mindfulness-Based Practices",
    "High Internal Pressure", "Single-Incident Trauma",
    "Overthinking & Stress", "...And more."
  ];

  return (
    <section id="focus" className="w-full px-8 md:pl-[6vw] lg:pl-[9vw] lg:pr-[15vw] py-16 md:py-24 lg:py-32 flex flex-col md:flex-row gap-16 md:gap-12 lg:gap-2" style={{ backgroundColor: "var(--bg-primary)" }}>
      
      {/* Left Column - Heading */}
      <div className="w-full md:w-[35%] lg:w-[34%] shrink-0">
        <h2 className="font-serif leading-[1.2] mb-8" style={{ fontSize: "clamp(2.2rem, 3.2vw, 4.8rem)", color: "var(--bg-dark)" }}>
          Areas of<br />
          <em className="font-serif italic font-normal" style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
            Focus
          </em>
        </h2>
      </div>

      {/* Right Column - 2 Column Grid */}
      <div className="w-full md:w-[65%] lg:w-[70%] lg:-mt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20">
          {expertiseItems.map((item, index) => (
            <div 
              key={index}
              className="py-5 md:py-7 flex items-center cursor-pointer border-b border-[rgba(43,45,47,0.08)] last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
            >
              <span className="uppercase tracking-widest text-[0.875rem] font-sans font-medium"
                    style={{ color: "var(--bg-dark)" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Expertise