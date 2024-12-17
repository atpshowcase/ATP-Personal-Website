import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>
        {/* <Header /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
