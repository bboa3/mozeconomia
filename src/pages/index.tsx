import React from 'react'
import Head from 'next/head'
import Image from 'next/Image'

import ExchangeRates from '../components/ExchangeRates'

import Header from '../components/Header'
import LineChartGraph from '../components/LinearChart'

import coinImg from '../assets/images/mocambique-moedas.jpg'
import Products from '../components/Products'

const Home: React.FC = () => {

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Arlindo Boa" />
        <meta name="robots" content="index" />
        <meta name="title" content="A economia moçambicana em gráficos e taxas de câmbio"/>
        <meta
          name="description"
          content="MozEconomia facilita a sua vida exibindo gráficos informativos sobre a economia Moçambicana e as taxas de câmbio"
        />
        <meta 
          name="keywords"
          content="
            Economia moçambicana, Moçambique, , Economia, Taxas de câmbio, Taxas de inflação, Câmbio, Inflação, Comércio, Negócio
          "
        />
        <title>Página Inicial - MozEconomia</title>
      </Head>

      <Header />
      <div className="font-sans w-full h-screen">
        <div className="h-3/4 absolute z-20">
          <div className="h-full flex md:ml-6 mt-14 relative">
            <div className="container">
              <div className="flex justify-center items-center mt-3">
                <div className="w-2/6">
                  <p className="text-white text-4xl">
                    Moçambique registou uma inflação anual de 5,61% em agosto, após 5,48% em julho.
                  </p>
                </div>
              
                <div className="w-3/5 mt-5">
                  <div 
                    className="text-white text-center mb-1 text-sm"
                  >
                    Variação de Preços (Inflação)
                  </div>
                  <LineChartGraph />
                </div>
              </div>
            </div>

            <ExchangeRates />
          </div>
        </div>

        <div className="relative w-full h-screen truncate">
          <Image className="" layout="fill" src={coinImg} />
          <div className="w-full h-full absolute top-0 right-0 z-10 opacity-70 bg-blue"></div>
        </div>

        <div className="w-full mt-96">
          <Products />
        </div>
      </div>
    </div>
  )
}


export default Home;