import * as React from "react";
import { connect } from "react-redux";
import Menu from "../components/Menu"

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
        <Menu links={links} />
        <section className="">Contact</section>
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
