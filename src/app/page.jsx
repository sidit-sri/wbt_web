import Image from 'next/image'
import Link from 'next/link'
import StackIcon from 'tech-stack-icons'
// import { StickyScroll } from '../components/ui/stickyscrollreveal'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import googleCloud from '@/images/Clouds/googlecloud.svg'
import nvidia from '@/images/Clouds/nvidia.svg'
import azure from '@/images/Clouds/azure.svg'
import imageLaptop from '@/images/laptop.jpg'
import mariland from '@/images/company/mariland-logo.jpg'
import fullChinese from '@/images/company/fullChineseLogo.svg'
import doxa from '@/images/company/doxaLogo.png'
import nimbler from '@/images/company/Nimbler.png'
import { loadCaseStudies } from '@/lib/mdx'
// import { TextGenerateEffect } from '../components/ui/text-generate-effect'
import { HoverEffect } from '../components/ui/card-hover-effect'

const content = [
  {
    title: 'Maryland Expansion Platform',
    description:
      'I created a dynamic platform with React.js and Redux to boost user engagement. The interface helps users explore business expansion, exporting, and relocation opportunities in Maryland, with streamlined navigation for different audience types. The platform was aligned with client needs for a user-focused experience.',
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <Image
          src={mariland}
          width={320}
          height={200}
          // className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link: '/work',
  },
  {
    title: 'Full Chinese',
    description:
      'I developed a responsive website using React.js and Redux, featuring advanced Chinese learning tools like quizzes, listening practice, and a personal dictionary. I also provided post-development support for updates and maintenance, while highlighting FullChinese’s success in serving US universities for over six years, making it a trusted platform for learners.',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={fullChinese}
          width={200}
          height={200}
          // className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Doxa Connex',
    description:
      'I built the frontend of Doxa Connex 2.0 using React.js and Redux, focusing on scalability and performance. I created a user-friendly and responsive interface to ensure seamless navigation and integrated features to enhance efficiency and streamline workflows. The design and functionality were aligned with customer feedback to meet business objectives.',
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <Image
          src={doxa}
          width={200}
          height={200}
          // className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link: '/work',
  },
  {
    title: 'Nimbler',
    description:
      'I developed the frontend of a modern sales automation platform using React.js and Redux. The platform leverages AI to provide access to over 120M+ B2B contacts, automate outreach campaigns, and enhance deal closures. I delivered a responsive and scalable UI to optimize sales processes and improve user engagement.',
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <Image
          src={nimbler}
          width={350}
          height={200}
          // className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link: '/work',
  },
]

const cloudPartners = [
  { src: nvidia, name: 'Nvidia' },
  { src: googleCloud, name: 'Google Cloud' },
  { src: azure, name: 'Azure' },
]

const icons = [
  { name: 'OpenAI', icon: 'openai' },
  { name: 'Next.js', icon: 'nextjs2' },
  { name: 'React.js', icon: 'reactjs' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'Android', icon: 'android' },
  { name: 'HTML5', icon: 'html5' },
  { name: 'Postman', icon: 'postman' },
  { name: 'Redux', icon: 'redux' },
  { name: 'TailwindCSS', icon: 'tailwindcss' },
  { name: 'Flutter', icon: 'flutter' },
  { name: 'AWS', icon: 'aws' },
  { name: 'TypeScript', icon: 'typescript' },
]

