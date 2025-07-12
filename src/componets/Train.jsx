import React from 'react';
import { Button } from '@heroui/react';
import Trainicon from '../assets/trainIcon.png';
function Train() {
    const dataList = [
        {
            icon: Trainicon,
            title: 'Quick to ramp'
        },
        {
            icon: Trainicon,
            title: 'Easy to optimize'
        },
        {
            icon: Trainicon,
            title: 'Quick to scale up'
        },
        {
            icon: Trainicon,
            title: 'Works with all your existing tools'
        }
    ];
    return (
        <section className="bg-[url(./train.png)] bg-no-repeat bg-cover  md:py- 28 py-14 ">
            <div className="space-y-2  max-w-[600px] mx-auto pl-14">
                <h2 className="font-semibold leading-tight text-white md:text-3xl  lg:text-[40px] max-sm:text-center">
                    Train your aiDR on your...
                </h2>
                <h4 className='max-sm:text-2xl text-[40px] font-medium italic text-cyan max-sm:text-center'>prefered email st|</h4>
                <p className="text-white/80 w-4/5  md:text-2xl xl:text-base font-light">
                    You&apos;re in control. Train your aiDR on elements <br /> of your Marketing strategy.
                </p>
                <ul className='grid sm:grid-cols-2 pt-16 max-sm:pt-6'>
                    {dataList.map((list, i) => (
                        <li key={i} className='mb-4'>
                            <a href="#"> <img className='inline-block' src={list.icon} alt="icon" /> <span className='text-cyan ml-2'> {list.title}</span> </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Train
