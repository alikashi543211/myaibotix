import MenuItems from '@/app/(data)/MenuItems'
import Link from 'next/link'
import React from 'react'
const currentYear = new Date().getFullYear();
function FooterSection() {
  return (
    <div>
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-5 ">
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <a href="https://flowbite.com/" className="hover:underline">MyAIBotix</a>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                  {MenuItems.map(({ id, link, title }) => (
                    <li>
                        <Link href={link} className="hover:underline me-4 md:me-6">{title}</Link>
                    </li>
                  ))}
                </ul>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default FooterSection