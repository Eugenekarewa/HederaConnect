export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-5 text-center">
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Documentation</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Legal Terms</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a href="#" className="nav-link pl-0" aria-label="Facebook">
                  <i className="fa fa-facebook fa-lg"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" aria-label="Twitter">
                  <i className="fa fa-twitter fa-lg"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" aria-label="GitHub">
                  <i className="fa fa-github fa-lg"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" aria-label="Instagram">
                  <i className="fa fa-instagram fa-lg"></i>
                </a>
              </li>
            </ul>
            <br />
          </div>
          <div className="col-md-2 text-center">
            <h5>Contact Us</h5>
            <hr />
          </div>
          <div className="col-md-5 text-center">
            <form>
              <fieldset className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </fieldset>
              <fieldset className="form-group">
                <textarea
                  className="form-control"
                  id="exampleMessage"
                  placeholder="Message"
                ></textarea>
              </fieldset>
              <fieldset className="form-group text-center">
                <button
                  type="button"
                  className="btn btn-secondary-outline btn-lg"
                >
                  Send
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p className="text-muted">
              © {new Date().getFullYear()} Hedera Connect. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
