import About from "@/components/About";
import Banner from "@/components/Banner";
import ParticlesBackground from "@/components/ParticlesBackground";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main>
      <section className="flex min-h-[500px] scroll-smooth  flex-col items-center py-24 px-24">
        <Banner />
        <div className="-z-10 ">
          <ParticlesBackground />
        </div>
      </section>

      <section className="z-50 ">
        <About />
        <Skills />
        <Projects />
      </section>
    </main>
  );
}
