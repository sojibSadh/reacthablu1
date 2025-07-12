import React from 'react';
import { Button } from '@heroui/react';

function Start() {
    return (
        <section className='bg-[#002228]'>
            <div className='max-w-[1200px] mx-auto py-24 space-y-6 text-center'>
                <h4 className='text-[20px]  italic text-cyan'>GET STARTED</h4>

                <h2 className="font-medium italic text-white md:text-3xl  lg:text-[36px] ">
                    Embrace the new era of <span> outbound.</span>
                </h2>

                <p className="text-white/80  text-[20px]  font-light">
                    Wizia lets you train, activate, and optimize aiDRs. <br />
                    Take your outbound to new levels of performance and efficiency.
                </p>
                <button  className='bg-cyan font-medium text-foreground py-4 px-5 rounded-full hover:bg-white transition hover:text-cyan'>
                    Sign Up for the Beta <img className='inline-block' src="./arrow.png" alt="" />
                </button>
            </div>
        </section>
    )
}

export default Start
