import * as React from "react";
import { connect } from "react-redux";
import data from "../lib/data";
import Card from "../components/Card";

// class component
class CardsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };



  render() {
    const {properties, property} = this.state;
    return (
      
      <div className="l-cards-slider">
       
          <button
            onClick={() => this.prevProperty()}
            disabled={property.index === 0}
          >
            Prev
          </button>
          <button
            onClick={() => this.nextProperty()}
            disabled={property.index === data.properties.length - 1}
          >
            Next
          </button>


       <div className={`c-cards-slider active-slide-${property.index}`}>
        <div className="l-cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {
                    properties.map(property => <Card key={property._id} property={property} />)
                  }
                </div>
        </div>
      </div>
    );
  }
}

export default CardsContainer;
