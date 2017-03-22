import React, { PropTypes } from 'react'
class HomeAboutInfo extends React.Component {
  render () {
    const { lang, company } = this.props;
    return (
      <footer className="c-layout-footer c-layout-footer-6 c-bg-grey-1">
        <div className="container">
          <div className="c-prefooter c-bg-white">
            <div className="c-foot">
              <div className="row">
                <div className="col-md-7">
                  <div className="c-content-title-1 c-title-md">
                    <h3 className="c-font-uppercase c-font-bold">About
                      <span className="c-theme-font"> {company.name}</span>
                    </h3>
                    <div className="c-line-left hide"></div>
                  </div>
                  <p className="c-text c-font-16 c-font-regular">{company.desc}</p>
                </div>
                <div className="col-md-5">
                  <div className="c-content-title-1 c-title-md">
                    <h3 className="c-font-uppercase c-font-bold">{lang('訂閱電子報')}</h3>
                    <div className="c-line-left hide"></div>
                  </div>
                  <div className="c-line-left hide"></div>
                  <form action="#">
                    <div className="input-group input-group-lg c-square">
                      <input type="text" className="form-control c-square c-font-grey-3 c-border-grey c-theme" placeholder={lang('您的 Email')} />
                      <span className="input-group-btn">
                        <button className="btn c-theme-btn c-theme-border c-btn-square c-btn-uppercase c-font-16" type="button">{lang('訂閱')}</button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </footer>
    )
  }
}

export default translate('Home')(HomeAboutInfo);
