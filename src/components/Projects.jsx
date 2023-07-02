import projects1 from "../assets/culinary.png";
import projects2 from "../assets/wild.png";
import projects3 from "../assets/LinguaVerse.png";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="#projects" className="pt-32 pb-8  bg-slate-900 px-6">
      <h3 className="text-white text-4xl pb-12 pt-6 font-bold text-center">
        My <span>Works</span>
      </h3>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-4 md:gap-x-4 text-white">
        <div className="shadow-lg p-3 shadow-slate-800 rounded-3xl">
          <div className=" h-96 overflow-auto hide-scrollbar ">
            <div className="hover:animate-scroll ">
              <Image
                className="rounded-3xl"
                src={projects1}
                alt="projectsOne"
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold md:text-xl py-3">
              Culinary Chronicles
            </h2>
            <p className="leading-relaxed text-gray-400">
              culinary-chronicles website is designed to provide an exceptional
              culinary experience to our customers. We offer a wide range of
              delicious recipes prepared by our skilled and experienced chefs
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <button className="border-b-2 border-purple-900 hover:text-purple-500">
                <a
                  target="_blank"
                  href="https://github.com/furqanRupom/culinary-chronicles"
                >
                  Github
                </a>
              </button>
              <button className="border-b-2 border-purple-900 hover:text-purple-500">
                <a
                  target="_blank"
                  href="https://culinary-chronicles-auth.web.app/"
                >
                  Live
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="shadow-lg p-3 shadow-slate-800 rounded-3xl">
          <div className=" h-96 overflow-auto hide-scrollbar">
            <div className=" hover:animate-scroll-down">
              <Image
                className="rounded-3xl"
                src={projects2}
                alt="projectsOne"
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold md:text-xl py-3">Wild Whimsies</h2>
            <p className="leading-relaxed text-gray-400">
              Wild Whimsies is a haven for toy lovers of all ages, showcasing a
              delightful array of unique and captivating toys and animals. From
              cuddly plush companions to interactive playsets, there's something
              to enchant every imagination.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <button className="border-b-2 border-purple-900 hover:text-purple-500">
                <a
                  target="_blank"
                  href="https://github.com/furqanRupom/Wild-Whimsies-client"
                >
                  Github
                </a>
              </button>
              <button className="border-b-2 border-purple-900 hover:text-purple-500">
                <a target="_blank" href="https://wild-whimsies-auth.web.app/">
                  Live
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="shadow-lg p-3 shadow-slate-800 rounded-3xl">
          <div className=" h-96 overflow-auto hide-scrollbar">
            <div className="hover:animate-scroll">
              <Image
                className="rounded-3xl"
                src={projects3}
                alt="projectsOne"
              />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold md:text-xl py-3">LinguaVerse</h2>
            <p className="leading-relaxed text-gray-400">
              Welcome to the LanguaVerse! This website is designed to provide an
              immersive and engaging learning experience for students interested
              in learning foreign languages. It offers a range of features and
              functionalities.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <button className="border-b-2 border-purple-900 hover:text-purple-500">
                <a
                  target="_blank"
                  href="https://github.com/furqanRupom/LinguaVerse"
                >
                  Github
                </a>
              </button>
              <button className="border-b-2 border-purple-900 hover:text-purple-500">
                <a target="_blank" href="https://linguaverse-7a472.web.app/">
                  Live
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
