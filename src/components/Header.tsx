export default function Header() {
  return (
    <header className="lg:flex lg:max-h-screen lg:items-center gap-10 lg:py-24 lg:px-8" id="home">
      <section className="space-y-6 max-w-lg" aria-label="Intro and contact">
        <div className="space-y-3">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl leading-tight">
            Charukirti Chougule
          </h1>
          <h2 className="text-lg font-medium tracking-tight text-teal-400 sm:text-xl">
            Frontend Developer
          </h2>
        </div>

        <p className="text-zinc-400 leading-relaxed text-base max-w-md">
          I build accessible, responsive experiences for the web with modern
          technologies and clean, efficient code.
        </p>

        <address className="not-italic">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <p className="text-sm text-zinc-400">Get in touch 👋</p>
            <a
              href="mailto:charukirti.chougule@gmail.com"
              className="text-zinc-200 hover:text-teal-400 transition-colors text-sm font-medium underline decoration-zinc-600 hover:decoration-teal-400 underline-offset-4"
            >
              charukirti.chougule@gmail.com
            </a>
          </div>
        </address>

        <div className="flex gap-4 pt-2">
          <button
            type="button"
            className="bg-teal-600 hover:bg-teal-500 text-white px-2 md:px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
          >
            View Projects
          </button>
          <button
            type="button"
            className="border border-zinc-600 hover:border-teal-400 text-zinc-400 hover:text-teal-400 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
          >
            Download Resume
          </button>
        </div>
      </section>

      <aside
        className="mt-8 lg:mt-0 flex justify-center lg:justify-end"
        aria-label="Profile picture"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-teal-400/10 rounded-full blur-xl scale-110" />
          <img
            src="/pfp.png"
            alt="Charukirti Chougule"
            className="relative w-70 h-70 rounded-full object-cover border-2 border-zinc-600/50 shadow-2xl"
          />
        </div>
      </aside>
    </header>
  );
}
