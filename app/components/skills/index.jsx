"use client";
import SectionTitle from "../helper/section-title";
import Image from "next/image";
import GlowCard from "../helper/glow-card";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import { skills } from "@/data/skills";



const MySkills = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <SectionTitle title="Technical Skills" />
      <div className="grid py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
        {showAll
          ? skills.map((skill, i) => (
              <GlowCard key={i} identifier={`my-skill-${i}`}>
                <div className="sm:cursor-pointer relative group w-full h-[170px] flex items-center gap-5 px-3 py-3 bg-primary-bg">
                  <div className="w-1/5">
                    <Image
                      src={skill?.logo}
                      height={100}
                      width={100}
                      alt="skill"
                      className="group-hover:scale-125 duration-300 overflow-hidden"
                    />
                  </div>
                  <div className="w-4/5">
                    <h6 className="text-2xl">{skill.name}</h6>
                    <p className="italic">{skill.para}</p>
                  </div>
                </div>
              </GlowCard>
            ))
          : skills.slice(0, 9).map((skill, i) => (
              <GlowCard key={i} identifier={`my-skill-${i}`}>
                <div className="sm:cursor-pointer relative group w-full h-[170px] flex items-center gap-5 px-3 py-3 bg-primary-bg">
                  <div className="w-1/5">
                    <Image
                      src={skill?.logo}
                      height={100}
                      width={100}
                      alt="skill"
                      className="group-hover:scale-125 duration-300 overflow-hidden"
                    />
                  </div>
                  <div className="w-4/5">
                    <h6 className="text-2xl">{skill.name}</h6>
                    <p className="italic">{skill.para}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
      </div>

      <div className="w-full justify-center flex items-center">
        <span
          onClick={handleShowAll}
          className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
        >
          <button className="px-3 text-xs md:px-4 py-2 md:py-2.5 bg-[#0d1224] rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
            <span>{showAll ? "Show Less" : "Show All"}</span>
            <FaLongArrowAltRight size={16} />
          </button>
        </span>
      </div>
    </div>
  );
};

export default MySkills;
