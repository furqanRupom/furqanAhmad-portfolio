import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main>
      <section className="flex min-h-[500px] scroll-smooth  flex-col items-center py-24  px-8 sm:px-12 md:px-24">
        <Banner />
        <div className="-z-10 ">
          <ParticlesBackground />
        </div>
      </section>

      <section className="z-50 ">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </section>

      <footer className="footer bg-slate-900 text-white w-full mx-auto text-center footer-center p-4 bg-base-300 text-base-content pb-16 md:pb-8">
        <div>
          <p className="text-sm sm:text-base">Copyright &copy; 2023 - All right reserved by Furqan Ahmad</p>
        </div>
      </footer>
    </main>
  );
}
