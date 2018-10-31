import * as React from "react";
import { connect } from "react-redux";

class Introblock extends React.PureComponent {
  render() {
    return (
      <section className="l-leftBlockOne">
        <div className="c-block">
          <p className="c-block__txt">
            <strong>Wij van Journeyworks</strong>
            <br />
            maken mooie websites en we helpen bij het stroomlijnen van de
            customer journey. Een goede customer journey is net dat beetje extra
            dat ervoor zorgt dat uw product opvalt en meer mensen het product
            zullen afnemen. Bent u benieuwd naar wat wij voor u kunnen
            betekenen? Maak met 1 druk op de knop een afspraak met ons onder het
            genot van een drankje naar keuze!
          </p>
        
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
)(Introblock);
