import React, { PropTypes } from 'react'

class AppFooter extends React.Component {
  render () {
    return (
      <footer className="c-layout-footer c-layout-footer-6 ">
        <div className="c-postfooter c-bg-dark-2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 c-col">
                <p className="c-copyright c-font-grey">2016 &copy; EXMA-Square
                  <span className="c-font-grey-3"> All Rights Reserved.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    )
  }
}

export default AppFooter;
