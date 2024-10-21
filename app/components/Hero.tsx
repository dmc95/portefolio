import React, { ComponentPropsWithoutRef } from 'react'
import Section from './Section'
import Image from 'next/image';
import Photo from './assets/images/mick.jpg'
import { cn } from '@/lib/utils';
import { Code } from '@/components/ui/Code';


const Hero = () => {
  return (
    <Section className='flex max-md:flex-col items-start gap-4'>
      <div className='flex-[3] w-full flex flex-col gap-2'>
        <h2 className='text-5xl font-bold'>Mickaël Dolphin</h2>
        <h3 className='text-3xl'>Software developer</h3>
        <p>I'm a <Code className='inline-flex items-center gap-1'>software developer</Code> and data curious</p>
      </div>
      <div className='flex-2 max-md:m-auto ml-auto'>
        <Image src={Photo} className='object-cover w-[280px] rounded-[100%] max-w-xs max-lg:h-[190px] h-[250px] max-md:w-56' alt="Mick" />
      </div>
    </Section>
  )
}

export default Hero