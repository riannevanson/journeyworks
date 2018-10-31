import * as React from "react";
import { connect } from "react-redux";





class UXblock extends React.PureComponent {
  render() {
   
    return (
        <section className="l-rightBlockOne">
            <div className="c-block">
                <p className="c-block__txt">
                <strong>Focus op de gebruiker</strong>
                <br/>

                Een goede gebruikerservaring is cruciaal. We stellen ons daarom constant de vraag: Kan de gebruiker gemakkelijk zijn of haar weg vinden in de applicatie? Deze focus op de gebruiker staat bekend als User Experience (UX) design. Om meer precies te zijn hebben we bij product ontwikkeling vooral aandacht voor deze zaken:
                
                <ul>
                    <li>(De herkenbaarheid van) de toegevoegde waarde ten opzichte van bestaande producten. </li>
                    <li>De mate van gemak waarmee een gebruiker kan overstappen op het nieuwe product. </li>
                    <li>De mate van gemak waarmee een gebruiker het product zich eigen kan maken. </li>
                    <li>De mate waarin het product zichtbaar is voor de potentiële gebruikers. </li>
                    <li>En hoe makkelijk het is om het gewoon even uit te proberen. </li>
                </ul>
                </p>
            </div>

        </section>
        
    );
  }
}
const mapStateToProps = state => {
return {

};

};
export default connect(mapStateToProps,{})(UXblock);
