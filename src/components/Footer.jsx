import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#F7F7F7] pt-2 pb-5 dark:bg-stone-900 dark:text-white'>
         <div className='max-w-screen container mx-auto py-6 px-8 min-[400px]:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8'>
            {/* logo and details*/}
              <div className='md:col-span-2'>
                <h2 className='text-2xl font-bold mb-4'><Link to={"/"}>CasaCraft</Link></h2>
                <p className='md:mr-12'>
                  The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
                </p>
              </div>

              {/* services */}
              <div>
                <h2 className='text-xl font-semibold mb-4'>Services</h2>
                <ul className='space-y-2'>
                  <li>
                    <Link to={"/"} className='hover:text-orange-400'>Email Marketing</Link>

                  </li>
                  <li>
                    <Link to={"/"} className='hover:text-orange-400'>Campaigns</Link>

                  </li>
                  <li>
                    <Link to={"/"} className='hover:text-orange-400'>Branding</Link>

                  </li>
                </ul>
              </div>

              {/* Furniture */}
              <div>
                <h2 className='text-xl font-semibold mb-4'>Furniture</h2>
                <ul className='space-y-2'>
                  <li>
                    <Link to={"/"} className='hover:text-orange-400'>Beds</Link>

                  </li>
                  <li>
                    <Link to={"/"} className='hover:text-orange-400'>Chair</Link>

                  </li>
                  <li>
                    <Link to={"/"} className='hover:text-orange-400'>All</Link>

                  </li>
                </ul>
              </div>

              {/* follow us */}
              <div>
                <h2 className='text-xl font-semibold mb-4'>Follow Us</h2>
                <ul className='space-y-2'>
                  <li>
                    <Link to={"/"} className='hover:text-orange-400 flex items-center space-x-2'>
                      <FaFacebookF></FaFacebookF><span>Facebook</span>
                    </Link>

                  </li>
                  <li>
                    <Link to={"/"} className='hover:text-orange-400 flex items-center space-x-2'>
                      <FaTwitter></FaTwitter> <span>Twitter</span>
                    </Link>

                  </li>
                  <li>
                    <Link to={"/"} className='hover:text-orange-400 flex items-center space-x-2'>
                      <FaInstagram></FaInstagram><span>Instagram</span>
                    </Link>

                  </li>
                </ul>
              </div>
         </div>

          {/* copy right */}
         <div className='mt-12 max-w-screen container mx-auto py-6 px-8 min-[400px]:px-16 flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black/70 border-t border-gray-300 pt-4 dark:bg-stone-800 dark:text-white/70'>
            <p>Copyright&copy;{new Date().getFullYear()}</p>
            <div className='flex items-center gap-4'>
              <Link to={"/"}>Terms & Conditions</Link>
              <Link to={"/"}>Privacy Policy</Link>
            </div>
         </div>
    </footer>
  )
}

export default Footer