import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Ce que je sais faire ?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Gérer le patrimoine informatique</h5>
                <p>▸ Recenser et identifier les ressources numériques</p>
                <p>▸ Exploiter des référentiels, normes et standards adoptés par le prestataire informatique</p>
                <p> ▸ Mettre en place et vérifier les niveaux d’habilitation associés à un service</p>
                <p>▸ Vérifier les conditions de la continuité d’un service informatique</p>
                <p>▸ Gérer des sauvegardes</p>
                <p>▸ Vérifier le respect des règles d’utilisation des ressources numériques</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Répondre aux incidents et aux demandes d’assistance et d’évolution</h5>
                <p>▸ Collecter, suivre et orienter des demandes</p>
                <p>▸ Traiter des demandes concernant les services réseau et système, applicatifs</p>
                <p>▸ Traiter des demandes concernant les applications</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <h5>Développer la présence en ligne de l’organisation</h5>
                <p>▸ Participer à la valorisation de l’image de l’organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques</p>
                <p>▸ Référencer les services en ligne de l’organisation et mesurer leur visibilité.</p>
                <p>▸ Participer à l’évolution d’un site Web exploitant les données de l’organisation.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Travailler en mode projet</h5>
                <p>▸ Analyser les objectifs et les modalités d’organisation d’un projet</p>
                <p>▸ Planifier les activités.</p>
                <p>▸ Évaluer les indicateurs de suivi d’un projet et analyser les écarts</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Mettre à disposition des utilisateurs un service informatique</h5>
                <p>▸ Réaliser les tests d’intégration et d’acceptation d’un service</p>
                <p>▸ Déployer un service</p>
                <p>▸ Accompagner les utilisateurs dans la mise en place d’un service</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <h5>Organiser son développement professionnel</h5>
                <p>▸ Mettre en place son environnement d’apprentissage personnel</p>
                <p>▸ Mettre en œuvre des outils et stratégies de veille informationnelle</p>
                <p>▸ Gérer son identité professionnelle</p>
                <p>▸ Développer son projet professionnel</p>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <Testimonials />
      </div>
    </section>
  );
};
export default Services;
