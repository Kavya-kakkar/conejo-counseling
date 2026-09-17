import React from 'react'

const OurOffice = () => {
  return (
    <section id="office" className="w-full px-8 md:pl-[6vw] lg:px-[8vw] py-16 md:py-24 lg:py-32 flex flex-col items-center" style={{ backgroundColor: "var(--bg-primary)" }}>
      
      {/* Header Block */}
      <div className="w-full max-w-4xl text-center flex flex-col items-center mb-16 lg:mb-24">
        <h3 className="uppercase tracking-[0.15em] text-[13px] md:text-[15px] font-sans font-[500] mb-6" style={{ color: "var(--text-primary)" }}>
          Santa Monica Sanctuary
        </h3>
        <h2 className="font-serif leading-[1.2] mb-8" style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", color: "var(--bg-dark)" }}>
          A Calm, Private Space for <em className="italic font-serif font-[400]" style={{ color: "var(--color-accent)" }}>Healing</em>
        </h2>
        <p className="font-sans font-light text-[15px] md:text-[17px] leading-[1.8] max-w-3xl" style={{ color: "var(--text-main)" }}>
          Located in Santa Monica, California, my practice offers a quiet refuge from the fast-paced demands of daily life. Designed with natural light, soft organic textures, and an uncluttered aesthetic, the office environment helps you ground yourself the moment you step through the door.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-20 lg:mb-28">
        <div className="w-full h-[30vh] md:h-[50vh] lg:h-[65vh] overflow-hidden rounded-lg">
          <img src="/images/office1.jpg" alt="Santa Monica Therapy Office Space" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[30vh] md:h-[50vh] lg:h-[65vh] overflow-hidden rounded-lg">
          <img src="/images/office2.jpg" alt="Comfortable seating and natural light in therapy office" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* 3-Column Features */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        
        {/* Feature 1 */}
        <div className="flex flex-col text-center items-center">
          <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full border" style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <h4 className="font-serif text-[1.5rem] md:text-[1.7rem] leading-[1.3] mb-4" style={{ color: "var(--bg-dark)" }}>
            Hybrid Care Available
          </h4>
          <p className="font-sans font-light text-[14px] md:text-[15px] leading-[1.8]" style={{ color: "var(--text-main)" }}>
            Offering warm, face-to-face sessions in Santa Monica as well as secure virtual telehealth appointments for clients located anywhere across California.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col text-center items-center">
          <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full border" style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </div>
          <h4 className="font-serif text-[1.5rem] md:text-[1.7rem] leading-[1.3] mb-4" style={{ color: "var(--bg-dark)" }}>
            Quiet &amp; Grounding
          </h4>
          <p className="font-sans font-light text-[14px] md:text-[15px] leading-[1.8]" style={{ color: "var(--text-main)" }}>
            A peaceful, confidential setting created specifically to help high-achieving professionals slow down, feel safe, and regulate their nervous systems.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col text-center items-center">
          <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full border" style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
          </div>
          <h4 className="font-serif text-[1.5rem] md:text-[1.7rem] leading-[1.3] mb-4" style={{ color: "var(--bg-dark)" }}>
            Convenient Location
          </h4>
          <p className="font-sans font-light text-[14px] md:text-[15px] leading-[1.8]" style={{ color: "var(--text-main)" }}>
            Located at 123th Street 45 W, Santa Monica, CA 90401, featuring easy access and private parking for client peace of mind.
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default OurOffice