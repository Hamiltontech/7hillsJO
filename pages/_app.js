import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence
    exitBeforeEnter
    initial={false}
    onExitComplete={() => window.scrollTo(0, 0)}
>
  <Component {...pageProps} />
  </AnimatePresence>
  )
}

export default MyApp
