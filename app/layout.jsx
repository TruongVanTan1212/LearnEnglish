import { Inter } from "next/font/google";
import Header from "./components/Header";
import Section from "./components/Section";
import Topteachers from "./components/Topteachers";
import Route from "./components/Route";
import Footer from "./components/Footer";
import "./assets/styles/globals.css";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: "English learning platform",
  description: "1-1 English Education Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
          <Header />
          <Section />
            <main className=" mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"></main>
            {children}  
          <Topteachers />
          <Route />
          <Footer />
      </body>
    </html>
  );    
}     
    