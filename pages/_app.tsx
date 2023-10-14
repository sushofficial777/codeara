import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/src/Components/Navbar';
import {motion, AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar/>
    <AnimatePresence>
      <motion.div
      initial={{opacity: 0, y:15}}
      animate={{opacity:1, y:0}}
      exit={{opacity:0, y:15}}
      transition={{delay:0.25}}
      >
    <Component {...pageProps} />
    </motion.div>
    </AnimatePresence>
    </>
  )
}
