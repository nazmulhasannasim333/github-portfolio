"use client"
import { FaLongArrowAltRight } from 'react-icons/fa';
import GlowCard from '../helper/glow-card';
import SectionTitle from '../helper/section-title';
import { useState } from 'react';
import ProjectCard from './project-card';
import { projects } from '@/data/project';

const Projects = () => {

    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
      setShowAll(!showAll);
    };
  

  return (
    <div id="repositories" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="Latest Projects" />
      <div className="grid py-12 grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        { showAll ?
          projects.map((project, i) => (
            <GlowCard key={i} identifier={`project-${i}`}>
              <ProjectCard project={project} />
            </GlowCard>
          ))
          : projects.slice(0, 6).map((project, i) => (
            <GlowCard key={i} identifier={`project-${i}`}>
              <ProjectCard project={project} />
            </GlowCard>
          ))
        }
      </div>

      <div className="w-full justify-center flex items-center">
        <span
          onClick={handleShowAll}
          className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
        >
          <button className="px-3 text-xs md:px-4 py-2 md:py-2.5 bg-[#0d1224] rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
            <span>{showAll ? "Show Less" : "Show All Projects"}</span>
            <FaLongArrowAltRight size={16} />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Projects;