import React, {  useState } from 'react'

interface Trade {
  icon: string
  code: string
  price: number
}

interface Props {
  trades: Trade[]
}

const MarketShow: React.FC<Props> = ({ trades }) => {
  return (
    <div className='w-full h-10 border-t border-b border-gray-400 overflow-hidden box-border mx-auto relative'>
      <div style={{ width: '200%' }} className="flex h-full animate-market absolute left-0 ">
				<span className="w-1/2 h-full flex justify-around items-center">
          {
            trades.map(trade => {
              return (
                <div className='flex justify-center items-center'>
                  <img className='w-5 h-2.5 px-0.5' src={trade.icon} />
                  <span className='px-0.5 text-sm'>{trade.code}</span>
                  <span className='px-0.5 text-sm text-green-400'>{trade.price}</span>
                </div>
              )
            })
          }
        </span>
        <span className="w-1/2 h-full flex justify-around items-center">
          {
            trades.map(trade => {
              return (
                <div className='flex justify-center items-center'>
                  <img className='w-5 h-2.5 px-0.5' src={trade.icon} />
                  <span className='px-0.5 text-sm'>{trade.code}</span>
                  <span className='px-0.5 text-sm text-green-400'>{trade.price}</span>
                </div>
              )
            })
          }
        </span>
      </div>
    </div>
  )
}

export default MarketShow