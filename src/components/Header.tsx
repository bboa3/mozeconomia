import React, { memo } from 'react'
import Link from 'next/link'
import LogoImage from '../assets/images/logo'
import User from '../assets/icons/User'

const Header: React.FC = memo(() => {
  return (
    <nav className="w-full h-14 px-28 flex justify-between items-center z-30 absolute top-0 right-0">
      <div className="w-6">
        <Link href="">
          <a><LogoImage /></a>
        </Link>
      </div>

      <ul className="flex items-center justify-center">
        <li className="px-5">
          <Link href=""><a className="text-white font-bold">Cambio</a></Link>
        </li>

        <li className="px-5">
          <Link href=""><a className="text-white font-bold">Índice de preços</a></Link>
        </li>
      </ul>
      
      <Link href="">
        <a className="flex items-center">
          <span className="text-white">Inscreva-se</span>
          <div className="w-4 ml-1"><User /></div>
        </a>
      </Link>
    </nav>
  )
})

export default Header