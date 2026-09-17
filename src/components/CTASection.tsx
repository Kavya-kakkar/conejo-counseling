import React from 'react'

const CTASection = () => {
  return (
    <section id="contact" className="w-full mt-12 md:mt-6 pt-4 md:pt-1 flex flex-col lg:flex-row justify-between items-stretch" style={{ backgroundColor: "var(--bg-secondary)" }}>
      
      {/* Left Edge Image */}
      <div className="flex w-[50%] lg:w-[14.1%] items-center justify-start lg:mt-48 lg:pr-[2vw] relative mb-12 lg:mb-0">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5f4J47e3f4ryjg6cxXuofY_I1uEWf-UfVNwhwzBmX_Q&s=10" 
          alt="Minimalist botanical detail" 
          className="w-full h-[25vh] md:h-[30vh] lg:h-[66vh] object-cover object-right rounded-r-lg rounded-l-none"
        />
      </div>

      {/* Center Content Area */}
      <div className="w-full lg:w-[48%] px-8 lg:pl-[3vw] pt-16 md:pt-24 lg:pt-32 pb-24 md:pb-[12vw] flex flex-col justify-start">
        
        {/* Eyebrow */}
        <h3 className="uppercase tracking-[0.15em] text-[13px] md:text-[15px] font-sans font-medium mb-20 md:mb-28"
            style={{ color: "var(--text-primary)" }}>
          Schedule an Appointment
        </h3>

        {/* Heading */}
        <h2 className="font-serif leading-[1.2] mb-9"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.5rem)", color: "var(--bg-dark)" }}>
          Begin your therapy journey{" "}
          <em className="font-serif italic font-normal" style={{ color: "var(--color-accent)" }}>
            today.
          </em>
        </h2>

        {/* Paragraph 1 */}
        <p className="font-sans font-light text-[14px] md:text-[15px] leading-[2.1] mb-6" 
           style={{ color: "var(--text-main)" }}>
          Taking the first step toward therapy takes courage. Whether you are seeking relief from chronic stress, processing past trauma, or looking for practical tools to manage anxiety, I offer a supportive, quiet space in Santa Monica and online therapy across California.
        </p>

        {/* Paragraph 2 */}
        <p className="font-sans font-light text-[14px] md:text-[16px] leading-[2.1] mb-10" 
           style={{ color: "var(--text-main)" }}>
          Reach out to schedule a brief consultation and see if my approach is the right fit for you.
        </p>

        {/* Button */}
        <a href="#book"
           className="inline-block w-fit px-8 py-3 rounded-full border transition-colors duration-300 uppercase tracking-[0.12em] text-[0.75rem] font-semibold text-(--color-primary) border-(--color-primary) hover:text-[#F8F6F2] relative overflow-hidden z-0 before:absolute before:inset-0 before:bg-(--color-primary) before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10">
          Book a Consultation
        </a>

      </div>

      {/* Right Edge Image */}
      <div className="flex w-[80%] ml-auto lg:w-[34.2%] items-center justify-end relative mt-8 lg:mt-0">
        <img 
          src="https://images.stockcake.com/public/9/8/b/98b62333-f47a-431a-90a7-fd8a5f1388bb_large/indoor-green-corner-stockcake.jpg" 
          alt="Indoor green corner" 
          className="w-full h-[40vh] lg:h-[80vh] object-cover object-left rounded-l-lg rounded-r-none"
        />
      </div>

    </section>
  )
}

export default CTASection