import { ExternalLink } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReacthookform,
  SiZod,
  SiReact,
  SiAppwrite,
  SiRedux,
  SiShadcnui,
  SiSupabase,
  SiGooglegemini,
  SiReactquery,
  SiGithub,
} from "react-icons/si";
import { projects } from "../data/projects";

export default function Projects() {
  const iconMap = {
    SiNextdotjs: { icon: SiNextdotjs, color: "text-white" },
    SiTypescript: { icon: SiTypescript, color: "text-blue-500" },
    SiTailwindcss: { icon: SiTailwindcss, color: "text-cyan-400" },
    SiReacthookform: { icon: SiReacthookform, color: "text-pink-500" },
    SiZod: { icon: SiZod, color: "text-blue-600" },
    SiReact: { icon: SiReact, color: "text-blue-400" },
    SiAppwrite: { icon: SiAppwrite, color: "text-pink-500" },
    SiRedux: { icon: SiRedux, color: "text-purple-500" },
    SiShadcnui: { icon: SiShadcnui, color: "text-white" },
    SiSupabase: { icon: SiSupabase, color: "text-green-500" },
    SiGooglegemini: { icon: SiGooglegemini, color: "text-blue-500" },
    "Tanstack Query": { icon: SiReactquery, color: "text-red-500" },
  };

  const isValidTech = (tech: string): tech is keyof typeof iconMap => {
    return tech in iconMap;
  };
  return (
    <section
      id="projects"
      className="max-w-3xl py-16 px-4 md:px-12 lg:px-0 space-y-10"
    >
      <div className="relative" aria-label="section header">
        <h2 className="text-2xl text-teal-400">
          <pre className="m-0 font-fira">{`<MyProjects/>`}</pre>
        </h2>
        <div className="absolute -left-4 top-0 w-1 h-8 bg-teal-400/30 rounded-full" />
      </div>

      <article className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {projects.map((project) => (
          <article
            className="group relative bg-zinc-800/30 backdrop-blur-sm border border-zinc-700/50 rounded-lg  hover:bg-zinc-800/60 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/20 hover:-translate-y-1 cursor-pointer"
            key={project.id}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-48  rounded-t-lg"
            />

            <div className="p-6" aria-label="content">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.techStack.map((tech, index) => {
                  if (!isValidTech(tech)) return null;

                  const iconData = iconMap[tech];
                  const IconComponent = iconData.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group relative"
                      title={tech.replace("Si", "").replace("dotjs", ".js")}
                    >
                      <IconComponent className={`w-5 h-5 ${iconData.color}`} />
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex-1 justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="flex items-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-4 py-2 rounded text-sm font-medium transition-colors flex-1 justify-center"
                >
                  <SiGithub className="text-black dark:text-white" size={24} />
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </article>
    </section>
  );
}
