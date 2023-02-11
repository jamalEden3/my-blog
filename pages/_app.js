import '../styles/globals.css';
import { AuthProvider } from '../context/userAuth';
export default function MyApp({ Component, pageProps }) {
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    )
  }

