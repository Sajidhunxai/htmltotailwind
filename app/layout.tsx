

import './globals.css'
import { Inter } from 'next/font/google'
import ClientOnly from "./components/ClientOnly";
import Navbar from './components/Navbar';
import Script from 'next/script';
import Banner from './components/Banner';
import Section from './components/Section';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web Design & Development Agency | SquareNetMedia',
  description: 'At SquareNet Media, we provide the full team: SEO, Web Design, Graphic Design, Web Development, and many other marketing services for you to explore.',
}

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
  
}) {
 
  return (
    <html lang="en">
  
   <body className={`landing is-preload ${inter.className}`}>{children}

      <ClientOnly>
        
     

      <div id="page-wrapper">
      
      <Navbar  />
      <Banner/>

      <Section/>

      <Footer/>
      </div>
      </ClientOnly>
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/jquery.scrollex.min.js"></script>
      <script src="assets/js/jquery.scrolly.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script>
     
    </body>
    </html>
  )
}


