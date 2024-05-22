import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="/demo/img/about.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>A PROPOS.</h3>
              </div>
              <div className="about-text">
                <p>
                  {"Le BTS Services informatiques aux organisations est un diplôme\n" +
                      "reconnu par l’État de niveau bac+2. Avec ce diplôme, il est possible de\n" +
                      "choisir entre deux options du secteur informatique, selon ses\n" +
                      "compétences et son projet professionnel : Solutions d’infrastructure,\n" +
                      "systèmes et réseaux (SISR) ou Solutions logicielles et applications\n" +
                      "métiers (SLAM). L’option Solutions d’infrastructure, systèmes et\n" +
                      "réseaux me forme dans les domaines des réseaux et des\n" +
                      "équipements informatiques (installation, maintenance, sécurité). Je\n" +
                      "suis formé à la cybersécurité et à son intégration dans l'entreprise en\n" +
                      "tenant compte des dimensions techniques, organisationnelles,\n" +
                      "juridiques... Je serais en mesure de répondre aux besoins\n" +
                      "informatiques d’une entreprise, tout en accompagnant la\n" +
                      "transformation numérique. En sortant d’un BTS SIO SISR, je serais\n" +
                      "donc capable de gérer et d’administrer le réseau d’une société et\n" +
                      "d’assurer sa sécurité et sa maintenance. Un techniciens supérieur en\n" +
                      "informatique option SISR peut accéder aux métiers de :\n" +
                      "Administrateur systèmes et réseaux Informaticien support et\n" +
                      "déploiement Pilote d’exploitation Support systèmes et réseaux\n" +
                      "Technicien d’infrastructure Technicien de production Technicien\n" +
                      "micro et réseaux"}
                </p>
                <div className="btn-bar">
                  <Link href="TABLEAU.xlsx">
                    <a className="px-btn px-btn-theme">
                      <span>Tableau</span>
                    </a>
                  </Link>
                  <Link href="PROGRAMME.pdf">
                    <a className="px-btn px-btn-theme"  target="_blank">
                      <span>Programme BTS SIO</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>FORMATIONS &amp; COMPETENCES</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2022-2024</span>
                <h6>BTS Service informatique aux Organisations</h6>
                <p>Ecole Ensitech - Cergy</p>
                <p>France</p>
              </li>
              <li>
                <span>2024-2025</span>
                <h6>Bachelor NSS (Network Sécurité et Système)
                  Ensitech, Cergy (95)
                  2024/2025
                </h6>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>Mes Compétences</h3>
              <div className="skill-lt">
                <h6>Adressage IP</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "85%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Active Directory</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "72%" }}>
                    <span data-toggle="tooltip" title="72%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>GLPI</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "86%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Protocole Réseaux TCP/IP NAS, LAN, WAN, VLAN VPN, Service DHCP, DNS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              {/* /skill */}
              <div className="skill-lt">
                <h6>HTML/CSS/Python/SQL</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "98%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              {/* /skill */}
              <div className="skill-lt">
                <h6>Kali Linux</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "68%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/francereseaux.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>TECHNICIEN SUPPORT</h6>
                  <label>France Réseaux Juin 2023 - Juin 2024 Cergy France</label>
                  <div className="rb-time">Alternant</div>
                  <p>
                    {"En tant que Technicien Support spécialisé dans l'assistance aux employés chez France\n" +
                        "Réseaux, ma principale responsabilité est de fournir un soutien technique et une\n" +
                        "assistance aux employés de l'entreprise pour résoudre leurs problèmes informatiques et\n" +
                        "techniques."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/premiumcss.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>TECHNICIEN SUPPORT</h6>
                  <label>Prémium Computer Service Mars 2023 - Juin 2023 Gonesse France</label>
                  <div className="rb-time">Alternant</div>
                  <p>
                    {"En tant que Technicien Support chez Premium Computer Service, j’étais chargé de fournir\n" +
                        "une assistance technique de premier niveau à nos clients."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
