import React from 'react'

const Specialties = () => {
  const specialtiesList = [
    {
      title: "Trauma & PTSD",
      desc: "We don't always know when or how past events affect us. In therapy, we work together to process traumatic memories safely, understand your triggers, and regain a deep sense of internal safety, control, and resilience."
    },
    {
      title: "EMDR Therapy",
      desc: "Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based approach that helps process painful memories stored in the nervous system. It allows you to unblock stuck patterns and find lasting relief."
    },
    {
      title: "Anxiety & Panic",
      desc: "Persistent worry, physiological tension, and overthinking can leave you feeling constantly on edge. We focus on daily nervous system regulation, cognitive reframing, and actionable tools to help you feel grounded."
    },
    {
      title: "Burnout & Stress",
      desc: "Designed for high-achieving professionals, entrepreneurs, and creatives exhausted by internal pressure and perfectionism. We work to break cycle overload and restore sustainable balance."
    }
  ];

  return (
    <section id="specialties" className="w-full px-8 md:pl-[6vw] lg:px-[8vw] pt-12 md:pt-19 pb-24 md:pb-30 grid grid-cols-1 lg:grid-cols-[35%_auto] gap-16 lg:gap-12" style={{ backgroundColor: "var(--bg-primary)" }}>
      
      {/* Left Column - Heading */}
      <div className="w-full">
        <h2 className="font-serif leading-[1.3]"
            style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)", color: "var(--bg-dark)" }}>
          My specialties<br className="hidden lg:block" />{" "}
          <em className="font-serif italic font-[400]" style={{ color: "var(--color-accent)" }}>
            include...
          </em>
        </h2>
      </div>

      {/* Right Column - 2 Column Grid */}
      <div className="w-full pt-2 md:pt-4 lg:pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 lg:gap-y-14">
          {specialtiesList.map((item, index) => (
            <div key={index} className="flex flex-col h-full">
              <h3 className="font-serif font-light text-[1.4rem] lg:text-[1.9rem] mb-4"
                  style={{ color: "var(--bg-dark)" }}>
                {item.title}
              </h3>
              <p className="font-sans font-light text-[14px] md:text-[16px] leading-[1.8] mb-4" 
                 style={{ color: "var(--text-main)" }}>
                {item.desc}
              </p>
              
              <a href="#contact"
                className="inline-block w-fit mt-auto px-6 py-[8px] rounded-full border transition-colors duration-300 uppercase tracking-[0.12em] text-[0.7rem] font-semibold text-[var(--color-primary)] border-[var(--color-primary)] hover:text-[#F8F6F2] relative overflow-hidden z-0 before:absolute before:inset-0 before:bg-[var(--color-primary)] before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Specialties
