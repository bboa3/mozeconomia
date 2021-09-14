import Head from 'next/head'
import Image from 'next/image'
import Converter from '../components/Converter'
import LinearGraph from '../components/LinearGraph'

import Header from '../components/Header'

export default function Home() {
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

      <div className="font-sans w-screen h-screen">
        <div className="bg-blue h-4/5">
          <div className="container">
            <Header />
        
            <div className="flex items-center mt-3">
              <div className="w-2/6">
                <p>
                  Cambio e a economia moçambicana em gráficos 
                </p>
              </div>
            
              <div className="w-1/2">
                <div className="text-white text-center ml-60">Variação de Preços (Inflação) 2021</div>
                <LinearGraph />
              </div>
            </div>
          </div>
        </div>


        <div>
          <Converter />
        </div>
      </div>
    </div>
  )
}
