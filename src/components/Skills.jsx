const Skills = () => {
  return (
    <section id="#skills" className="bg-slate-900 text-white pt-32 md:pt-16">
      <div>
        <h3 className="text-4xl text-center font-bold text-white pb-12">
          My <span className="text-purple-900">Skills</span>
        </h3>

        {/* skills section */}
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 max-w-7xl mx-auto gap-x-10 gap-y-14 md:gap-y-5 lg:gap-x-14">
          <div>
            <div className="flex justify-between text-lg pb-4">
              <h3>HTML/CSS</h3>
              <p>95%</p>
            </div>
            <div className="h-3 w-full  bg-slate-700 relative rounded-full">
              <div className="absolute inset-0 w-[95%]  h-full bg-purple-900 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-lg pb-4">
              <h3>Javascript</h3>
              <p>70%</p>
            </div>
            <div className="h-3 w-full rou2ded-full bg-slate-700 relative rounded-full">
              <div className="absolute inset-0 w-[70%] h-full bg-purple-900 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-lg pb-4">
              <h3>TailwindCSS</h3>
              <p>95%</p>
            </div>
            <div className="h-3 w-full rou2ded-full bg-slate-700 relative rounded-full">
              <div className="absolute inset-0 w-[95%] h-full bg-purple-900 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-lg pb-4">
              <h3>Bootstrap</h3>
              <p>90%</p>
            </div>
            <div className="h-3 w-full rou2ded-full bg-slate-700 relative rounded-full">
              <div className="absolute inset-0 w-[90%] h-full bg-purple-900 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-lg pb-4">
              <h3>React JS</h3>
              <p>75%</p>
            </div>
            <div className="h-3 w-full rou2ded-full bg-slate-700 relative rounded-full">
              <div className="absolute inset-0 w-[75%] h-full bg-purple-900 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-lg pb-4">
              <h3>Express JS</h3>
              <p>70%</p>
            </div>
            <div className="h-3 w-full rou2ded-full bg-slate-700 relative rounded-full">
              <div className="absolute inset-0 w-[70%] h-full bg-purple-900 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-lg pb-4">
              <h3>MongoDB</h3>
              <p>70%</p>
            </div>
            <div className="h-3 w-full rou2ded-full bg-slate-700 relative rounded-full">
              <div className="absolute inset-0 w-[70%] h-full bg-purple-900 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-lg pb-4">
              <h3>Next JS</h3>
              <p>50%</p>
            </div>
            <div className="h-3 w-full rou2ded-full bg-slate-700 relative rounded-full">
              <div className="absolute inset-0 w-[50%] h-full bg-purple-900 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
