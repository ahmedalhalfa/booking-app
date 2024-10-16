import { Inter } from 'next/font/google';
import Head from 'next/head';
import '../assests/styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthWrapper from '../components/AuthWrapper';
const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Bookit App | Book a room',
  description: 'Book a meeting or conference room for your team',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthWrapper>
          <Header />
          <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
          <Footer />
          <ToastContainer />
        </AuthWrapper>
      </body>
    </html>
  );
}
