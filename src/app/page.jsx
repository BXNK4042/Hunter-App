import Hero from "../app/components/hero"
import About from "../app/components/about"
import Character from "./components/team"
import Question from "./components/faq"

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Character/>
      <Question/>
    </div>
  );
}
