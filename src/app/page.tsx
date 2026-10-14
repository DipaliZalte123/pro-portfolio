export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold">Python Full<br/><span className="text-zinc-500">Data Science.</span></h1>
        <p className="text-zinc-400 mt-6 max-w-xl text-lg">Next.js, Python, Database. Building modern full stack projects.</p>
      </section>

      <section id="education" className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold">BSc Computer Science</h3>
            <p className="text-zinc-400 text-sm mt-1">SPPU, Pune</p>
            <p className="text-white font-bold mt-3 text-2xl">7.81 CGPA</p>
          </div>
          <div className="border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold">HSC (12th)</h3>
            <p className="text-zinc-400 text-sm mt-1">Maharashtra Board</p>
            <p className="text-white font-bold mt-3 text-2xl">47%</p>
          </div>
          <div className="border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold">SSC (10th)</h3>
            <p className="text-zinc-400 text-sm mt-1">Maharashtra Board</p>
            <p className="text-white font-bold mt-3 text-2xl">88%</p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">
        <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="mailto:zaltedipali3@gmail.com" className="bg-white text-black px-6 py-3 rounded-full font-medium">Email Me</a>
          <a href="https://www.linkedin.com/in/dipali-zalte-162a96428" target="_blank" className="border border-zinc-700 px-6 py-3 rounded-full hover:bg-zinc-900">LinkedIn</a>
          <a href="https://github.com/DipaliZalte123" target="_blank" className="border border-zinc-700 px-6 py-3 rounded-full hover:bg-zinc-900">GitHub</a>
        </div>
      </section>
    </main>
  );
}