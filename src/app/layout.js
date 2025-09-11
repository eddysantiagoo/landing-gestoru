import { Urbanist, Nunito } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
});
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: '▷ Software de Facturación Colombia │ Gestoru Software',
    template: '%s | Gestoru Software',
  },
  description: 'Software de facturación Colombia, una herramienta para PYMES y negocios independientes. Potencia y digitaliza tu marca. 100% Requisitos DIAN',
  robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  openGraph: {
    locale: 'es_ES',
    type: 'website',
    title: '▷ Software de Facturación Colombia │ Gestoru Software',
    description: 'Software de facturación Colombia, una herramienta para PYMES y negocios independientes. Potencia y digitaliza tu marca. 100% Requisitos DIAN',
    url: 'https://principal.gestoru.com/',
    siteName: 'Gestoru Software',
    images: [
      {
        url: '/assets/images/formulario.png',
        width: 1920,
        height: 1080,
        alt: 'Software de Factura Electrónica DIAN',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software de Facturación Colombia │ Gestoru Software',
    description: 'Software de facturación Colombia, una herramienta para PYMES y negocios independientes. Potencia y digitaliza tu marca. 100% Requisitos DIAN',
    images: ['/assets/images/formulario.png'],
  },
  verification: {
    google: 'S_I3Ft24V71qMEkKOEm94zZ0It3ZtYVNS1-HdlCwLw8',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CO">
      <head>
        <meta name="author" content="Gestoru Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://principal.gestoru.com/" />
        <link rel="icon" href="/assets/images/favicon.png" sizes="32x32" />
        <link rel="icon" href="/assets/images/favicon.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/assets/images/favicon.png" />
        <meta name="msapplication-TileImage" content="/assets/images/favicon.png" />
      </head>
      <body className={`${urbanist.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
