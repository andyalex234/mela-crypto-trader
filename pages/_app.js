import 'antd/dist/antd.css';
import AppLayout from '../components/layouts/AppLayout';
import '../styles/Applayout.css';

function MyApp({ Component, pageProps }) {
  return (
     <AppLayout>
       <Component {...pageProps} />
     </AppLayout>
  )
}

export default MyApp
