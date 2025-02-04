import { AppProps } from 'next/app'; // Import the types from Next.js
import '../styles/globals.css'; // Global styles

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

