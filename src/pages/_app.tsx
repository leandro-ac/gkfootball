import { ChakraBaseProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import {theme} from '@/styles/theme'
import { Navbar } from '@/componnets/Navbar'
import { Footer } from '@/componnets/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme = {theme}>
     <Navbar/>
     <Component {...pageProps} />
     <Footer/>
    </ChakraBaseProvider>
  )
}
