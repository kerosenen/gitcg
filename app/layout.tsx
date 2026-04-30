import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Abel, Outfit } from "next/font/google";

const abel = Abel({
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${abel.className} tracking-wide h-screen overflow-hidden`}>
        
        {/* FIXED SIDEBAR */}
        <div className={`fixed top-0 left-0 h-screen w-64 shadow-[6px_0_25px_rgba(0,0,0,0.3)] ${outfit.className}`}>
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="ml-64 flex h-screen">
          
          {/* DIVIDER */}
          <div className="w-px bg-gradient-to-b from-transparent via-[#000000] to-transparent" />

          {/* SCROLLABLE PAGE */}
          <main className="flex-1 overflow-y-auto bg-main-gradient">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}