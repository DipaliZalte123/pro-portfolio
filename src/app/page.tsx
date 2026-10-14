export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap'); *{font-family:Inter,sans-serif}`}</style>
      
      {/* NAV */}
      <nav className="flex justify-between p-6 max-w-6xl mx-auto">
        <b className="text-xl">Nikhil.</b>
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#work">Work</a><a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.9]">
          Full Stack<br/>
          <span className="text-zinc-500">Developer.</span><br/>
          Designer.
        </h1>
        <p className="mt-6 max-w-xl text-zinc-400 text-lg">
          I build modern, fast websites. Based in Pune. 
          Specializing in Next.js, React & UI Design. 
          Looking for internships / freelance work.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#work" className="bg-white text-black px-6 py-3 rounded-full font-semibold">View Work</a>
          <a href="mailto:nikhil@email.com" className="border border-zinc-700 px-6 py-3 rounded-full">Email Me</a>
        </div>

        {/* SKILLS */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Next.js","React","Tailwind","TypeScript","Node.js","Figma"].map(s=>(
            <div key={s} className="border border-zinc-800 p-4 rounded-xl text-zinc-300">{s}</div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-900">
        <h2 className="text-3xl font-bold mb-10">Selected Work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 p-8 rounded-2xl h-64">
            <h3 className="text-xl font-semibold">E-Commerce Website</h3>
            <p className="text-zinc-500 mt-2">Next.js + Stripe + Modern UI</p>
            <p className="mt-10 text-sm text-zinc-400">Coming soon - Replace with your project</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-2xl h-64">
            <h3 className="text-xl font-semibold">Portfolio Template</h3>
            <p className="text-zinc-500 mt-2">This website you are seeing</p>
            <p className="mt-10 text-sm text-zinc-400">Built with Next.js 15</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">Let's build something.</h2>
        <p className="text-zinc-500 mt-4">nikhil@email.com | Pune, India</p>
        <a href="mailto:nikhil@email.com" className="inline-block mt-8 bg-white text-black px-10 py-4 rounded-full font-bold text-lg">Contact Me</a>
        <p className="mt-20 text-xs text-zinc-600">© 2026 Nikhil. Built with Next.js</p>
      </section>
    </main>
  );
}