export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-8">
          <img src="/logo.png" alt="Logo" className="w-14 h-14 rounded-full border border-zinc-700" />
          <span className="text-sm border border-zinc-700 rounded-full px-3 py-1 text-zinc-400">Dipali Zalte • Pune</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.9]">
          Python Full<br/><span className="text-zinc-500">Stack Data Science.</span>
        </h1>
        <p className="text-zinc-400 mt-6 max-w-xl">Next.js, Python, Database. Building modern full stack projects.</p>
      </section>
      <section id="education" className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-zinc-800 rounded-2xl p-6"><h3>BSc Computer Science</h3><p className="text-zinc-400">SPPU, Pune</p><p className="text-2xl font-bold mt-3">7.81 CGPA</p></div>
          <div className="border border-zinc-800 rounded-2xl p-6"><h3>HSC (12th)</h3><p className="text-zinc-400">Maharashtra Board</p><p className="text-2xl font-bold mt-3">47%</p></div>
          <div className="border border-zinc-800 rounded-2xl p-6"><h3>SSC (10th)</h3><p className="text-zinc-400">Maharashtra Board</p><p className="text-2xl font-bold mt-3">88%</p></div>
        </div>
      </section>
    </main>
  );
}