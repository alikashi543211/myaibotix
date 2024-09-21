'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FileClock, Home, LayoutDashboard, Settings, WalletCards } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function SideNav() {
    const menuList = [
        {
            name: 'Dashboard',
            icon: LayoutDashboard,
            path: '/dashboard'
        },
        // {
        //     name: 'History',
        //     icon: FileClock,
        //     path: '/dashboard/history'
        // },
        // {
        //     name: 'Billing',
        //     icon: WalletCards,
        //     path: '/dashboard/billing'
        // },
        // {
        //     name: 'Setting',
        //     icon: Settings,
        //     path: '/dashboard/setting'
        // },
    ];
    const path = usePathname();
    useEffect(() => {
        console.log(path)
    })
  return (
    <div className="h-screen p-5 shadow-sm border bg-white">
        <div className='flex justify-center'>
            <Link href={'/'}>
                <Image src={'/front-assets/images/logo.png'} width={80} height={60} alt="MyAIBotix" />
            </Link>
        </div>
        <hr className='my-5' />
        <div className='mt-3'>
            {menuList.map( (menu, index) => (
                <Link href={'/dashboard'}>
                <div className={`flex gap-2 mb-2 p-3
                hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center bg-primary text-white
                ${path === menu.path&& 'bg-primary text-white'}
                `}>
                    <menu.icon className='h-6 w-6' />
                    <h2 className='text-lg'>{menu.name}</h2>
                </div>  
                </Link>  
            ))}
        </div>
    </div>
  )
}

export default SideNav