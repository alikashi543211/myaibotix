import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function FeatureCard(item:any) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all">
        <div className='p-4'>
            <Image className={"rounded-t-lg"} width={80} height={80} src={item.icon} alt="" />
        </div>
        <div className="p-5">
            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.desc}</p>
        </div>
    </div>
    )
}

export default FeatureCard