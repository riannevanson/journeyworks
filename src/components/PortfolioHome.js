import * as React from "react";
import { connect } from "react-redux";


class PortfolioHome extends React.PureComponent {
  render() {
    return (
        <section className="home--portfolio">
            <div className="l-pageTitle">
             <h1 className="c-logo c-logo__title">Ons Werk</h1>
              <h2 className="c-logo__ondertitel">
                Wij zijn twee creatieve nerds <br/>
                met een oog voor een mooie customer journey
              </h2>
        
        </div>
        </section>
        
     );
  }
}
const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(PortfolioHome);
