import * as React from "react";
import Header  from '../components/Header';
import Introblock  from '../components/Introblock';
import UXblock from '../components/UXblock';
import { connect } from "react-redux";
import Menu from "../components/Menu"


class Home extends React.PureComponent{
  render() {
    let links = [
        {
         label: 'home', link: '/', active: true 
        },
        {
          label: 'over ons', link: '/overons' ,active: false
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
        <Header/>
        <Introblock/>
        <UXblock/>

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
  )(Home);
  
