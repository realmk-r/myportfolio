import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-black text-gray-200 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">ADWAID P B</h1>
          <div className="space-x-6 text-sm hidden md:block">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      {/* Hero */}
      <section className="pt-32 pb-24 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Software & Web Developer</h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-8">
          B.Tech Computer Science graduate with hands-on experience in AI-powered backend systems,
          modern web technologies, and real-world industry projects.
        </p>
        <div className="flex justify-center gap-4">
          {/* Resume Button */}
          <a 
            href="/resume.pdf" 
            download="Adwaid_PB_Resume.pdf" 
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition flex items-center gap-2"
          >
            {/* Download Icon (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Resume
          </a>

          <a href="#contact" className="px-6 py-3 rounded-xl border border-gray-700 hover:bg-gray-900 transition">
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-semibold mb-6 text-white">About Me</h3>
        <p className="text-gray-400 leading-relaxed">
          I am a 2025 B.Tech Computer Science graduate from St. Thomas Engineering College,
          Chengannur. I have a strong foundation in Python, core computer science concepts,
          and hands-on experience with web technologies like HTML, CSS, JavaScript, and React.
          
          <br /><br />
          I completed an Advanced Python course at Global Quest Technologies, Bangalore,
          and currently focus on optimizing backend logic and AI-driven systems.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-950 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-10 text-white">Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCard title="Programming Languages" items={["C", "Python", "JavaScript"]} />
            <SkillCard title="Web Technologies" items={["HTML", "CSS", "React", "Figma"]} />
            <SkillCard title="Databases" items={["MySQL", "ChromaDB"]} />
            <SkillCard title="Tools" items={["VS Code", "Git", "Blender", "Excel"]} />
          </div>
        </div>
      </section>

      {/* Experience (NEW SECTION) */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-semibold mb-10 text-white">Experience</h3>
        
        {/* Timeline Item */}
        <div className="relative border-l-2 border-gray-800 pl-8 ml-4">
          <div className="mb-10">
            {/* Dot */}
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-white border-4 border-black"></span>
            
            <h4 className="text-xl font-bold text-white">Software Developer</h4>
            <span className="text-sm text-gray-500 font-medium">Cezen Technology (ADE-DRDO)</span>
            <span className="text-sm text-gray-500 ml-4">Oct 2025 – Present</span>
            
            <p className="mt-4 text-gray-400 leading-relaxed">
              Working as a contract employee focusing on backend development and system optimization. 
              Contributing to AI-driven projects and enhancing software performance in a research and development environment.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-950 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-10 text-white">Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard
              title="LABNETAI"
              desc="AI-powered document analysis system using RAG to extract insights from unstructured data."
              tech="Java, Spring MVC, Spring AI, ChromaDB"
            />
            <ProjectCard
              title="3D Animation"
              desc="Real-time animation generation from video or image input using pose estimation."
              tech="Python, Computer Vision"
            />
            <ProjectCard
              title="Hand Gesture Control"
              desc="Gesture-based system to control volume, brightness, and window management."
              tech="Python, OpenCV"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6 text-white">Contact</h3>
          <p className="text-gray-400 mb-8">Let’s connect for opportunities and collaborations.</p>
          <div className="space-y-3 text-gray-300">
            <p>Email: <a href="mailto:adwaidpb@gmail.com" className="text-white hover:underline">adwaidpb@gmail.com</a></p>
            <p>Phone: <span className="text-white">+91-9048704046</span></p>
            <p>Location: Mampuzhakary, Kerala</p>
            <div className="pt-4 space-x-4">
              <a href="https://github.com/realmk-r" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">GitHub</a>
              <span className="text-gray-700">|</span>
              <a href="https://www.linkedin.com/in/adwaid-p-b-8b8165332" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-600 text-sm border-t border-gray-900">
        © {new Date().getFullYear()} ADWAID P B. All rights reserved.
      </footer>
    </div>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-gray-600 transition duration-300">
      <h4 className="text-xl font-medium mb-4 text-gray-100">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="px-3 py-1 bg-black rounded-lg text-sm text-gray-300 border border-gray-800">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, desc, tech }) {
  return (
    <div className="p-6 rounded-2xl border border-gray-800 bg-black hover:border-gray-600 transition duration-300">
      <h4 className="text-xl font-semibold mb-2 text-white">{title}</h4>
      <p className="text-gray-400 text-sm mb-4">{desc}</p>
      <p className="text-xs text-gray-500 uppercase tracking-wider">{tech}</p>
    </div>
  );
}