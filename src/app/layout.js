import { Urbanist, Poppins,Raleway,Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import TanstackProvider from "@/providers/TanstackProvider";
// Urbanist font
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const playdisplay = Playfair_Display({
  variable: "--font-playdisplay",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Villa X Room Booking and Rental System",
  description: "villax is a online room booking and rental smart system for all types of users. it is a complete solution for room booking and rental system. it is a complete solution for room booking and rental system. it is a complete solution for room booking and rental system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${urbanist.variable} ${poppins.variable} ${raleway.variable} ${playdisplay.variable} antialiased`}
      >
        <TanstackProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
