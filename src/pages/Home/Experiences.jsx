import React from 'react'
import exImage from '../../assets/expricences.png'
import InfoButton from '../../components/InfoButton'
const Experiences = () => {
  return (
    <section className='max-w-screen container mx-auto py-6 px-8 min-[400px]:px-16 my-8 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>
       <div className='md:w-1/2 md:h-[541px]'>
          <img src={exImage} alt="" className='h-full w-full'/>
       </div>
       <div className='md:w-1/2 mx-auto'>
        <h3 className='uppercase text-lg font-semibold text-orange-400 mb-4 '>experiences</h3>

        <h2 className='capitalize text-4xl font-bold lg:w-1/2 mb-4'>
            we provide you the best experience
        </h2>

        <p className='text-stone-800 mb-5 lg:w-2/3 dark:text-white'>
            You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials
        </p>
        <InfoButton text={"More Info"}></InfoButton>
       </div>
    </section>
  )
}

export default Experiences