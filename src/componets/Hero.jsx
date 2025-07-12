import React from 'react'
import { Button } from '@heroui/react'
function Hero() {
    return (
        <section className="bg-[url(./hero.png)] bg-center bg-no-repeat bg-cover md:py- 28 py-14 ">
            <div className="space-y-6  max-w-[1200px] mx-auto max-sm:text-center">
                <h4 className='text-2xl text-cyan'>AI SDRs (aiDRs)</h4>
                <h2 className="font-bold  text-white text-[38px]  lg:text-[64px] lg:leading-[5rem] ">
                    More leads, <br /> less people.
                </h2>

                <p className="text-secondary  md:text-[20px]">
                    Train an aiDR on your ICP and messaging matrix. <br />Activate it on a patch. It will send personalized  <br /> sequences to every target contact.
                </p>

                <button  className='bg-cyan font-medium text-foreground py-4 px-5 rounded-full  hover:bg-white transition hover:text-cyan max-sm:py-2 max-sm:text[14px]'>
                    Sign Up for the Beta <img className='inline-block' src="./arrow.png" alt="" />
                </button>
            </div>
        </section>
    )
}

export default Hero
