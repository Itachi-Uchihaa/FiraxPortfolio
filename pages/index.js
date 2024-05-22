import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import Link from "next/link";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Bonjour, je suis</h6>
                  <h1 className="font-alt">Firas Rassaa</h1>
                  <p className="lead">
                    Je suis <TypingAnimation />
                  </p>
                  <p className="desc">
                    {"Bienvenue sur mon portfolio. Actuellement étudiant en BTS\n" +
                        "SIO à l’ENSITECH, je suis déterminé à approfondir mes\n" +
                        "compétences dans ce domaine que j'apprécie énormément.\n" +
                        "Mon parcours académique reflète mon engagement à me\n" +
                        "perfectionner constamment. Après l'obtention de mon BTS, je\n" +
                        "poursuivrai mes études à l'ENSITECH pour obtenir un Bachelor\n" +
                        "en Network Security and Systems.\n" +
                        "Je suis convaincu que cette formation me permettra\n" +
                        "d'acquérir les connaissances et les compétences nécessaires\n" +
                        "pour exceller dans le domaine de la sécurité informatique et\n" +
                        "des systèmes, un domaine qui m'inspire particulièrement.\n" +
                        "N'hésitez pas à explorer mon portfolio pour en savoir plus sur\n" +
                        "mon parcours et mes réalisations. Je suis impatient de\n" +
                        "partager mes expériences et de contribuer à des projets\n" +
                        "passionnants dans le domaine de la technologie de\n" +
                        "l'information."}
                  </p>
                  <div className="btn-bar">
                      <Link href="Cv-firax.pdf">
                          <a className="px-btn px-btn-theme"  target="_blank">
                              Download CV
                          </a>
                      </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="/demo/img/Firas.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      <Portfolio />
      {/* End Portfolio */}
      {/* Blog */}
      <Blog />
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default Index;
