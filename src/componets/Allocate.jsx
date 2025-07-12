import React from 'react';

function Allocate() {
    const dataList = [
        {
            persen: '32%',
            description: 'Improvement in Open Rates'
        },
        {
            persen: '75%',
            description: 'Improvement in Ramp Time'
        },
        {
            persen: '35%',
            description: 'Improvement'
        }
    ];
    return (
        <section className="bg-[url(./alocate.png)] bg-no-repeat bg-cover  md:py- 28 py-8 ">
            <div className='max-w-[1200px] mx-auto'>
            <div className="space-y-2  max-w-[600px] max-sm:text-center">
                <h2 className="font-semibold lg:leading-tight text-white md:text-3xl  lg:text-[40px] ">
                    Allocate effort where your reps make an inpact.
                </h2>
                <h4 className='md:text-[40px] max-md:text-[22px] font-medium italic text-cyan'>Let us handle the rest.</h4>
                <p className="text-white/80  md:text-2xl  font-light">
                    Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.
                </p>
                <div className='grid md:grid-cols-3 pt-16'>
                    {dataList.map((list, i) => (
                        <div key={i} className='mb-4 pr-7'>
                            <h4 className='md:text-[40px] text-[22px] text-cyan font-bold'>{list.persen}</h4>
                            <p className='text-white/70 font-medium md:text-[20px] '>{list.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    )
}

export default Allocate
