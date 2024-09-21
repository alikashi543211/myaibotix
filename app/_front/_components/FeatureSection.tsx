import Features from '@/app/(data)/Features';
import TemplateCard from '@/app/dashboard/_components/TemplateCard';
import Image from 'next/image'
import React from 'react'
import FeatureCard from './FeatureCard';

function FeatureSection() {
  return (
    <div>
      <div className='flex justify-center pt-8'>
        <h5 className="mb-2 text-4xl tracking-tight text-gray-900 dark:text-white">Features of MyAIBotix</h5>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 p-12'>
        {Features.map((item:any, index:any) => (
          <FeatureCard {...item} />
        ))}
      </div>
    </div>
  )
}

export default FeatureSection