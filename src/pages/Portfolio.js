import * as React from "react";
import { connect } from "react-redux";
import Menu from "../components/Menu";

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
        <Menu links={links} />
        <section className="">Portfolio</section>
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
