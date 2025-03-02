import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header Section */}
      <header className="text-center text-4xl font-bold mt-6">Your Name</header>
      <p className="text-center text-lg text-gray-400">Web Developer | MERN Stack Enthusiast</p>
      
      {/* About Section */}
      <section className="mt-10 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-300 mt-2">
          Hi! I'm a passionate web developer with experience in building scalable and efficient applications using the MERN stack. I enjoy crafting user-friendly, responsive, and interactive web experiences.
        </p>
      </section>
      
      {/* Skills Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Git/GitHub'].map(skill => (
            <span key={skill} className="bg-gray-700 px-4 py-2 rounded-lg text-sm">{skill}</span>
          ))}
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Project 1</h3>
            <p className="text-gray-400">A brief description of your project.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Project 2</h3>
            <p className="text-gray-400">A brief description of your project.</p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Contact Me</h2>
        <div className="flex justify-center gap-6 mt-4 text-2xl">
          <a href="https://github.com/yourgithub" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourlinkedin" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:youremail@gmail.com" className="text-gray-400 hover:text-white"><FaEnvelope /></a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
