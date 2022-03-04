import { globalStyles } from '@/styled/base'

function App({ Component, pageProps }) {

  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  )
}

export default App;
