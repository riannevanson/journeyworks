import * as React from "react";

import { connect } from "react-redux";
import Menu from "../components/Menu";
import Background from "../components/Background";

class OverOns extends React.PureComponent{
  render() {

    let links = [
      {
       label: 'home', link: '/', active: false 
      },
      {
        label: 'over ons', link: '/overons' ,active: true
       },
       {
        label: 'portfolio', link: '/portfolio' ,active: false
       },
       {
        label: 'contact', link: '/contact' ,active: false
       }
    ];


    return (
      <div>
        <Background />
      <Menu links={links}/>
      <div className="l-pageTitle">
      <h1 className="c-logo c-logo__title">Over Ons</h1>
            <h2 className="c-logo__ondertitel">
              Wij zijn twee creatieve nerds <br/>
              met een oog voor een mooie customer journey
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
  )(OverOns);
  
