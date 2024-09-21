import React from 'react'

function BannerSection({pageTitle}:any) {
  return (
    <div className='py-3'>
      <section className="flex justify-center align-middle h-72 bg-center bg-no-repeat object-cover bg-[url('/front-assets/images/ai-hero.jpeg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-36">
          <h3 className='text-center text-white text-5xl'>{pageTitle.title}</h3>
        </div>
      </section>

    </div>
  )
}

export default BannerSection