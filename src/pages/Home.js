import * as React from "react";
import Header  from '../components/Header';
import Introblock  from '../components/Introblock';
import UXblock from '../components/UXblock';
import { connect } from "react-redux";
import Menu from "../components/Menu";
import Background from "../components/Background"
import PortfolioHome from '../components/PortfolioHome'

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
        <Background />
        <Menu links={links}/>
        <Header/>
        <div className="l-pageBlocks">
        <Introblock/>
        <UXblock/>
        </div>
        <PortfolioHome/>
        <div className="l-pageBlocks">
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
  )(Home);
  
