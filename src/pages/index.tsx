import Head from 'next/head'
import Image from 'next/image'

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

      <Header />

      <div className="container font-sans">
        <h1 className="">HElLO World!</h1>
        <button>
          MozEconomia
        </button> 
      </div>
    </div>
  )
}