const words = `Our team of experts can help you at every stage of your AI journey,
          from ideation and strategy to development and implementation. Harness
          the transformative potential of AI and Machine Learning to elevate
          your operations, drive strategic decision-making and achieve
          sustainable growth.
`

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We have worked with these technologies:
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-7"
          >
            {icons.map((icon, index) => (
              <li
                key={index}
                className="transform text-center transition-transform duration-300 hover:scale-110"
              >
                <StackIcon name={icon.icon} className="mx-auto h-16 w-16" />
                <p className="mt-2 text-white">{icon.name}</p>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Empowering Enterprises through Tailored AI Solutions"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        {/* <TextGenerateEffect duration={4} filter={false} words={words} /> */}
      </SectionIntro>
      <h2 className="text-3xl font-bold mb-4 mt-16 text-center">Case Studies</h2> 
      <Container className="mt-16">
  <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-1">
    {/* <StickyScroll content={content} /> */}
  </FadeInStagger>
</Container>

    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We are AI full stack product builders"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <div>
          We are building next generation AI driven full-stack products, turning
          opportunities into endless possibilities by re-purposing proven
          projects to deliver innovative solutions.
        </div>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="AI Development">
              We specialize in providing AI-driven solutions to help businesses
              automate processes, enhance decision-making, and leverage data
              insights for a smarter future. Our AI strategies are tailored to
              meet the unique needs of each client, ensuring they stay ahead of
              the curve in this rapidly evolving field. We offer a range of
              services, from AI model development to data analytics and
              integration.
              <ul className="mt-2 list-disc pl-5">
                <li>Custom AI model development and implementation</li>
                <li>Machine learning and deep learning solutions</li>
                <li>AI-powered data analytics and insights</li>
                <li>
                  Natural Language Processing (NLP) for smarter communication
                </li>
              </ul>
              <Link href="/AIServicePage">
                <span className="absolute inset-0 rounded-3xl" />
                <span className="mt-4 inline-block text-blue-500">
                  Learn More
                </span>
              </Link>
            </ListItem>
            <ListItem title="Web development">
              We deliver full-stack web development services for small and big
              companies. The technology choices we make fit the long-term
              strategy of our clients, providing the highest quality with
              minimal risks. We also observe web application development trends
              to optimize existing software.
              <ul className="mt-2 list-disc pl-5">
                <li>Full-cycle web application development services</li>
                <li>Web design services</li>
              </ul>
              <Link href="/webDevelopment">
                <span className="absolute inset-0 rounded-3xl" />
                <span className="mt-4 inline-block text-blue-500">
                  Learn More
                </span>
              </Link>
            </ListItem>

            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit. The mobile
              application development services we deliver always fit perfectly
              with our clients’ needs and objectives. Our secret is simple –
              WeBuildTech has developed scalable mobile apps for gaming and
              trading. So trust us, we know how to deliver high-performing
              mobile products.
              <ul className="mt-2 list-disc pl-5">
                <li>
                  Custom application development services using React Native
                </li>
                <li>Application management services</li>
                <li>Application testing services</li>
              </ul>
              <Link href="/applicationDevelopment">
                <span className="absolute inset-0 rounded-3xl" />
                <span className="mt-4 inline-block text-blue-500">
                  Learn More
                </span>
              </Link>
            </ListItem>

            <ListItem
              title="Product Design
"
            >
              Our clients benefit from technologically advanced products with
              great UX. With extensive research for concept validation all the
              way to the launch stage, plus ongoing support of your products,
              the WeBuildTech team knows how to make each product development
              stage a success.
              <ul className="mt-2 list-disc pl-5">
                <li>Design discovery & research</li>
                <li>UX & UI design</li>
                
              </ul>
              <Link href="/productDesign">
                <span className="absolute inset-0 rounded-3xl" />
                <span className="mt-4 inline-block text-blue-500">
                  Learn More
                </span>
              </Link>
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Experiences of tomorrow. Engineered together.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Let’s transform how people experience your business. All through
            next generation technology with artificial intelligence.
          </p>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 md:mt-56">
        <section className="mt-30">
          <h1 className="font-display text-4xl font-bold text-neutral-950">
            Artificial Intelligence Expertise
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            We specialize in everything AI—from cutting-edge product design to
            AI-powered chore automation. Harness the full potential of
            artificial intelligence to revolutionize your business and simplify
            everyday tasks with our innovative solutions.
          </p>
          <HoverEffect items={projects} />
          <div className="mb-10 mt-10 text-center">
            <h2 className="text-3xl font-bold text-black">
              Our AI Cloud Partners
            </h2>
            <ul
              role="list"
              className="mt-6 grid grid-cols-3 items-center justify-items-center gap-6 lg:grid-cols-3"
            >
              {cloudPartners.map((partner, index) => (
                <li
                  key={index}
                  className="transform text-center transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    className="mx-auto h-16 w-16 object-contain"
                    unoptimized
                  />
                  <p className="mt-2 text-black">{partner.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Nvidia', logo: nvidia, ceo: 'Jensen Huang, CEO' }}
      >
        Software is eating the world, but AI is going to eat software
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}

export const projects = [
  {
    title: 'Generative AI: Smarter Content, Smarter Automation',
    description:
      'At Webuildtech, we redefine creativity and efficiency with Generative AI. From generating impactful content to automating repetitive tasks, we provide solutions that save time and boost productivity. Our team of highly trained developers creates AI systems that seamlessly integrate into your business, driving real results.',
    link: '/generative-ai',
  },
  {
    title: 'Computer Vision: AI-Powered Image and Video Analysis',
    description:
      'Webuildtech transforms visual data into actionable insights through our advanced Computer Vision solutions. Whether it’s object detection, facial recognition, or video analytics, we design tools that enhance decision-making and improve operations. With our expert developers, we deliver AI solutions tailored to your industry’s needs.',
    link: '/computer-vision',
  },
  {
    title: 'Predictive AI: Data-Driven Decisions, Every Time',
    description:
      'Stay ahead of the competition with Webuildtech’s Predictive AI. Our solutions analyze past data to predict trends, optimize operations, and uncover growth opportunities. Powered by a team of experienced developers, we ensure accurate, actionable insights to support smarter decision-making.',
    link: '/predictive-ai',
  },
]
