import React from 'react'

import InfoButton from '../../components/InfoButton'
const Whychoose = () => {
  return (
    <section className='max-w-screen container mx-auto py-6 px-24'>
         <div className='my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:gap-12 text-left'>
            <div>
                <h2 className='text-3xl font-bold md:text-4xl'>Why <br /> Choosing Us</h2>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Luxury facilities</h3>
                <p className='text-base mb-2'>
                    The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
                </p>
                
                    <InfoButton text={"More Info"}></InfoButton>
                
                
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Affordable Price</h3>
                <p className='text-base mb-2'>
                    You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.
                </p>
                
                    <InfoButton text={"More Info"}></InfoButton>
                
                
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Many Choices</h3>
                <p className='text-base mb-2'>
                     We provide many unique work space choices so that you can choose the workspace to your liking.
                </p>
                
                    <InfoButton text={"More Info"}></InfoButton>
                
                
            </div>
         </div>
    </section>
  )
}

export default Whychoose