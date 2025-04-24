import React from 'react';
import Navbar from "./Navbar"

const Layout = ({ children }: { children: any }) => {
    return (
      <>
        <Navbar/>
        <div className="pt-16">
          {children}
        </div>
      </>
    );
}

export default Layout