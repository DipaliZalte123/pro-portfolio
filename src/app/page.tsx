export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.9]">
          Python Full <br />
          <span className="text-zinc-500">Data Science.</span>
        </h1>
        <p className="text-zinc-400 mt-6 max-w-xl text-lg">
          Next.js, Python, Database. Building modern full stack projects.
        </p>
      </section>

      {/* CONTACT - NEW */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-800">
        <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>
        <p className="text-zinc-400 mt-2">Available for Python Full Stack & Data Science projects</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="mailto:zaltedipali3@gmail.com" className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-zinc-200">
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/dipali-zalte-162a96428" target="_blank" className="border border-zinc-700 px-6 py-3 rounded-full hover:bg-zinc-900">
            LinkedIn
          </a>
          <a href="https://github.com/DipaliZalte123" target="_blank" className="border border-zinc-700 px-6 py-3 rounded-full hover:bg-zinc-900">
            GitHub
          </a>
        </div>
        <p className="text-zinc-600 mt-8 text-sm">zaltedipali3@gmail.com | Pune, Maharashtra</p>
      </section>
    </main>
  );
}