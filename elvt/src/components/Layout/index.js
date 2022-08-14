import './index.scss';
import Navigation from '../Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const Layout = () => {
  return(
    <div className='App'>
        <Navigation />
        <div className='page'>
          <Outlet />
          <Footer />
        </div>
    </div>
  )
}

export default Layout