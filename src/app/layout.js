import "./globals.css";
import { Roboto, Inter } from 'next/font/google';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { headerLinks } from "@/util/constants";

const roboto = Roboto({
  weight: ['400', '500', '600', '700', '900'], 
  subsets: ['latin'], 
  variable: '--font-roboto', 
  display: 'swap', 
});

const inter = Inter({
  weight: ['400'], 
  subsets: ['latin'],
  variable: '--font-inter', 
  display: 'swap',
});

export const metadata = {
  title: {
    default: "Fundación SEyVA",
    template: "%s | Fundación SEyVA"
  },
  description: "Salud | Educación | Vivienda | Alimentación",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${roboto.variable} ${inter.variable} antialiased`}
      >
        <Header links={headerLinks}/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
