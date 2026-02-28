
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';
import CursorGlow from './CursorGlow';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-neonBlue/30 selection:text-white overflow-hidden">
      {/* Background Engine */}
      <AnimatedBackground />
      
      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 pt-20">
        {children}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Cursor System */}
      <CursorGlow />
    </div>
  );
};

export default Layout;
