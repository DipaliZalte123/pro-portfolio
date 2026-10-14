export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');`}</style>

      {/* NAV */}
      <nav className="flex justify-between p-6 max-w-6xl mx-auto">
        <b className="text-xl">Dipali Zalte.</b>
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO - Python Full Stack & Data Science */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.9]">
          Python Full Stack<br />
          <span className="text-zinc-500">Data Science.</span>
        </h1>
        <p className="text-zinc-400 mt-6 max-w-xl">
          I build full-stack apps and data-driven solutions.
        </p>
      </section>

      {/* WORK */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">
        <h2 className="text-2xl font-bold mb-8">Work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="font-semibold">Data Science Project</h3>
            <p className="text-sm text-zinc-400 mt-2">Python, ML, Analysis</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="font-semibold">Full Stack App</h3>
            <p className="text-sm text-zinc-400 mt-2">Next.js, Python, Database</p>
          </div>
        </div>
      </section>

      {/* CONTACT - NEW */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">
        <h2 className="text-3xl font-bold">Let's Work Together</h2>
        <p className="text-zinc-400 mt-2">Available for Python Full Stack & Data Science projects</p>
        
          
     <div className="mt-6 flex flex-wrap gap-4">
    <a href="mailto:zaltedipali3@gmail.com" className="bg-white text-black px-6 py-3 rounded-full">Email Me</a>
    <a href="https://www.linkedin.com/in/dipali-zalte-162a96428" target="_blank" className="border border-zinc-700 px-6 py-3 rounded-full">LinkedIn</a>
    <a href="https://github.com/DipaliZalte123" target="_blank" className="border border-zinc-700 px-6 py-3 rounded-full">GitHub</a>
  </div>

    