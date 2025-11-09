import React from 'react'
import materialImg1 from '../../assets/material1.png'
import materialImg2 from '../../assets/material2.png'
import materialImg3 from '../../assets/material3.png'
import InfoButton from '../../components/InfoButton'
const Materials = () => {
  return (
        <section className='max-w-screen container mx-auto py-6 px-8 min-[400px]:px-16 my-8 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>
           
           <div className='md:w-1/2 mx-auto'>
            <h3 className='uppercase text-lg font-semibold text-orange-400 mb-4 '>Materials</h3>
    
            <h2 className='capitalize text-4xl font-bold lg:w-1/2 mb-4'>
                Very serious materials for making furniture
            </h2>
    
            <p className='text-stone-800 mb-5 lg:w-1/2 dark:text-white'>
                Because we had very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
            </p>
            
            <InfoButton text={"More Info"}></InfoButton>
           </div>

           <div className='md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center'>
              <div>
                    <img src={materialImg1} alt="" />
                    <img src={materialImg2} alt="" />
              </div>
              <div className='md:col-span-2 col-span-1'>
                    <img src={materialImg3} alt="" className='w-full md:h-[541px]'/>
              </div>
           </div>
        </section>
  )
}

export default Materials