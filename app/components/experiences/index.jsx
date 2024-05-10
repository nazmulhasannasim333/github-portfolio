import React from "react";
import SectionTitle from "../helper/section-title";
import GlowCard from "../helper/glow-card";

const Experiences = () => {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] experience"
    >
      <SectionTitle title="Education & Experience" />
      <div className="lg:grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-3xl text-center py-5 font-semibold uppercase bg-gradient-to-r from-primary-icon to-primary-title inline-block text-transparent bg-clip-text">
            Education
          </h3>
          <div className="content">
            <div className="box">
              <h4>2018 - 2022</h4>
              <h3>High School Degree</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="box">
              <h4>2018 - 2022</h4>
              <h3>Bachelor's Degree</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="box">
              <h4>2018 - 2022</h4>
              <h3>Bachelor's Degree</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl text-center py-5 font-semibold uppercase bg-gradient-to-r from-primary-icon to-primary-title inline-block text-transparent bg-clip-text">
            Experience
          </h3>
          <div className="content">
            <div className="box">
              <h4>2018 - 2022</h4>
              <h3>High School Degree</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="box">
              <h4>2018 - 2022</h4>
              <h3>Bachelor's Degree</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="box">
              <h4>2018 - 2022</h4>
              <h3>Bachelor's Degree</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
