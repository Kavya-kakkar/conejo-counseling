import React from 'react'

const QuoteBanner = () => {
  return (
    <section className="relative w-full py-24 md:py-32 lg:min-h-[81vh] flex flex-col justify-center items-center text-center px-8 md:px-[12vw]">
      {/* Background Image */}
      <img 
        src="https://m.media-amazon.com/images/I/61+PDr4OrFL.jpg" 
        alt="Quote background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(44, 53, 49, 0.70)" }}></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl">
        <h2 className="font-serif font-light leading-[1.3] md:leading-[1.2]"
            style={{ 
              fontSize: "clamp(1.8rem, 3.8vw, 3.5rem)",
              color: "var(--bg-primary)"
            }}>
          You deserve a space to slow down, reconnect, and heal. Nothing you carry is too complex to process together.
        </h2>
      </div>
    </section>
  )
}

export default QuoteBanner