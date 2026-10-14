export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <img src="/logo.png" alt="logo" className="w-12 h-12 rounded-full border border-zinc-700 object-cover" />
          <span className="text-xs border border-zinc-700 rounded-full px-3 py-1 text-zinc-400">Dipali Zalte • Pune</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.9]">
          Python Full<br/>
          <span className="text-zinc-500">Stack Data Science.</span>
        </h1>
        <p className="text-zinc-400 mt-6">Next.js, Python, Database. Building modern full stack projects.</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-zinc-800 rounded-2xl p-6"><h3 className="font-semibold">BSc Computer Science</h3><p className="text-sm text-zinc-400">SPPU, Pune</p><p className="text-xl font-bold mt-2">7.81 CGPA</p></div>
          <div className="border border-zinc-800 rounded-2xl p-6"><h3 className="font-semibold">HSC (12th)</h3><p className="text-sm text-zinc-400">Maharashtra Board</p><p className="text-xl font-bold mt-2">47%</p></div>
          <div className="border border-zinc-800 rounded-2xl p-6"><h3 className="font-semibold">SSC (10th)</h3><p className="text-sm text-zinc-400">Maharashtra Board</p><p className="text-xl font-bold mt-2">88%</p></div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">
        <h2 className="text-3xl font-bold">Let's Work Together</h2>
        <p className="text-zinc-400 mt-2">Available for internships and freelance work</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="mailto:zaltedipali3@gmail.com" className="bg-white text-black px-6 py-3 rounded-full font-medium">Email Me</a>
          <a href="https://www.linkedin.com/in/dipali-zalte-162a96428" target="_blank" className="border border-zinc-700 px-6 py-3 rounded-full hover:bg-zinc-900">LinkedIn</a>
          <a href="https://github.com/DipaliZalte123" target="_blank" className="border border-zinc-700 px-6 py-3 rounded-full hover:bg-zinc-900">GitHub</a>
        </div>
      </section>
    </main>
  );
}