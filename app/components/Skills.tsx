import React from 'react'
import Section from './Section'
import ReactLogo from './icons/ReactLogo'
import SparkLogo from './icons/SparkLogo'
import DatabricksLogo from './icons/DatabricksLogo'
import { Code } from '@/components/ui/Code'


export const Skills = () => {
    return (
        <Section className='flex flex-col gap-4'>
            <h2 className="pb-2 text-lg font-semibold tracking-tight first:mt-0">
           <p><Code>Compétences</Code></p>  
            </h2>
            <div>
                <div className='flex max-md:flex-col gap-4'>
                    <div className="flex flex-col gap-2">
                    <ReactLogo size={42} 
                    className='animate-spin'
                    style={{
                        animationDuration:"10s"
                    }}
                    />
                    <h3 className="text-2xl font-semibold tracking-tight">React</h3>
                    <p className="text-sm text-muted-foreground">Mon framework principal est React. J'utilise également Next.Js comme framework backend et frontend</p>
                    </div>
                    <div className="flex flex-col gap-2">
                    <SparkLogo size={42} 
                    className='animate-pulse'
                    style={{
                        animationDuration:"2s"
                    }}
                    />
                    <h3 className="text-2xl font-semibold tracking-tight">PySpark</h3>
                    <p className="text-sm text-muted-foreground">Mon framework web est React. J'utilise également Next.Js & Tailwind</p>
                    </div>
                    <div className="flex flex-col gap-2">
                    <DatabricksLogo size={42} 
                    className='animate-bounce'
                    style={{
                        animationDuration:"1s"
                    }}
                    />
                    <h3 className="text-2xl font-semibold tracking-tight">Databricks</h3>
                    <p className="text-sm text-muted-foreground">Mon framework principal est React. J'utilise également Next.Js comme framework backend et frontend</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}
