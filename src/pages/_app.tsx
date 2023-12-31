import { ChakraBaseProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import {theme} from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme = {theme}>
     
     <Component {...pageProps} />
     
    </ChakraBaseProvider>
  )
}
