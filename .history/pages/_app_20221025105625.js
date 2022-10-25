import '../styles/globals.css';
import { MoralisProvider } from 'react-morals';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider>
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
