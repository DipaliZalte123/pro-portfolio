export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap'); *{font-family:Inter,sans-serif}`}</style>
      
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
          Python Full Stack<br/>
          <span className="text-zinc-500">Data Science.</span>
        </h1>
        
        <p className="mt-6 max-w-xl text-zinc-400 text-lg leading-relaxed">
          Python Full Stack & Data Science learner in Pune.<br/>
          Building projects with Python, Pandas, ML & Data Analysis.<br/>
          Looking for internships / freelance work.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#work" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-zinc-200">
            View Work
          </a>
          <a href="#contact" className="border border-zinc-700 px-6 py-3 rounded-full font-semibold hover:bg-zinc-900">
            Contact Me
          </a>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Selected Work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="font-semibold">Python Data Analysis Project</h3>
            <p className="text-sm text-zinc-400 mt-2">Pandas, Matplotlib, Data Cleaning</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="font-semibold">Full Stack App</h3>
            <p className="text-sm text-zinc-400 mt-2">Python, FastAPI, Next.js</p>
          </div>
        </div>
      </section>
    </main>
  );
}