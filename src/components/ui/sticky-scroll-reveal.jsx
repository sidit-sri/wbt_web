'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0,
    )
    setActiveCard(closestBreakpointIndex)
  })

  const backgroundColors = [
    'var(--slate-900)',
    'var(--black)',
    'var(--neutral-900)',
  ]
  const linearGradients = [
    'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
    'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
    'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
  ]

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  )

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length])
  }, [activeCard])

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
      style={{
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // Internet Explorer 10+
      }}
    >
      {/* Hide scrollbar for all browsers */}
      <style jsx>{`
        .scroll-container::-webkit-scrollbar {
          display: none; // Chrome, Safari, and newer Edge
        }
        .scroll-container {
          -ms-overflow-style: none; // Internet Explorer 10+
          scrollbar-width: none; // Firefox
        }
      `}</style>

      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
              <motion.button
                onClick={() => window.open(item.link, '_blank')} // Dynamically set the link from item.link
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  scale: activeCard === index ? 1 : 0.95,
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'var(--blue-600)', // Change to a darker shade on hover
                }}
                whileTap={{
                  scale: 0.95, // Slight shrink when clicked
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                }}
                className="mt-10 rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none"
              >
                Learn More
              </motion.button>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          'sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block',
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  )
}
