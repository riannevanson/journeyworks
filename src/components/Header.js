import * as React from "react";
import { connect } from "react-redux";

import logoBalloon from "../lib/images/LogoJourneyWorks03.png";






class Header extends React.PureComponent {
  render() {
   
    return (
        <section className="l-header">
        <section className="l-menu">

        </section>
            <section className="l-banner">
                <div className="l-bergenparallax">
                  <div className="achtergrondBergen--01"></div>
                  <div className="achtergrondBergen--02"></div>
                  <div className="achtergrondBergen--03"></div>
                </div>
              
                <div className="l-logo">
                <img src={logoBalloon} alt="Logoballoon" className="c-logo c-logo__balloon"/>
                  {/* <img src={logoBottom} alt="Logo" className="c-logo c-logo__bottom"/> */}
                
                  <h1 className="c-logo c-logo__title">
                  Journey works
                </h1>
                <h2 className="c-logo__ondertitel">
                  Digital designers &amp; builders 
                  <br/>
                  We focus on the customer journey
                </h2>

                </div>
            </section>
        </section>
    );
  }
}
const mapStateToProps = state => {
return {

};

};
export default connect(mapStateToProps,{})(Header);
