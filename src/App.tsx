import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="mx-auto min-h-screen max-w-screen px-6 py-12 md:px-24 md:py-16 lg:py-0 flex flex-col items-center relative">
      <Header />
      <AboutMe />
      <Navigation />
      <Skills />
      <Projects />
    </div>
  );
}
