import React from 'react'

function Testimonial() {
  return (
    <section className='bg-foreground md:py-20 max-sm:py-12'>
        <div className='max-w-[1200px] mx-auto text-center'>
          <img src="./quate.png" alt="quate" className='mx-auto max-sm:w-12'/>
          <h3 className='sm:text-[32px] text[20px] font-light text-white/80 sm:pt-10 pt-6'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br /> vulputate libero et velit interdum, ac aliquet odio mattis.</h3>
          <div className='sm:py-10 pt-6'>
            <h4 className='sm:text-2xl text-cyan font-semibold'>John Doe</h4>
            <p className='sm:text-[20px] pt-2'>Chief Strategy Officer @ Company</p>
          </div>
        </div>
    </section>
  )
}

export default Testimonial
