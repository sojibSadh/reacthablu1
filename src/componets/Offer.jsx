import React from 'react';
import Offer1 from '../assets/Offer1.png';
import Offer2 from '../assets/Offer2.png';
import Offer3 from '../assets/Offer3.png';
import { section } from 'framer-motion/client';

function Offer() {
    const OfferList = [
        {
            icon: Offer1,
            title: 'You’re in Control',
            description: 'aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.'
        },
        {
            icon: Offer2,
            title: 'Infinitely Scalable',
            description: 'Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.'
        },
        {
            icon: Offer3,
            title: 'Incredibly Flexible',
            description: 'Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.'
        }
    ]
    return (
        <section className='bg-[#002228]'>
            <div className='max-w-[1200px] mx-auto md:py-[120px] py-8'>
                <div className='gap-6 grid grid-cols-1 md:grid-cols-3 max-sm:text-center'>
                    {
                        OfferList.map((item, i) => (
                            <div key={i} className='pr-5'>
                                <div>
                                    <img className='max-sm:mx-auto max-sm:w-12' src={item.icon} alt="offer" />
                                </div>
                                <div>
                                    <h4 className='md:text-[28px] text-[20px] text-white py-3 font-semibold'>{item.title}</h4>
                                    <p className='md:text-[22px] text-gray/80 font-light'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

    )
}

export default Offer
