import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <nav className="w-full">
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