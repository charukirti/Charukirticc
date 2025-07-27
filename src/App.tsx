import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="mx-auto min-h-screen  py-12 md:py-15 lg:py-0 flex flex-col items-center relative">
      <Header />
      <AboutMe />
      <Navigation />
      <Skills />
      <Projects />
      <ContactMe/>
    </div>
  );
}
