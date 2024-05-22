const Contact = () => {
  return (
      <section
          id="contactus"
          data-nav-tooltip="Contact Me"
          className="pp-section pp-scrollable section dark-bg"
      >
        <div className="container">
          <div className="title">
            <h3>Contact</h3>
          </div>
          <div className="row">
            <div className="col-lg-5 col-xl-4 m-15px-tb">
              <div className="contact-info">
                <h4>Prenez contact avec moi</h4>
                <ul>
                  <li className="media">
                    <i className="ti-map" />
                    <span className="media-body">
                    Île-de-France Paris, France.
                  </span>
                  </li>
                  <li className="media">
                    <i className="ti-email" />
                    <span className="media-body">firasrassaa95@gmail.com</span>
                  </li>
                  <li className="media">
                    <i className="ti-mobile" />
                    <span className="media-body">+33 06 80 12 99 34</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="google-map">
                <div className="embed-responsive embed-responsive-21by9">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default Contact;