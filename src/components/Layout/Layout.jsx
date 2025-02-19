
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { FloatingWhatsApp } from 'react-floating-whatsapp';
import WhatsAppChat from "@/components/Layout/WhatsAppChat"
export default function Layout({children}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
        <Header />
        {children}
        <Footer />
        <WhatsAppChat
              phoneNumber="919924556577"
              accountName="Computyne"
              statusMessage="We Can beat any written quote by 5% Guaranteed!"
              chatMessage="Hi there! 👋 Welcome to Computyne. How can We help you?"
              avatar="/images/logo/site-logo.svg"
              serviceOptions="Data Entry , Data Processing, Data Management, Others"
          />
        {/* <FloatingWhatsApp
          phoneNumber="97517334422"
          accountName="Computyne"
          statusMessage="Can We Help You Today?"
          chatMessage="Hello there! 🤝 How can We help you?"
          avatar="/images/logo/logo.png"
          notification
          allowEsc
          allowClickAway
        /> */}
    </>
  );
}
