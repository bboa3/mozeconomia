import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DataProvider from '../contexts'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </>
  )
}

export default MyApp