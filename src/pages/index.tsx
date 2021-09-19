import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import ExchangeRates from '../components/ExchangeRates'

import Header from '../components/Header'
import LineChartGraph from '../components/LinearChart'

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

      <div className="font-sans w-screen overflow-hidden">
        <div style={{height: '75vh'}} className="bg-blue relative">
          <div className="container">
            <Header />
        
            <div className="flex justify-between items-center mt-3">
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

        <div className="h-60 w-full"></div>
      </div>
    </div>
  )
}


export default Home;