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
        <section className="bg-[url(./alocate.png)] bg-no-repeat bg-cover  md:py- 28 py-14 ">
            <div className='max-w-[1200px] mx-auto'>
            <div className="space-y-2  max-w-[600px]">
                <h2 className="font-semibold lg:leading-tight text-white md:text-3xl  lg:text-[40px] ">
                    Allocate effort where your reps make an inpact.
                </h2>
                <h4 className='text-[40px] font-medium italic text-cyan'>Let us handle the rest.</h4>
                <p className="text-white/80 w-4/5 text-2xl lg:text-sm xl:text-base font-light">
                    Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.
                </p>
                <div className='grid grid-cols-3 pt-16'>
                    {dataList.map((list, i) => (
                        <div key={i} className='mb-4 pr-7'>
                            <h4 className='text-[40px] text-cyan font-bold'>{list.persen}</h4>
                            <p className='text-white/70 font-medium text-[20px ] '>{list.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    )
}

export default Allocate
