import Head from 'next/head'
import React from 'react'
import BarChartGraph from '../components/BarChart'
import formatData from '../components/BarChart/formatData'
import { useData } from '../components/BarChart/useData'
import ExchangeRates from '../components/ExchangeRates'

import Header from '../components/Header'
import LineChartGraph from '../components/LinearChart'

const Home: React.FC = () => {
  const data = useData()
  
  if (!data) {
    return <pre>Loading...</pre>;
  }

  const graph1Data = formatData(data, 'Produtos alimentares e bebidas não alcoólicas');
  const graph2Data = formatData(data, 'Bebidas alcoólicas e tabaco');
  const graph3Data = formatData(data, 'Habitação, água, electricidade, gás e outros combustíveis');
  const graph4Data = formatData(data, 'Vestuário e calçado');
  const graph5Data = formatData(data, 'Mobiliário, artigos de decoração, equipamento doméstico e manutenção corrente da habitação');
  const graph6Data = formatData(data, 'Saúde');
  const graph7Data = formatData(data, 'Transportes');
  const graph8Data = formatData(data, 'Comunicações');
  const graph9Data = formatData(data, 'Lazer, recreação e cultura');
  const graph10Data = formatData(data, 'Educação');
  const graph11Data = formatData(data, 'Restaurantes, hotéis, cafés e similares ');
  const graph12Data = formatData(data, 'Bens e serviços diversos');

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

      <div className="font-sans w-full h-screen">
        <div className="bg-blue h-3/4 relative">
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

        <div className="w-full mt-96">
          <div style={{width: '90%', marginLeft: '3%'}} className="flex flex-col items-center md:flex-row">
            <div className="w-2/4">
              <p className="font-bold text-center mb-5 mx-4 text-lg">
                Produtos alimentares e bebidas não alcoólicas
              </p>
              {
                graph1Data && (<BarChartGraph data={graph1Data} />)
              }
            </div>
            <div className="w-2/4">
              <p className="font-bold text-center mb-5 mx-4 text-lg">
                Saúde
              </p>
              {
                graph6Data && (<BarChartGraph data={graph6Data} />)
              }
            </div>
          </div>

          <div style={{width: '90%', marginLeft: '3%'}} className="flex flex-col items-center md:flex-row mt-8">
            <div className="w-2/4">
              <p className="font-bold text-center mb-5 mx-4 text-lg">
                Habitação, água, electricidade, gás e outros combustíveis
              </p>
              {
                graph3Data && (<BarChartGraph data={graph3Data} />)
              }
            </div>
            <div className="w-2/4">
              <p className="font-bold text-center mb-5 mx-4 text-lg">
                Transportes
              </p>
              {
                graph7Data && (<BarChartGraph data={graph7Data} />)
              }
            </div>
          </div>

          <div style={{width: '90%', marginLeft: '3%'}} className="flex flex-col items-center md:flex-row mt-8">
            <div className="w-2/4">
              <p className="font-bold text-center mb-5 mx-4 text-lg">
                Mobiliário, artigos de decoração, equipamento doméstico e manutenção corrente da habitação
              </p>
              {
                graph5Data && (<BarChartGraph data={graph5Data} />)
              }
            </div>
            <div className="w-2/4">
              <p className="font-bold text-center mb-5 mx-4 text-lg">
                Bebidas alcoólicas e tabaco
              </p>
              {
                graph2Data && (<BarChartGraph data={graph2Data} />)
              }
            </div>
          </div>

          <div style={{width: '90%', marginLeft: '3%'}} className="flex flex-col items-center md:flex-row mt-8">
            <div className="w-2/4">
              <p className="font-bold text-center mb-5 mx-4 text-lg">
                Vestuário e calçado
              </p>
              {
                graph4Data && (<BarChartGraph data={graph4Data} />)
              }
            </div>
            <div className="w-2/4">
              <p className="font-bold text-center mb-5 mx-4 text-lg">
                Comunicações
              </p>
              {
                graph8Data && (<BarChartGraph data={graph8Data} />)
              }
            </div>
          </div>

          <div style={{width: '90%', marginLeft: '3%'}} className="flex flex-col items-center md:flex-row mt-8">
            <div className="w-2/4">
              <p className="font-bold text-center mb-5 mx-4 text-lg">
                Lazer, recreação e cultura
              </p>
              {
                graph9Data && (<BarChartGraph data={graph9Data} />)
              }
            </div>
            <div className="w-2/4">
              <p className="font-bold text-center mb-5 mx-4 text-lg">
                Educação
              </p>
              {
                graph10Data && (<BarChartGraph data={graph10Data} />)
              }
            </div>
          </div>

          <div style={{width: '90%', marginLeft: '3%'}} className="flex flex-col items-center md:flex-row mt-8">
            <div className="w-2/4">
              <p className="font-bold text-center mb-5 mx-4 text-lg">
                Restaurantes, hotéis, cafés e similares 
              </p>
              {
                graph11Data && (<BarChartGraph data={graph11Data} />)
              }
            </div>
            <div className="w-2/4">
              <p className="font-bold text-center mb-5 mx-4 text-lg">
                Bens e serviços diversos
              </p>
              {
                graph12Data && (<BarChartGraph data={graph12Data} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home;