import type { ReactNode } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiAppwrite,
  SiSupabase,
  SiZod,
  SiReacthookform,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiPrettier,
  SiNpm,
  SiEslint,
  SiPnpm,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  return (
    <section
      className="relative max-w-3xl py-16 px-6 md:px-12 lg:px-0 space-y-10"
      id="skills"
    >
      <div className="relative" aria-label="section header">
        <h2 className="text-2xl text-teal-400">
          <pre className="m-0 font-fira">{`<MySkills/>`}</pre>
        </h2>
        <div className="absolute -left-4 top-0 w-1 h-8 bg-teal-400/30 rounded-full" />
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-white/80 mb-4">Frontend</h3>
          <div className="flex gap-4 flex-wrap">
            <Skill
              icon={<SiHtml5 className="text-orange-500" size={24} />}
              label="HTML"
            />
            <Skill
              icon={<SiCss3 className="text-blue-500" size={24} />}
              label="CSS"
            />
            <Skill
              icon={<SiTailwindcss className="text-sky-400" size={24} />}
              label="Tailwind CSS"
            />
            <Skill
              icon={<SiJavascript className="text-yellow-400" size={24} />}
              label="JavaScript"
            />
            <Skill
              icon={<SiTypescript className="text-blue-500" size={24} />}
              label="TypeScript"
            />
            <Skill
              icon={<SiReact className="text-[#61DBFB]" size={24} />}
              label="React"
            />
            <Skill
              icon={
                <SiNextdotjs className="text-black dark:text-white" size={24} />
              }
              label="Next.js"
            />
            <Skill
              icon={<SiRedux className="text-purple-500" size={24} />}
              label="Redux Toolkit"
            />
          </div>
        </div>

        {/* Form validations */}

        <div>
          <h3 className="text-lg font-semibold text-white/80 mb-4">
            Form & Validation
          </h3>
          <div className="flex gap-4 flex-wrap">
            <Skill
              icon={<SiReacthookform className="text-rose-500" size={24} />}
              label="React Hook Form"
            />
            <Skill
              icon={<SiZod className="text-indigo-400" size={24} />}
              label="Zod"
            />
          </div>
        </div>

        {/* Version Control */}
        <div>
          <h3 className="text-lg font-semibold text-white/80 mb-4">
            Version Control
          </h3>
          <div className="flex gap-4 flex-wrap">
            <Skill
              icon={<SiGit className="text-red-500" size={24} />}
              label="Git"
            />
            <Skill
              icon={
                <SiGithub className="text-black dark:text-white" size={24} />
              }
              label="GitHub"
            />
          </div>
        </div>

        {/* BaSS */}

        <div>
          <h3 className="text-lg font-semibold text-white/80 mb-4">
            Backend as a Service
          </h3>
          <div className="flex gap-4 flex-wrap">
            <Skill
              icon={<SiAppwrite className="text-pink-500" size={24} />}
              label="Appwrite"
            />
            <Skill
              icon={<SiSupabase className="text-emerald-400" size={24} />}
              label="Supabase"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white/80 mb-4">
            Development tools and Package managers
          </h3>
          <div className="flex gap-4 flex-wrap">
            <Skill
              icon={<VscVscode className="text-blue-500" size={24} />}
              label="VS code"
            />
            <Skill
              icon={<SiPrettier className="text-amber-400" size={24} />}
              label="Pritter"
            />
            <Skill
              icon={<SiNpm className="text-red-600" size={24} />}
              label="npm"
            />
            <Skill
              icon={<SiEslint className="text-purple-600" size={24} />}
              label="Eslint"
            />
            <Skill
              icon={<SiPnpm className="text-orange-400" size={24} />}
              label="pnpm"
            />
            <Skill
              icon={<SiVite className="text-purple-500" size={24} />}
              label="Vite"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <article className="group relative bg-zinc-800/30 backdrop-blur-sm border border-zinc-700/50 rounded-lg px-4 py-3 hover:bg-zinc-800/60 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/20 hover:-translate-y-1 cursor-pointer">
      <div className="flex items-center gap-2">
        <div className="group-hover:scale-110 transition-transform duration-200">
          {icon}
        </div>
        <span className="text-white/90 group-hover:text-white transition-colors duration-200">
          {label}
        </span>
      </div>

      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </article>
  );
}
