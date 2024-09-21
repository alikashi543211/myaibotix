import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className='py-3'>
      <section className="bg-center object-cover bg-no-repeat bg-[url('/front-assets/images/ai-hero.jpeg')] bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Empowering the World's Creativity</h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Generate captivating content effortlessly—from blog titles to social media tags—with the power of AI.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                  <Link href="/dashboard" className="inline-flex animate-bounce items-center justify-center px-4 py-2.5 text-base font-medium text-center text-black bg-white border border-gray-300 rounded-lg">
                      Get Started
                  </Link>  
              </div>
          </div>
      </section>

    </div>
  )
}

export default HeroSection