import type { Metadata } from "next";
import { Inter,Orbitron,Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { GlobalProviders } from "@/providers/GlobalProviders";
import Header from "@/components/Header";
import Sidebar from "@/components/SideBar/Sidebar";
import { Button } from "@nextui-org/react";
import { MessageSquarePlus, QrCode, Send } from "lucide-react";
import PoweredBy from "@/components/SideBar/PoweredBy";

const inter = Inter({ subsets: ["latin"] });
export const PixelifySans = Pixelify_Sans({ subsets: ["cyrillic"] });
const orbitron = Orbitron({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "X Bridge",
  description: "Take your funds to the next chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        <GlobalProviders>
          <div className=" flex flex-col mt-12 items-center align-middle min-h-screen">
          <div className="wrapper max-w-screen-lg grid grid-cols-12 gap-10">
            <div className="col-span-4 min-h-full ">
              <Sidebar />
            </div>
            <div className='flex flex-col justify-start col-span-8 gap-10'>
            <Header />
            <PoweredBy/>
            <div className="bg-content1 w-full rounded-small px-5 py-5 ">
            {children}
            </div>
            </div>
          </div>
          </div>
          
        </GlobalProviders>
      </body>
    </html>
  );
}
