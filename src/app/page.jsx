import Nav from "../app/components/nav"
import Hero from "../app/components/hero"
import About from "../app/components/about"
import Character from "../app/components/character"
import Question from "./components/faq"
import Footer from "../app/components/footer"

export default function Home() {
  return (
    <div className="max-w-[390px] mx-auto">
      <Nav/>
      <Hero/>
      <About/>
      <Character/>
      <Question/>
      <Footer/>
    </div>
  );
}
