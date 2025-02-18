import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Briefcase, GraduationCap, Code, FolderGit2, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  const projects = [
    {
      title: "Logistics Data Analysis",
      description: "This project aims to analyze home delivery data, evaluating delivery times, efficiency and costs.",
      github: "https://github.com/paudefclasspy/analisis-de-datos-logisticos",
      tech: ["Python"]
    },
    {
      title: "ToDo App",
      description: "A simple and efficient task management application designed to help users organize and manage their daily tasks.",
      github: "https://github.com/paudefclasspy/Quehaceres-app",
      demo: "#",
      tech: ["React", "Node.js", "Typescript"]
    },
    {
      title: "Python Code Interpreter",
      description: "A lightweight and interactive Python code interpreter that evaluates expressions and executes statements in a controlled environment.",
      github: "https://github.com/paudefclasspy/python-code-interpreter",
      tech: ["Python"]
    },
    {
      title: "A* Algorithm Path-Finder",
      description: "Pathfinding created with the A* algorithm You can place obstacles, the algorithm will sweep the entire map and find the best path to the specified destination.",
      github: "https://github.com/paudefclasspy/A-Star-Path-Finding",
      tech: ["Python"]
    },
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center opacity-10" />
      
      <div className="max-w-5xl mx-auto relative">
        {/* Header Section */}
        <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-8 mb-8 shadow-xl border border-white/40">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4E03AQEdf4ScpsRJUQ/profile-displayphoto-shrink_400_400/B4EZUBQ9qxHcAg-/0/1739482979528?e=1744848000&v=beta&t=dNGDAFw6onLz7DqOQEzwYl2SU-srLIeBmmqNKVW4yYY" 
              alt="Pau Arane Gabellido" 
              className="w-48 h-48 rounded-full object-cover border-4 border-white/80 shadow-lg"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Pau Aranega Bellido</h1>
              <p className="text-xl text-gray-600 mb-4">Software Engineer</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://github.com/paudefclasspy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/pauaranegabellido/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:pauaranega20@gmail.com" className="text-gray-600 hover:text-gray-800 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-8 mb-8 shadow-xl border border-white/40">
          <div className="flex items-center gap-2 mb-6">
            <FolderGit2 className="w-6 h-6 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0 p-8 border-l-2 border-gray-300/50"
                  >
                    <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/40">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 rounded-full bg-white/40 text-sm text-gray-700 border border-white/40 shadow-sm hover:bg-white/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 text-gray-700 hover:bg-white/70 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <Github className="w-4 h-4" /> View Code
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
              <button 
                onClick={prevProject}
                className="p-3 rounded-full bg-white/70 text-gray-700 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 backdrop-blur-sm"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
              <button 
                onClick={nextProject}
                className="p-3 rounded-full bg-white/70 text-gray-700 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 backdrop-blur-sm"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentProjectIndex 
                      ? 'bg-gray-700 w-6'
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-8 mb-8 shadow-xl border border-white/40">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-6 h-6 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-2 border-gray-300 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">Software Engineer</h3>
              <p className="text-gray-700">Telefónica · Full-time</p>
              <p className="text-gray-600">Jan 2024 - Jan 2025</p>
              <p className="text-gray-600 mt-2">Developed and maintained telecommunications software solutions, working on network optimization and customer-facing applications.</p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">Software Engineer, Intern</h3>
              <p className="text-gray-700">Moodle · Part-time</p>
              <p className="text-gray-600">Jul 2023 - Sep 2023</p>
              <p className="text-gray-600 mt-2">Contributed to the development of Moodle's learning management system, implementing new features and fixing bugs.</p>
            </div>
          </div>
        </div>

        {/* Volunteering Section */}
        <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-8 mb-8 shadow-xl border border-white/40">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-6 h-6 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-800">Volunteering</h2>
          </div>
          
          <div className="border-l-2 border-gray-300 pl-4">
            <h3 className="text-xl font-semibold text-gray-800">Educational Bootcamp Teacher</h3>
            <p className="text-gray-700">Saint Louis University - Madrid</p>
            <p className="text-gray-600">Jul 2023 - Aug 2023</p>
            <p className="text-gray-600 mt-2">Taught programming and computer science fundamentals to underprivileged students, helping them develop essential skills for future careers in technology.</p>
          </div>
        </div>

        {/* Education Section */}
        <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-8 mb-8 shadow-xl border border-white/40">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-800">Education</h2>
          </div>
          
          <div className="border-l-2 border-gray-300 pl-4">
            <h3 className="text-xl font-semibold text-gray-800">Saint Louis Univeristy - Madrid</h3>
            <p className="text-gray-700">Bachelor's degree, Computer Science</p>
            <p className="text-gray-700">Cum Laude</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-8 shadow-xl border border-white/40">
          <div className="flex items-center gap-2 mb-6">
            <Code className="w-6 h-6 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {[
              'React', 'Machine Learning', 'Data Analysis', 'Python', 'C++', 'TypeScript', 'JavaScript', 
              'Node.js', 'HTML', 'CSS', 'Git', 'REST APIs', 'Agile Methodologies', 'Java', 'Flask', 
              'Django', 'JUnit', 'WordPress', 'Material-UI', 'FastAPI', 'Docker', 'TravisCI', 
              'Google Cloud Platform', 'pandas', 'NumPy', 'Matplotlib', 'SQL'
            ].map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-full backdrop-blur-sm bg-white/40 text-gray-700 border border-white/40 hover:bg-white/60 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;