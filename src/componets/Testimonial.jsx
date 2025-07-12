import React from 'react'

function Testimonial() {
  return (
    <section className='bg-foreground py-20'>
        <div className='max-w-[1200px] mx-auto text-center'>
          <img src="./quate.png" alt="quate" className='mx-auto'/>
          <h3 className='text-[32px] font-light text-white/80 pt-10'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br /> vulputate libero et velit interdum, ac aliquet odio mattis.</h3>
          <div className='py-10'>
            <h4 className='text-2xl text-cyan font-semibold'>John Doe</h4>
            <p className='text-[20px] pt-2'>Chief Strategy Officer @ Company</p>
          </div>
        </div>
    </section>
  )
}

export default Testimonial
