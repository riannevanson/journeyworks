import * as React from "react";
import { connect } from "react-redux";
import Menu from "../components/Menu"
import Background from "../components/Background"

class Contact extends React.PureComponent {
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
        active: false
      },
      {
        label: "contact",
        link: "/contact",
        active: true
      }
    ];

    return (
      <div>
        <Background />
        <Menu links={links} />
        <div className="l-pageTitle">
      <h1 className="c-logo c-logo__title">Contact</h1>
            <h2 className="c-logo__ondertitel">
              Wij staan altijd open voor een kopje koffie<br/>
              om te kijken wat we allemaal kunnen doen samen.
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
)(Contact);
