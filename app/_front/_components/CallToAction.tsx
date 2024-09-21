import Link from 'next/link'
import React from 'react'

function CallToAction() {
  return (
    <div>
        <section className="bg-gradient-to-br from-purple-500 via purple-700 to-blue-600 text-white flex justify-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="max-w-screen-md">
                  <h2 className="mb-2 text-2xl text-center tracking-tight font-extrabold text-white">Ready to boost your content with AI?</h2>
                  <p className="mb-4 font-light text-white sm:text-xl">Click on Get Started today and revolutionize your content strategy with MyAIBotix.</p>
                  <div className="flex flex-col justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                      <Link href="/dashboard" className="inline-flex animate-bounce items-center justify-center px-4 py-2.5 text-base font-medium text-center text-black bg-white border border-gray-300 rounded-lg">
                          Get Started
                      </Link>  
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}

export default CallToAction