import React from "react";
import SectionTitle from "../helper/section-title";

const Experiences = () => {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <SectionTitle title="Education & Experience" />
      <div className="lg:grid grid-cols-2">
        <div>
          <h3 className="text-3xl text-center py-5 font-semibold uppercase bg-gradient-to-r from-primary-icon to-primary-title inline-block text-transparent bg-clip-text">Education</h3>
          
        </div>
        <div>
          <h3>Experience</h3>
        </div> 
      </div>
    </div>
  );
};

export default Experiences;
