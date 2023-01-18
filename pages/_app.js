import dynamic from 'next/dynamic'
import '../styles/globals.css'
const PWA = dynamic(() => import('../pwa'), {
  ssr: false
});
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
