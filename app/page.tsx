import FAQ from "./Pages/FAQ";
import Featured from "./Pages/Featured";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import Products from "./Pages/Products";
import Testimonials from "./Pages/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Products />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
