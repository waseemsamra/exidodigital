import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = React.memo(function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
});

export default Layout;
