import "./globals.css";
import { Roboto, Inter } from 'next/font/google';

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
  title: "Fundación SEyVA",
  description: "Salud | Educación | Vivienda | Alimentación",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${roboto.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
