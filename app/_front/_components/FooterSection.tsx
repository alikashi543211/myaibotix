import MenuItems from '@/app/(data)/MenuItems';
import Link from 'next/link';
import React from 'react';

const currentYear = new Date().getFullYear();

function FooterSection() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <span className="block text-sm text-gray-500 text-center md:text-left dark:text-gray-400">
            © {currentYear} <a href="https://flowbite.com/" className="hover:underline">MyAIBotix</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-4 text-sm font-medium text-gray-500 md:mt-0 dark:text-gray-400">
            {MenuItems.map(({ id, link, title }) => (
              <li key={id} className="mr-4 md:mr-6">
                <Link href={link} className="hover:underline">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
