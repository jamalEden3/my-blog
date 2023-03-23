import React from 'react';
import Header from './Header';
import Footer from './Footer';


function Layout({ children }) {
  return (
    <div className='bg-grey100 mx-auto'>
        <div className='container overflow-hidden'>
          {/* <Header /> */}
            {children}
          {/* <Footer /> */}
        </div>
    </div>
  )
}

export default Layout