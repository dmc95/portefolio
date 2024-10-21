// import { Section } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import Section from './Section'
import Link from "next/link"
import React from 'react'
import LinkedinIcon from './icons/LinkedinIcon'
import { cn } from '@/lib/utils'
import GithubIcon from './icons/GithubIcon'


const Header = () => {
  return (
    <header className='sticky top-0 py-4'>
        <Section className='flex items-baseline'>
           <h1 className='text-xl text-white font-bold text-primary-foreground'>Mick.D</h1>
           <div className='flex-1'/>
           <ul className='flex items-center gap-2'>
            <Link 
            href=""
            className={cn(buttonVariants({variant:'outline'}), 'size-6 p-0')} > 
                <LinkedinIcon size={16} className='text-foreground'/>
            </Link>
            <Link 
            href=""
            className={cn(buttonVariants({variant:'outline'}), 'size-6 p-0')} > 
                <GithubIcon size={16} className='text-foreground'/>
            </Link>
           </ul>
        </Section>
    </header>
  )
}

export default Header