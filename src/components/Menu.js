import * as React from "react";
import { connect } from "react-redux";

import logoBalloon from "../lib/images/LogoJourneyWorks03.png";
import LogoJourneyWorks from "../lib/images/Logojourneyworkshorizontaal.png";






class Menu extends React.PureComponent {
  constructor() {
      super();

      this.state = {
          showForm: false
      };
  }

  showForm() {
      this.setState({
          showForm: !this.state.showForm
      });
  }

  render() {
  
  

      return (
            <div>
               <div className="container center">
        <nav className="menu">
            <img src={LogoJourneyWorks} className="menu__logo" alt="logo" />

            <div className="menu__right">
                <ul className="menu__list">
                    <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Home</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">Over Ons</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">Portfolio</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">Contact</a></li>
                </ul>

                {/* <button className="menu__search-button"></button> */}

                {/* <form className="menu__search-form hide" method="POST">
                    <input className="menu__search-input" placeholder="Type and hit enter"/>
                </form> */}
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
