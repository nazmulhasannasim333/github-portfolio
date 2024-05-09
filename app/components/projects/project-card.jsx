import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
     <Link href={project?.liveLink} target="_blank">
      <div className="lg:p-8 p-3 lg:h-60 h-28 flex flex-col justify-between group bg-primary-bg hover:bg-[#101835] duration-500">
        <div className="flex justify-between items-center gap-4">
          <div className="w-1/2">
            <h3
            className="lg:text-5xl text-2xl font-semibold capitalize bg-gradient-to-r from-primary-title to-primary-icon inline-block text-transparent bg-clip-text">
              {project?.name}
            </h3>
          </div>
          <div className="w-1/2">
            <Image
              src={project?.img}
              height={500}
              width={350}
              alt="project-1"
              className="w-full h-full object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
            />
          </div>
        </div>
      </div>
     </Link>
  );
};

export default ProjectCard;
