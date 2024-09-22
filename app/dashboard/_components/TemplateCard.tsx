import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item:TEMPLATE) {
  return (
    <Link href={'/dashboard/content/' + item?.slug}>
      <div className='p-5 shadow-md rounded-md border h-auto lg:h-52 bg-white flex flex-col gap-3 
      cursor-pointer hover:scale-105 transition-all duration-300'>
        <Image
          src={item.icon}
          alt='icon'
          width={50}
          height={50}
          className='w-12 h-12 lg:w-16 lg:h-16 object-contain mx-auto'
        />
        <h2 className='font-bold text-md text-center lg:text-left'>
          {item.name}
        </h2>
        <p className='text-gray-500 text-sm lg:text-base line-clamp-3'>
          {item.desc}
        </p>
      </div>
    </Link>

  )
}

export default TemplateCard