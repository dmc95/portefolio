import { LucideIcon } from "lucide-react"
import Link from "next/link"


export type SideProjectProps = {
    Logo: LucideIcon,
    title: string,
    description: string,
    url: string
}



export const SideProject = (props: SideProjectProps) => {
    return (
        <Link
            target='_blank'
            href={props.url}
            className='inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded'>
            <span className='bg-accent text-accent-foreground p-3 rounded-sm'>
                <props.Logo />
            </span>
            <div>
                <p className="text-md font-semibold">{props.title}</p>
                <p className="text-md text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    )
}
