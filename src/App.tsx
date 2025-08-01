import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="mx-auto min-h-screen  py-12 md:py-15 lg:py-0 flex flex-col items-center relative">
      <title>Charukirti Chougule- Frontend Developer</title>

      <meta
        name="description"
        content="Frontend Developer skilled in React, TypeScript, and modern web development. Browse my projects and get in touch for collaboration."
      />
      <meta
        name="keywords"
        content="Charukirti, Frontend Developer, React Developer, React JS, TypeScript, JavaScript, Web Developer, Portfolio"
      />
      <meta name="author" content="Charukirti" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Charukirti - Frontend Developer" />
      <meta property="og:url" content="https://charukirti.vercel.app" />
      <meta property="og:site_name" content="Charukirti's Portfolio" />
      <meta
        name="og:description"
        content="Frontend Developer skilled in React, TypeScript, and modern web development. Browse my projects and get in touch for collaboration."
      />

      <link rel="canonical" href="https://charukirti.vercel.app" />

      <Header />
      <AboutMe />
      <Navigation />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}
