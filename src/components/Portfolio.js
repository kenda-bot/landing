import React from "react";

function Portfolio() {
  return (
    <div>
      <div id="portfolio" className="container-fluid text-center bg-grey">
        <h2>Portfolio</h2>
        <br />
        <h4>What we have created</h4>
        <div className="row text-center">
          <div className="col-sm-4">
            <div className="thumbnail">
              <p>
                <strong>Paris</strong>
              </p>
              <p>Yes, we built Paris</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="thumbnail">
              <p>
                <strong>New York</strong>
              </p>
              <p>We built New York</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="thumbnail">
              <p>
                <strong>San Francisco</strong>
              </p>
              <p>Yes, San Fran is ours</p>
            </div>
          </div>

          <h2>What our customers say</h2>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Portfolio;