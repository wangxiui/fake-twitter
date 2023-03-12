/**
* @name: _app
* @description：_app
* @author: wkk
* @date: 2023-03-10
*/
// tailwind
import '../styles/global.scss';
import { Provider } from 'react-redux'
import store from '../store'

export default function MyApp({ Component, pageProps }) {
  return <>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}
