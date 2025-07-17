import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { Certifications, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Talel
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Data Science student and AI enthusiast based in Tunisia, driven by real-world challenges and a passion for learning.
           I build intelligent systems that blend machine learning, data analysis, and smart hardware to make a tangible impact.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

 <div className='py-16'>
  <h3 className='subhead-text'>Certifications and Achievements.</h3>

  <div className='mt-5 flex flex-col gap-3 text-slate-500'>
    <p>
      I've earned certifications by tackling real-world projects, mastering industry tools,
      and pushing myself beyond tutorials. Here's a snapshot of what I've achieved so far:
    </p>
  </div>

  <div className='mt-12 flex'>
    <VerticalTimeline>
      {Certifications.map((certification, index) => (
        <VerticalTimelineElement
          key={certification.title}
          date={certification.date}
          icon={
            <div className='flex justify-center items-center w-full h-full text-xl'>
              {certification.badge}
            </div>
          }
          contentStyle={{
            borderBottom: "8px solid #ccc",
            boxShadow: "none",
          }}
        >
          <div>
            <h3 className='text-black text-xl font-poppins font-semibold'>
              {certification.title}
            </h3>
            <p className='text-slate-700 font-normal text-sm mt-2'>
              {certification.description}
            </p>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
</div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
