import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Mes Projets.</h3>
        </div>
        <div className="portfolio-filter-01">
          <ul className="filter nav">
            <li
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              Tout
            </li>
            <li
              className={`c-pointer ${activeBtn("branding")}`}
              onClick={handleFilterKeyChange("branding")}
              data-filter=".branding"
            >
              Première Année
            </li>
            <li
              className={`c-pointer ${activeBtn("photoshop")}`}
              onClick={handleFilterKeyChange("photoshop")}
              data-filter=".photoshop"
            >
              deuxième année
            </li>
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
          <div className="grid-item product branding fashion">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Tp Vlan</h5>
                <Link href="TpVlan.pdf">
                  <a className="px-btn px-btn-theme"  target="_blank">
                    <span style={{color: "black"}}>Télécharger pdf</span>
                  </a>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src="static/img/vlan.jpeg" title="" alt=""/>
                <div className="portfolio-icon">
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item photoshop">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Glpi windows</h5>
                <Link href="glpiwindows.pdf">
                  <a className="px-btn px-btn-theme"  target="_blank">
                    <span style={{color: "black"}}>Télécharger pdf</span>
                  </a>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src="static/img/glpwindows.jpeg" title="" alt="" />
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Tuto création de machine virtuelle</h5>
                <Link href="creationmachine.pdf">
                  <a className="px-btn px-btn-theme"  target="_blank">
                    <span style={{color: "black"}}>Télécharger pdf</span>
                  </a>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src="static/img/machinevirtuelle.jpeg" title="" alt="" />
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product photoshop">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Tuto glpi ubuntu</h5>
                <Link href="GlpiUbuntu.pdf">
                  <a className="px-btn px-btn-theme"  target="_blank">
                    <span style={{color: "black"}}>Télécharger pdf</span>
                  </a>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src="static/img/ubuntu.jpeg" title="" alt="" />
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Call center</h5>
                <Link href="CenterCall.pdf">
                  <a className="px-btn px-btn-theme"  target="_blank">
                    <span style={{color: "black"}}>Télécharger pdf</span>
                  </a>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src="static/img/callcenter.jpeg" title="" alt="" />
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product photoshop">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Tuto active directory</h5>
                <Link href="Tutodirectory.pdf">
                  <a className="px-btn px-btn-theme"  target="_blank">
                    <span style={{color: "black"}}>Télécharger pdf</span>
                  </a>
                </Link>
              </div>
              <div className="portfolio-img">
                <img src="static/img/activeDirectory.jpeg" title="" alt="" />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
