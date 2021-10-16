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
        
      </div>
    </div>
  )
}


export default Home;