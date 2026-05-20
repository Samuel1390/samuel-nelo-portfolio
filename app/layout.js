import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/context/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Samuel Nelo",
  description:
    "Front-end Developer💻 with a passion for Software and Technology. Dedicated to creating web applications that are both functional and visually appealing.",
  keywords:
    "Front-end Developer💻 with a passion for Software and Technology. Dedicated to creating web applications that are both functional and visually appealing.",
  authors: [{ name: "Samuel Nelo" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Samuel Nelo - front-end developer",
    description:
      "Samuel Nelo, porfolio Samuel Nelo, front-end developer, software, technology, web applications, functional, visually appealing, sistemas, programador de frontend, diseñador de interfaces, desarrollador web, aplicaciones web, software, tecnología, programador, desarrollador de software, ingeniero de software",
    url: "https://samuel-nelo-portfolio-dc0nb5i6c-samuel-nelos-projects.vercel.app",
    siteName: "Samuel Nelo Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/195463641?v=4",
        alt: "Samuel Nelo's image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Nelo - front-end developer",
    description:
      "Front-end Developer💻 with a passion for Software and Technology. Dedicated to creating web applications that are both functional and visually appealing.",
    images: ["https://avatars.githubusercontent.com/u/195463641?v=4"],
    imageAlt: "Samuel Nelo's image",
  },
  icons: {
    icon: "https://avatars.githubusercontent.com/u/195463641?v=4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <LanguageProvider>
        <body className="min-h-full flex flex-col">{children}</body>
      </LanguageProvider>
    </html>
  );
}
