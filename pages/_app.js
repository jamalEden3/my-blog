import '../styles/globals.css';
import { AuthProvider } from '../context/userAuth';
import Header from '../components/Header';


export default function MyApp({ Component, pageProps }) {
    return (
      <AuthProvider>
        <Header />
          <Component {...pageProps} />
      </AuthProvider>
    )
  }

