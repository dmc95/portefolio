import React from 'react'
import { Card } from './card'
import Link from 'next/link'


export const ContactCard = (props: {
    image: string,
    mediumImage: string,
    name: string,
    description: string,
    url: string
}) => {
    return (
        <Link href={props.url} className='w-full' target='_blank'>
            <Card className='p-3 bg-accent/10 hover:bg-accent/50 flex items-center gap-4'>
                <div className='relative'>
                    <img src={props.image} className='w-10 h-10 rounded-3xl object-fit' alt={props.name} />
                    <img src={props.mediumImage}
                        alt={props.name}
                        className='w-4 h-4 absolute -bottom-1 -right-2' />
                </div>
                <div className='mr-auto'>
                    <div className='flex items-center gap-2'>
                        <p className='text-lg font-semibold'>{props.name}</p>
                    </div>
                    <p className='text-xs text-muted-foreground'>{props.description}</p>
                </div>
            </Card>
        </Link>
    )
}
