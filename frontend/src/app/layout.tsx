import Toastify from "../components/Toastify";
import { GlobalProvider } from "../context/GlobalContext";
import './globals.css';

export const metadata = {
  title: 'mern with jwt auth',
  description: 'sdfjiodkjdsjkdsvki',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          <Toastify/>
          {children}
        </GlobalProvider>

      </body>
    </html>
  )
}
