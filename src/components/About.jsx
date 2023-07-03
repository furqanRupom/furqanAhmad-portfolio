import Image from "next/image";
import about from "@/assets/about.png";
import Link from "next/link";

const About = () => {
  return (
    <div id="#about" className="min-h-screen bg-slate-900 -mt-60">
      <h3 className="text-4xl font-bold text-center pt-5 pb-12 text-white">
        About <span className="text-purple-900">Me</span>
      </h3>
      <section className="grid grid-cols-1  lg:grid-cols-[1fr,4fr] justify-items-center lg:justify-items-stretch  max-w-7xl mx-auto px-3 sm:px-8 lg:px-0 gap-5">
        <div>
          <Image
            height={400}
            className="rounded-t-[500px] shadow-2xl shadow-purple-900 ring ring-purple-900 rounded-b-[500px] "
            src={about}
            alt="about"
          />
        </div>

        <div className="text-white grid grid-cols-1 lg:grid-cols-[4fr,1fr] items-center gap-x-12">
          <div>
            <div>
              <h3 className="font-thin text-2xl  lg:text-4xl py-3">
                Hi,I'm{" "}
                <span className="font-bold border-b-2 border-purple-900">
                  Furqan Ahmad
                </span>
              </h3>

              <p className="leading-relaxed text-sm sm:text-base xl:text-lg">
                I am a MERN stack developer with a strong passion for building
                user-friendly web applications. I enjoy taking on new challenges
                and expanding my skills in web development. With a focus on
                creating responsive web interfaces and implementing server-side
                functionalities, I am dedicated to delivering high-quality code
                and providing engaging user experiences.
              </p>
            </div>
          </div>
          <div>
            <div className=" hidden sm:block text-[100px] lg:text-[80px] xl:text-[100px] bg-purple-900/25 w-24 h-24 relative rounded-[100%] lg:mx-auto mt-5 lg:mt-0">
              <h3 className="absolute -top-5 -left-4 lg:-top-0 lg:-left-0 xl:-top-5 xl:-left-4">20</h3>
            </div>

            <p className="py-3 hidden sm:block text-lg  lg:text-center">Projects completed</p>
          </div>
        </div>
      </section>

      <div className="text-white text-[10px] gap-x-0 sm:text-base   md:text-lg  grid   grid-cols-2 lg:grid-cols-4 gap-y-3  md:gap-10  lg:items-center lg:justify-items-center max-w-7xl mx-auto w-full pt-8 pb-20 px-3">
        <p>
            <h3 className="text-gray-400 ">
                Name:
            </h3>
            <h5>
                Furqan Ahmad rupom
            </h5>
        </p>
        <p>
            <h3  className="text-gray-400 ">
                Email:
            </h3>
            <h5 className="underline text-white ">
                <a href="furqanrupom978@gmail.com">furqanrupom978@gmail.com</a>
            </h5>
        </p>

        <p>
            <h3  className="text-gray-400 ">
                date of birth:
            </h3>
            <h5>
                30 Aug 2002
            </h5>
        </p>

        <p>
            <h3  className="text-gray-400 ">
                From:
            </h3>
            <h5>
                Feni,Bangladesh
            </h5>
        </p>
      </div>
    </div>
  );
};

export default About;
