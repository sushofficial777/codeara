import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// IMPORTING COMPONENTS............
import NavBar from '@/src/Components/NavBar/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavBar/>
    <Component {...pageProps} />
    </>
  )
}
