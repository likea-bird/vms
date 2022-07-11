import Context from '@/store/Context'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return(
    getLayout(
      <Context>
        <Component {...pageProps} />
      </Context>
    )
  )
}