import { Code, FolderGit, Home, Mail, User } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About Me", href: "#about" },
  { icon: Code, label: "My Skills", href: "#skills" },
  { icon: FolderGit, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let retryCount = 0;
    const maxRetries = 10;

    const initObserver = () => {
      const sections = navItems
        .map((item) => ({
          id: item.href.substring(1),
          label: item.label,
          element: document.getElementById(item.href.substring(1)),
        }))
        .filter((section) => section.element);

      if (sections.length < navItems.length && retryCount < maxRetries) {
        retryCount++;
        setTimeout(initObserver, 200);
        return;
      }

      if (sections.length === 0) {
        return;
      }

      const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0.1,
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find((s) => s.element === entry.target);
            if (section) {
              setActiveItem(section.label);
            }
          }
        });
      };

      observer = new IntersectionObserver(observerCallback, observerOptions);

      sections.forEach((section) => {
        if (section.element && observer) {
          observer.observe(section.element);
        }
      });
    };

    const timeout = setTimeout(initObserver, 300);

    return () => {
      clearTimeout(timeout);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const handleNavClick = (label: string, href: string) => {
    setActiveItem(label);
    
    // Smooth scroll to section
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-1 left-0 w-full flex justify-center z-50">
      <nav className="flex items-center gap-2 rounded-full bg-zinc-900/90 backdrop-blur-md border border-gray-700/50 px-4 py-3 shadow-2xl">
        {navItems.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(label, href);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              activeItem === label
                ? "bg-teal-600 text-white shadow-lg shadow-teal-600/30"
                : "text-gray-400 hover:text-white hover:bg-gray-800/60"
            }`}
          >
            <Icon size={18} />
            <span className="hidden sm:inline text-sm">{label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}