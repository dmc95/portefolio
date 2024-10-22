import { ContactCard } from "@/components/ui/ContactCard"
import Section from "./Section"
import Me from "./assets/images/me.jpg"
import { Code } from "@/components/ui/Code"


export const Contact = () => {
  return (
    <Section className='flex flex-col gap-4'>
      <h2 className="pb-2 text-lg font-semibold tracking-tight first:mt-0">
        <p><Code>Contactez-moi</Code></p>  
      </h2>
      <div>
        <div className='flex max-md:flex-col gap-4 w-full'>
          <ContactCard
            name="mickaël-dolphin-dev"
            image= {Me.src}
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Linkedin_Shiny_Icon.svg/256px-Linkedin_Shiny_Icon.svg.png?20130220073156"
            description="Linkedin"
            url="https://www.linkedin.com/in/micka%C3%ABl-dolphin-dev/" />
          <ContactCard
            name="Mickael Dolphin"
            image= {Me.src}
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Microsoft_Outlook_2013-2019_logo.svg/585px-Microsoft_Outlook_2013-2019_logo.svg.png?20221202081055"
            description="Email"
            url="mailto:mickael.dolphin@live.fr?subject=Subject" />
        </div>
      </div>
    </Section>
  )
}