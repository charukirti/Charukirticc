import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export default function ContactMe() {
  return (
    <section id="contact" className="max-w-3xl py-16 px-6 md:px-12 lg:px-0 space-y-6">
      <div className="relative" aria-label="section header">
        <h2 className="text-2xl text-teal-400">
          <pre className="m-0 font-fira">{`<ContactMe/>`}</pre>
        </h2>
        <div className="absolute -left-4 top-0 w-1 h-8 bg-teal-400/30 rounded-full" />
      </div>

      <div className="space-y-5">
        <div>
          <p className="text-base leading-relaxed">
            I'm actively seeking opportunities as a Frontend Developer where I can contribute 
            to meaningful projects and continue growing my technical skills. I'm particularly 
            interested in roles involving React, TypeScript, and modern web technologies.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white mb-2">Get In Touch</h3>
          <p>
            For professional inquiries and collaboration opportunities, reach out to me at:{" "}
            <a
              href="mailto:charukirti.chougule@gmail.com"
              className="text-zinc-200 hover:text-teal-400 transition-colors text-sm font-medium underline decoration-zinc-600 hover:decoration-teal-400 underline-offset-4"
            >
              charukirti.chougule@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white mb-2">Connect With Me</h3>
          <p className="mb-4">
            Feel free to connect with me on social platforms for professional networking 
            and tech discussions.
          </p>
          
          <ul className="flex items-center gap-5">
            <li>
              <a
                href="https://www.github.com/charukirti"
                target="_blank"
                className="hover:scale-110 transition-transform duration-200"
                rel="noopener noreferrer"
                title="GitHub - View my code repositories"
              >
                <SiGithub
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  size={24}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/charukirti-chougule/"
                target="_blank"
                className="hover:scale-110 transition-transform duration-200"
                rel="noopener noreferrer"
                title="LinkedIn - Professional profile"
              >
                <SiLinkedin
                  className="text-blue-600 hover:text-blue-500 transition-colors"
                  size={24}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.x.com/charukirtitwts"
                target="_blank"
                className="hover:scale-110 transition-transform duration-200"
                rel="noopener noreferrer"
                title="Twitter - Tech updates and thoughts"
              >
                <SiX
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  size={24}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/charukirti.cc"
                target="_blank"
                className="hover:scale-110 transition-transform duration-200"
                rel="noopener noreferrer"
                title="Instagram - Personal updates"
              >
                <SiInstagram
                  className="text-red-500 hover:text-red-400 transition-colors"
                  size={24}
                />
              </a>
            </li>
          </ul>
        </div>

        
      </div>
    </section>
  );
}