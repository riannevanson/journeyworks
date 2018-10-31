import * as React from "react";
import { connect } from "react-redux";


class Background extends React.PureComponent {
  render() {
    return (
  
  
          <div className="l-bergenparallax">
            <div className="achtergrondBergen--01" />
            <div className="achtergrondBergen--02" />
            <div className="achtergrondBergen--03" />
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
)(Background);
