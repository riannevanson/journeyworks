import * as React from "react";
import { connect } from "react-redux";
import LogoJourneyWorks from "../lib/images/Logojourneyworkshorizontaal.png";






class Menu extends React.PureComponent {
  constructor() {
      super();

    
  }



  render() {

 let linksMarkup = this.props.links.map((link, index) => {
   let linkMarkup = link.active ? (
        <a className="menu__link menu__link--active" href={link.link}>{link.label}</a>
      ) : (
          <a className="menu__link" href={link.link}>
          {link.label}</a>
      );

      return (
        <li key={index} className="menu__list-item">
         {linkMarkup}</li>
      );
  });
  

      return (
          <div>
            <div className="container center">
              <nav className="menu">
                  <img src={LogoJourneyWorks} className="menu__logo" alt="logo" />

                  <div className="menu__right">
                      <ul className="menu__list">
                          {linksMarkup}
                      </ul>
 
                     
                  </div>
              </nav>
          </div>
   </div>
      );
  }
}





const mapStateToProps = state => {
return {

};

};
export default connect(mapStateToProps,{})(Menu);
