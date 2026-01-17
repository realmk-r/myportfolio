import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-black text-gray-200 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">ADWAID P B</h1>
          <div className="space-x-6 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Software & Web Developer</h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-8">
          B.Tech Computer Science graduate with hands-on experience in AI-powered backend systems,
          modern web technologies, and real-world industry projects.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="px-6 py-3 rounded-xl bg-white text-black font-medium">View Projects</a>
          <a href="#contact" className="px-6 py-3 rounded-xl border border-gray-700 hover:bg-gray-900">Contact Me</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p className="text-gray-400 leading-relaxed">
          I am a 2025 B.Tech Computer Science graduate from St. Thomas Engineering College,
          Chengannur. I have a strong foundation in Python, core computer science concepts,
          and hands-on experience with web technologies like HTML, CSS, JavaScript, and React.
          
          <br /><br />
          I completed an Advanced Python course at Global Quest Technologies, Bangalore,
          and currently work as a Software Developer (Contract Employee) at Cezen Technology
          (ADE-DRDO), where I focus on optimizing backend logic and AI-driven systems.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-950 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-10">Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCard title="Programming Languages" items={["C", "Python", "JavaScript"]} />
            <SkillCard title="Web Technologies" items={["HTML", "CSS", "React", "Figma"]} />
            <SkillCard title="Databases" items={["MySQL", "ChromaDB"]} />
            <SkillCard title="Tools" items={["VS Code", "Git", "Blender", "Excel"]} />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-semibold mb-10">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectCard
            title="LABNETAI"
            desc="AI-powered document analysis system using RAG to extract insights from unstructured data."
            tech="Java, Spring MVC, Spring AI, ChromaDB"
          />
          <ProjectCard
            title="3D Animation Using Pose Estimation"
            desc="Real-time animation generation from video or image input using pose estimation."
            tech="Python, Computer Vision"
          />
          <ProjectCard
            title="Hand Gesture Screen Control"
            desc="Gesture-based system to control volume, brightness, and window management."
            tech="Python, OpenCV"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-950 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">Contact</h3>
          <p className="text-gray-400 mb-8">Let’s connect for opportunities and collaborations.</p>
          <div className="space-y-3 text-gray-300">
            <p>Email: <span className="text-white">adwaidpb@gmail.com</span></p>
            <p>Phone: <span className="text-white">+91-9048704046</span></p>
            <p>Location: Mampuzhakary, Kerala</p>
            <p>
              <a href="https://github.com/realmk-r" className="hover:text-white">GitHub</a> |{" "}
              <a href="https://www.linkedin.com/in/adwaid-p-b-8b8165332" className="hover:text-white">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} ADWAID P B. All rights reserved.
      </footer>
    </div>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
      <h4 className="text-xl font-medium mb-4">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="px-3 py-1 bg-gray-900 rounded-lg text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, desc, tech }) {
  return (
    <div className="p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm mb-4">{desc}</p>
      <p className="text-xs text-gray-500">{tech}</p>
    </div>
  );
}
