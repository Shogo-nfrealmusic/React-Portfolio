import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { profile } from 'console'
import { div } from 'framer-motion/client'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id="contact">

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                I take you to the <span className='text-purple'>cutting edge of</span>  technology.
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me and let&apos;s develop</p>
            <a href="mailto:shogo.initeng0306@gmail.com">
                <MagicButton 
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 SHOGO KIKUCHI</p>
            <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile) => (
                <a key={profile.id} href={profile.url} target="_blank" rel="noopener noreferrer">
                <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200'>
                    <img src={profile.img} alt={`icon-${profile.id}`} width={20} height={20} />
                </div>
                </a>
            ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer