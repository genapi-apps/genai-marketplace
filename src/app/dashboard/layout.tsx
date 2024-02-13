import React from 'react'

// @ts-ignore
// @ts-nocheck
 export const metadata = {
  title: "Dashboard - Gen AI Market Place ",
  description: "Gen AI Market Place",
};
 
type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div> 
      {children} 
    </div>
  );
};

export default Layout;