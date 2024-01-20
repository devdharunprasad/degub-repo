"use client";
import "./globals.css";
import { Inter, Open_Sans } from "next/font/google";
import Navbar from "./shared/navbar";
import Footer from "./shared/footer";
import NavMob from "./shared/mobile/NavMob";
// import LoadingAnimation from "./shared/loadinng-animation"
import { useEffect, useState } from "react";


const openSans = Open_Sans({ subsets: ["latin"] });



export default function RootLayout({ children }) {

  const [displayAnimation, setDisplayAnimation] = useState(true)


useEffect(() => {
  setTimeout(() => {
    setDisplayAnimation(false)
  },2000)
},[])

  return (
    <html lang="en">
      <body className={openSans.className}>
        <div id = "scroll-to-top"/>
        {/* <LoadingAnimation isVisible = {displayAnimation}/> */}
        {
          !displayAnimation && (<>
            
            <Navbar />
            <NavMob />
            {children}
            <Footer />
          </>)
        }

      </body>
    </html>
  );
}
