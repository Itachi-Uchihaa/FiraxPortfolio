import Link from "next/link";

const Blog = () => {
  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>VEILLE INFORMATIQUE</h3>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog">
                  <a>
                    <img src="static/img/img1.png" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <h6>
                  <Link href="https://www.blog-nouvelles-technologies.fr/287501/alerte-cybersecurite-france-attaques-sans-precedent-avant-olympiades/">
                    <a target="_blank">
                      Alerte cybersécurité en France : Des attaques sans précédent avant les Olympiades
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://www.maddyness.com/2024/03/13/cybersecurite-un-startup-studio-lance-au-campus-cyber-pour-propulser-10-pepites-europeennes-en-5-ans/">
                  <a target="_blank">
                    <img src="static/img/img2.png" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <h6>
                  <Link href="/single-blog">
                    <a target="_blank">
                      Cybersécurité : un startup studio lancé au Campus Cyber pour propulser 10 pépites européennes en 5 ans
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://sports.orange.fr/divers/article/paris-2024-france-televisions-lance-une-chaine-numerique-dediee-a-l-evenement-exclu-CNT000002dNJNB.html">
                  <a target="_blank">
                    <img src="static/img/img3.png" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <h6>
                  <Link href="/single-blog">
                    <a target="_blank">
                      {"Paris 2024 : France Télévisions lance une chaîne numérique dédiée à l'événement partagez"}
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://www.catapult.com/fr/blog/rapport-suivi-des-athletes-football">
                  <a target="_blank">
                    <img src="static/img/img4.png" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <h6>
                  <Link href="/single-blog">
                    <a target="_blank">
                      Rapport: Comment utiliser la surveillance des athlètes dans le football
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://sports.orange.fr/divers/article/paris-2024-france-televisions-lance-une-chaine-numerique-dediee-a-l-evenement-exclu-CNT000002dNJNB.html">
                  <a target="_blank">
                    <img src="static/img/img5.png" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <h6>
                  <Link href="https://www.lemonde.fr/pixels/article/2024/05/13/donnees-personnelles-les-questions-que-posent-les-qr-codes-pour-pouvoir-se-deplacer-pendant-les-jeux-olympiques_6233012_4408996.html">
                    <a target="_blank">
                      Les questions que posent les QR codes pour pouvoir se déplacer pendant les Jeux olympiques                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://sports.orange.fr/divers/article/paris-2024-france-televisions-lance-une-chaine-numerique-dediee-a-l-evenement-exclu-CNT000002dNJNB.html">
                  <a target="_blank">
                    <img src="static/img/img6.png" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <h6>
                  <Link href="https://www.lebigdata.fr/intel-jo-2024">
                    <a target="_blank">
                      JO 2024 : Intel améliorera les jeux avec l’IA
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
export default Blog;
