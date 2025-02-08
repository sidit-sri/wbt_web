// import GridPattern from '../components/GridPattern' // Update the correct path
// import SectionIntro from '../components/SectionIntro' // Update the correct path
// import Container from '../components/Container' // Update the correct path
// import FadeInStagger from '../components/FadeInStagger' // Update the correct path
// import FadeIn from '../components/FadeIn' // Update the correct path
// import PageLink from '../components/PageLink' // Update the correct path

import { GridPattern } from "./GridPattern"
import { SectionIntro } from "./SectionIntro"
import { Container } from "./Container"
import { FadeInStagger } from "./FadeIn"
import { FadeIn } from "./FadeIn"

export function PageLinks({ title, pages, intro, className }) {
  return (
    <div className={clsx('relative pt-24 sm:pt-32 lg:pt-40', className)}>
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro title={title} smaller>
        {/* Ensure `intro` is plain text */}
        {intro && <p>{intro}</p>}
      </SectionIntro>
      <Container className={intro ? 'mt-24' : 'mt-16'}>
        <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {pages.map((page) => (
            <FadeIn key={page.href}>
              {/* <PageLink
                page={{
                  ...page,
                  description: page.description.replace(/<\/?div[^>]*>/g, ''), // Remove any div tags in `description`
                }}
              /> */}
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}
