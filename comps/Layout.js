import Head from 'next/head'
import Title from './Title'


// Configures the Layout of page
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Set Solo</title>
      </Head>
      <div>
        <Title />
        { children }
      </div>
    </>
  );
}

export default Layout;