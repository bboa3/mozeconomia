import React, { memo } from 'react'
import Link from 'next/link'
import LogoImage from '../assets/images/logo'
import SearchIcon from '@mui/icons-material/Search';

const Header: React.FC = memo(() => {
  return (
    <nav className="w-full h-14 px-28 flex justify-between items-center z-30 absolute top-0 right-0">
      <div className="w-36">
        <Link href="">
          <a><LogoImage /></a>
        </Link>
      </div>

      <ul className="flex items-center justify-center">
        <li className="px-5">
          <Link href=""><a className="text-white text-sm">Habitação</a></Link>
        </li>
        <li className="px-5">
          <Link href=""><a className="text-white text-sm">Negócios</a></Link>
        </li>
        <li className="px-5">
          <Link href=""><a className="text-white text-sm">Cámbio</a></Link>
        </li>
        <li className="px-5">
          <Link href=""><a className="text-white text-sm">Banca</a></Link>
        </li>
        <li className="px-5">
          <Link href=""><a className="text-white text-sm">Demografia</a></Link>
        </li>
        <li className="px-5">
          <Link href=""><a className="text-white text-sm">Inflação</a></Link>
        </li>
        <li className="px-5">
          <Link href=""><a className="text-white text-sm">Balança de Pagamento</a></Link>
        </li>
      </ul>
      
      <Link href="">
        <a className="flex items-center bg-gray-400 rounded-lg px-2">
          <input className='w-28 h-4 border-0 bg-transparent text-sm focus:outline-none' placeholder="Pesquisar..." required/>
          <div className="w-4 ml-1"><SearchIcon className='text-white w-5' /></div>
        </a>
      </Link>
    </nav>
  )
})

export default Header