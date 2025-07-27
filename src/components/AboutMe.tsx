export default function AboutMe() {
  return (
    <section
      className=" max-w-3xl py-16 px-6 md:px-12 lg:px-0 space-y-8"
      id="about"
    >
      <div className="relative" aria-label="section header">
        <h2 className="text-2xl text-teal-400">
          <pre className="m-0 font-fira">{`<AboutMe/>`}</pre>
        </h2>
        <div className="absolute -left-4 top-0 w-1 h-8 bg-teal-400/30 rounded-full"></div>
      </div>

      <div
        className="text-zinc-300 text-base leading-relaxed space-y-4"
        aria-label="my info"
      >
        <p>
          I am Charukirti from Sangli. I have a diploma in computer engineering
          from Latthe Education Society's Polytechnic. I learned coding through
          online courses - took JavaScript courses from Jonas Schmedtmann on
          Udemy and Responsive Web Design from FreeCodeCamp. Then I taught
          myself React, Next.js, and other modern tools.
        </p>

        <p>
          I built three main projects. A job tracker using Next.js, TypeScript,
          NeonDB, and Prisma ORM with analytics charts. A blog platform called
          MyScriptly with React, TypeScript, Redux-Toolkit, TanStack Query, and
          Appwrite for authentication. And WonderAI, an AI trip planner using
          React, TypeScript, Supabase, and Gemini API.
        </p>

        <p>
          I know JavaScript, TypeScript, React, Next.js, HTML, CSS, Tailwind
          CSS, Redux-Toolkit, TanStack Query, React-hook-form, and Zod. I use
          Git and GitHub for version control and deploy on Vercel and Netlify.
          I've worked with databases like NeonDB and Supabase, and integrated
          APIs like Gemini AI and Appwrite.
        </p>

        <p>
          When I don't know something, I read the docs, and figure it out.
          That's how I learned everything from basic JavaScript to connecting
          databases and handling user authentication. I'm looking for my first
          developer job where I can use these skills and keep learning.
        </p>
      </div>
    </section>
  );
}
