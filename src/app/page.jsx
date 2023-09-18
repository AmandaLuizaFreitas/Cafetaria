import { About } from "@/components/About/About";
import { Details } from "@/components/Details/Details";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Navbar } from "@/components/Navbar/Navbar";
import { Products } from "@/components/Products/Products";
import { Reviews } from "@/components/Reviews/Reviews";
import { Social } from "@/components/Social/Social";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>café do sol </title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <main >
       <Navbar/>
       <Header/>
       <Details/>
       <Products/>
       <About/>
       <Social/>
       <Reviews/>
       <Footer/>
    </main>
    </>
  )
}
