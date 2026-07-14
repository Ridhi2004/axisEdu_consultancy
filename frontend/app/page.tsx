import Hero from "./components/Hero";
import Introduction from "./components/Introduction"
import Aboutus from "./components/Aboutus"
import Latest from "./components/Latest"
import Testimonials from "./components/Testimonials"
import Affiliates from "./components/Affiliates"
import Faq from "./components/Faq"

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Aboutus />
      <Latest />
      <Testimonials />
      <Affiliates />
      <Faq />
    </>
  );
}