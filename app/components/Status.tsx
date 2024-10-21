import React from 'react'
import Section from './Section'
import { Card } from '@/components/ui/card'
import { CircleDollarSign, Database, LucideIcon, Music, Pizza } from "lucide-react"
import Link from 'next/link'
import { url } from 'inspector/promises'
import Image from 'next/image';
import { StaticImageData } from 'next/image'
import { SideProjectProps, SideProject } from './SideProject';

import Spie from "./assets/images/spie.png"
import Vertiv from "./assets/images/vertiv.jpg"
import Dbis from "./assets/images/dbis.jpg"



export const Status = () => {
    return (
        <Section className='flex max-md:flex-col items-start gap-4'>
            <Card className='flex-[3] w-full p-4 flex flex-col gap-2'>
                <p className="text-lg text-muted-foreground">Projets</p>
                <div className='flex flex-col gap-4'>
                    {SIDE_PROJECTS.map((project, index) => (
                        <SideProject
                            key={index}
                            Logo={project.Logo}
                            title={project.title}
                            description={project.description}
                            url={project.url} />
                    ))}
                </div>
            </Card>
            <div className='flex-[2] w-full h-full flex flex-col gap-4'>
                <Card className='p-4 flex-1'>
                    <p className="text-lg text-muted-foreground">Emploi</p>
                    <div className='flex flex-col gap-4'>
                        {WORKS.map((work, index) => (
                            <Work
                                {...work} />
                        ))}
                    </div>
                </Card>
                <Card className='p-1 inline-flex  hover:bg-accent/50 transition-colors'>
                    <p className="text-md text-muted-foreground">Contactez-moi :</p>

                    <Link
                        href="mailto:mickael.dolphin@live.fr?subject=Subject"
                        className="text-md text-muted-foreground ml-5">
                        <p className="text-md text-muted-foreground">mickael.dolphin@live.fr</p>
                    </Link>
                </Card>
            </div>
        </Section>
    )
}




const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: CircleDollarSign,
        title: "GD Investment",
        description: "Une plateforme de Bourse pour le suivi d'ETF",
        url: "/"
    },
    {
        Logo: Database,
        title: "Data & BI Solutions",
        description: "Site vitrine réalisé lors de mon alternance",
        url: "https://databisolutions.fr/"
    },
    {
        Logo: Music,
        title: "Macata Music",
        description: "Site de streaming musicale (En développement)",
        url: "/"
    },
    {
        Logo: Pizza,
        title: "Fifty's american diner",
        description: "Site de restaurant de burger",
        url: "https://amercian-diner.netlify.app/"
    }
]



type WorkProps = {
    image: string | StaticImageData,
    title: string,
    role: string,
    date: string,
    url: string
}

const WORKS: WorkProps[] = [
    {
        image: Spie,
        title: "Spie",
        role: "Responsable Data center",
        date: "Mars 2024 à Aujourd'hui",
        url: "/"
    },
    {
        image: Dbis,
        title: "Data & Bi Solution",
        role: "Analytics engineer & software developer",
        date: "2023 - 2024",
        url: "https://databisolutions.fr/"
    },
    {
        image: Vertiv,
        title: "Vertiv",
        role: "Metteur au point climatisation de précision",
        date: "2015 - 2021",
        url: "/"
    }
]




const Work = (props: WorkProps) => {
    return (
        <Link
            target='_blank'
            href={props.url}
            className='inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded'>

            <Image src={props.image} alt={props.title} className='w-10 h-auto object-fill rounded-md' />

            <div>
                <p className="text-sm font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.role}</p>
            </div>
            <div className='ml-auto text-right'>
                <p className="text-xs text-muted-foreground">{props.date}</p>
            </div>
        </Link>
    )
}
