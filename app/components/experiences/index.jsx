import React from "react";
import SectionTitle from "../helper/section-title";
import Link from "next/link";

const Experiences = () => {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] experience"
    >
      <SectionTitle title="Experience" />
      <div className="lg:grid grid-cols-2 gap-20 my-12">
        <div>
          <h3 className="text-3xl text-center py-4 font-semibold uppercase bg-gradient-to-r from-primary-icon to-primary-title inline-block text-transparent bg-clip-text">
            Education
          </h3>
          <div className="content">
            <div className="box">
              <h2>Bachelor Degree</h2>
              <h4>2021 - Present</h4>
              <h3>Shahid Bulbul Government College, Pabna</h3>
              <p>
              At Shahid Bulbul Government College, Pabna, I am pursuing a Bachelors degree in Political Science, immersing myself in a comprehensive academic program that nurtures critical thinking and civic engagement. This institution equips me with the knowledge and skills to contribute meaningfully to society.
              </p>
            </div>
            <div className="box">
              <h2>Inter Mediate Degree</h2>
              <h4>2019 - 2021</h4>
              <h3>Hazi Jasim Uddin Degree(Hons) College, Pabna</h3>
              <p>
              At Hazi Jasim Uddin Degree College, Pabna, I thrived in an enriching academic atmosphere, supported by dedicated faculty and diverse opportunities.
              </p>
            </div>
            <div className="box">
              <h2>High School Degree</h2>
              <h4>2016 - 2019</h4>
              <h3>Dublia High School, Pabna</h3>
              <p>
              Dublia High School provided a dynamic learning environment where I cultivated my academic skills and personal growth. Its rigorous curriculum and supportive community.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl text-center py-4 font-semibold uppercase bg-gradient-to-r from-primary-icon to-primary-title inline-block text-transparent bg-clip-text">
          Experience
          </h3>
          <div className="content">
            <div className="box">
              <h2><Link href="https://ultradevs.com/" target="_blank" >ultraDevs</Link> - Pabna, Bangladesh</h2>
              <h4>2023 - June 2024</h4>
              <h3>Full Stack Developer(Full-time)</h3>
              <p>
              As a full stack developer at ultraDevs since 2023, I have contributed to diverse projects, leveraging my skills in both frontend and backend development. Collaborating with talented teams, I have tackled challenges, implemented innovative solutions, and continuously honed my expertise to deliver high-quality, scalable software solutions.
              </p>
            </div>
            <div className="box">
              <h2>Programming Hero</h2>
              <h4>2022 - 2023</h4>
              <h3>Next Level Web Development</h3>
              <p>
              I completed the Next Level Web Development Course from Programming Hero, guided by interactive lessons and real world projects, solidifying my expertise in web development.
              </p>
            </div>
            <div className="box">
              <h2>Self Learning</h2>
              <h4>2020 - Present</h4>
              <h3>Youtube and W3Schools</h3>
              <p>
              I acquired programming proficiency through self-study, leveraging instructional resources from YouTube and W3Schools to expand my skill set and pursue my passion for coding
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
