import React from 'react'
import Link from 'next/link'
import LogoImage from '../assets/images/logo'

const Header: React.FC = () => {
  return (
    <nav className="w-full flex items-center border-b-2 border-gray-700">
      <div className="w-7, h-7">
        <LogoImage />
      </div>
      <ul className="w-full h-14 flex items-center justify-center">
        <li className="px-5">
          <Link href=""><a className="text-white ">Cambio</a></Link>
        </li>

        <li className="px-5">
          <Link href=""><a className="text-white flex-auto">Índice de preços</a></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header