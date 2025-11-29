import Nav from "../app/components/nav"
import Hero from "../app/components/hero"
import About from "../app/components/about"

export default function Home() {
  return (
    <div className="border max-w-[390px]">
      <Nav/>
      <Hero/>
      <About/>
    </div>
  );
}
