import * as React from "react";

import { connect } from "react-redux";
import Menu from "../components/Menu"

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
      <Menu links={links}/>
     Overons

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
  
