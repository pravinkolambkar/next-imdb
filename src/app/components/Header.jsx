import Link from 'next/link'
import React from 'react'
import DarkModeSwitch from './DarkModeSwitch'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center p-3 max-w-6xl mx-auto'>
      <ul className='flex gap-4'>
        <SignedIn>
          <UserButton/>
        </SignedIn>
        <SignedOut>
          <Link href={'/sign-in'}>Sign In</Link>
        </SignedOut>
        <li className='hidden sm:block'>
          <Link href={'/'}>Home</Link>
        </li>
        <li className='hidden sm:block'>
          <Link href={'/about'}>About</Link>
        </li>
      </ul>
      
      <div className='flex items-center gap-4'>
        <DarkModeSwitch />
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
            IMDb
          </span>
          <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
      </div>
    </div>
  )
}

export default Header