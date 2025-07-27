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
    const handleScroll = () => {
      const sections = navItems
        .map((item) => ({
          label: item.label,
          element: document.getElementById(item.href.substring(1)),
        }))
        .filter((section) => section.element);

      if (sections.length === 0) return;

      let currentSection = sections[0].label;
      let maxVisiblity = 0;

      sections.forEach(({ label, element }) => {
        if (!element) return;

        const rect = element.getBoundingClientRect();

        const windowHeight = window.innerHeight;

        // calculating visible section

        const visibleTop = Math.max(
          0,
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
        );
        const visiblityRatio = visibleTop / Math.min(rect.height, windowHeight);

        if (
          rect.bottom > 0 &&
          rect.top < windowHeight &&
          visiblityRatio > maxVisiblity
        ) {
          maxVisiblity = visiblityRatio;
          currentSection = label;
        }
      });
      setActiveItem(currentSection);
    };

    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleNavClick = (label: string, href: string) => {
    setActiveItem(label);

    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
