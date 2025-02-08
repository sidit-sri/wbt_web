import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
// import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Service',
    links: [
      {
        title: 'Application Development',
        href: '/applicationDevelopment',
      },
      { title: 'Web Development', href: '/webDevelopment' },
      { title: 'Product Design', href: '/productDesign' },
      { title: 'AI Development', href: '/AIServicePage' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact us', href: '/contact' },
      { title: 'Career', href: '/CareerPage' },
    ],
  },
  // {
  //   title: 'Connect',
  //   links: socialMediaProfiles,
  // },
  // Add new "Businesses" section
  {
    title: 'Businesses',
    links: [
      { title: 'For Startups', href: '/businesses/startups' },
      { title: 'For Businesses', href: '/businesses' },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="flex gap-8">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex} className="flex flex-col">
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-center justify-between gap-y-4 border-t border-neutral-950/10 pt-12">
          {/* Logo (Left) */}
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>

          {/* Social Icons (Center) */}
          <div className="flex justify-center gap-x-4">
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
            >
              <svg
                className="h-6 w-6 text-neutral-700 hover:text-neutral-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.63 9.87v-6.99H8.31v-2.88h2.06V9.54c0-2.04 1.22-3.17 3.09-3.17.9 0 1.84.16 1.84.16v2.02h-1.04c-1.03 0-1.35.64-1.35 1.29v1.54h2.29l-.37 2.88h-1.92v6.99A10 10 0 0 0 22 12Z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
            >
              <svg
                className="h-6 w-6 text-neutral-700 hover:text-neutral-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.55 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.349 8.349 0 0 0 22 5.92a8.18 8.18 0 0 1-2.357.64A4.075 4.075 0 0 0 21.448 4.1a8.211 8.211 0 0 1-2.605.975A4.103 4.103 0 0 0 15.845 4c-2.27 0-4.108 1.806-4.108 4.031 0 .316.037.623.105.919A11.645 11.645 0 0 1 3.26 4.99a3.98 3.98 0 0 0-.555 2.03c0 1.402.724 2.637 1.82 3.362a4.13 4.13 0 0 1-1.861-.51v.05c0 1.96 1.417 3.594 3.297 3.96a4.172 4.172 0 0 1-1.852.07c.523 1.611 2.038 2.785 3.833 2.816A8.26 8.26 0 0 1 2 18.407 11.643 11.643 0 0 0 8.29 20.25" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
            >
              <svg
                className="h-6 w-6 text-neutral-700 hover:text-neutral-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.6 3H4.4A1.4 1.4 0 0 0 3 4.4v15.2A1.4 1.4 0 0 0 4.4 21h15.2a1.4 1.4 0 0 0 1.4-1.4V4.4A1.4 1.4 0 0 0 19.6 3zM8.337 17.5H5.766V9h2.57v8.5zM7.05 7.905a1.487 1.487 0 1 1 0-2.974 1.487 1.487 0 0 1 0 2.974zm11.45 9.595h-2.57v-4.17c0-.99-.02-2.26-1.377-2.26-1.376 0-1.588 1.077-1.588 2.188v4.242h-2.568V9h2.465v1.166h.035a2.7 2.7 0 0 1 2.428-1.334c2.594 0 3.072 1.708 3.072 3.932V17.5z" />
              </svg>
            </Link>
          </div>

          {/* Copyright Text (Right) */}
          <p className="text-sm text-neutral-700">© Webuildtech Inc. 2024</p>
        </div>
      </FadeIn>
    </Container>
  )
}
