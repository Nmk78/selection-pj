import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div id='Nav' className='bg-gray-100 w-full h-20 shadow-lg shadow-teal-300 flex flex-row p-2 justify-between sticky -top-10 z-50 '>
      <div id="logo" className='w-16 h-16 rounded-full bg-slate-500'>
      </div>
      <div className='h-full flex items-center '>
      <Link href='/' className='px-2  py-1.5  text-xl text-center font-bold c hover:border-b-4 hover:boder-teal-500'>Home</Link>
      <Link href='/#profile' className='px-2  py-1.5  text-xl text-center font-bold c hover:hvc'>Profile</Link>
      </div>
    </div>
  )
}

export default Nav