import { Code, FolderGit, Home, Mail, User } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About Me", href: "#about" },
    { icon: Code, label: "My Skills", href: "#skills" },
    { icon: FolderGit, label: "Projects", href: "#projects" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed bottom-8 left-0 w-full flex justify-center z-50">
      <nav className="flex items-center gap-2 rounded-full bg-zinc-900/90 backdrop-blur-md border border-gray-700/50 px-4 py-3 shadow-2xl">
        {navItems.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            onClick={() => setActiveItem(label)}
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
