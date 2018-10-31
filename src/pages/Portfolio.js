import * as React from "react";
import { connect } from "react-redux";
import Menu from "../components/Menu";
import Background from "../components/Background";

class Portfolio extends React.PureComponent {
  render() {
    let links = [
      {
        label: "home",
        link: "/",
        active: false
      },
      {
        label: "over ons",
        link: "/overons",
        active: false
      },
      {
        label: "portfolio",
        link: "/portfolio",
        active: true
      },
      {
        label: "contact",
        link: "/contact",
        active: false
      }
    ];

    return (
      <div>
        <Background />
        <Menu links={links} />
        <div className="l-pageTitle">
      <h1 className="c-logo c-logo__title">Portfolio</h1>
            <h2 className="c-logo__ondertitel">
              Hieronder vindt u een greep uit <br/>
              ons portfolio
            </h2>
      
      </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(Portfolio);
