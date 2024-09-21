import Image from 'next/image'
import React from 'react'
import AboutImages from '@/app/(data)/AboutImages'
function AboutSection() {
  return (
    <div>
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                    <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                    <Image className="rounded-xl object-cover" src={AboutImages.image_1} alt="MyAIBotix image" width={400} height={300} />
                    </div>
                    <Image className="sm:ml-0 ml-auto rounded-xl object-cover" src={AboutImages.image_2} alt="MyAIBotix image" width={400} height={300} />
                </div>
                
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                        <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                        Empowering AI-Driven Content Creation
                        </h2>
                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                        At MyAIBotix, we revolutionize content creation using AI to help creators, businesses, and marketers generate engaging content. From YouTube tags, Instagram tags, to blog titles and topic ideas, our AI optimizes content to meet your unique needs.
                        </p>
                    </div>
                    
                    <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                        <div className="flex-col justify-start items-start inline-flex">
                        <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">5+</h3>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Years of Innovation</h6>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                        <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">1000+</h4>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">AI-Generated Content Pieces</h6>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                        <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">300+</h4>
                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Satisfied Clients Worldwide</h6>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>                
    </div>
  )
}

export default AboutSection