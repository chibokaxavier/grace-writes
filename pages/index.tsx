import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Reviews from "@/components/Reviews";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)]  text-white h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory z-0">
      <Head>
        <title>Grace Writes</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="services" className="snap-center">
       <Services />
      </section>
      <section className="snap-center">
        <Testimonials/>
      </section>
      <section id="reviews" className="snap-center">
        <Reviews/>
        </section>
        <section id="contactme" className="snap-center">
          <ContactMe/>
        </section>
    </div>
  );
}
