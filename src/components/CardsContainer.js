import * as React from "react";
import { connect } from "react-redux";
import data from "../lib/data";
import Card from "../components/Card";

// class component
class CardsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      portfolioImgs: data.portfolioImgs,
      portfolioImg: data.portfolioImgs[0]
    };
  }

  nextportfolioImg = () => {
    const newIndex = this.state.portfolioImg.index + 1;
    this.setState({
      portfolioImg: data.portfolioImgs[newIndex]
    });
  };

  prevportfolioImg = () => {
    const newIndex = this.state.portfolioImg.index - 1;
    this.setState({
      portfolioImg: data.portfolioImgs[newIndex]
    });
  };

  render() {
    const { portfolioImgs, portfolioImg } = this.state;
    return (
      <div className="l-cards-slider">
        <button
          className="btn btn--prev"
          onClick={() => this.prevportfolioImg()}
          disabled={portfolioImg.index === 0}
        >
          <h2>&lt; Prev</h2>
        </button>
        <button
          className="btn btn--nxt"
          onClick={() => this.nextportfolioImg()}
          disabled={portfolioImg.index === data.portfolioImgs.length - 1}
        >
          <h2> Next  &gt;</h2>
        </button>

        <div className={`c-cards-slider active-slide-${portfolioImg.index}`}>
          <div
            className="l-cards-slider-wrapper"
            style={{
              transform: `translateX(-${portfolioImg.index *
                (100 / portfolioImgs.length)}%)`
            }}
          >
            {portfolioImgs.map(portfolioImg => (
              <Card key={portfolioImg._id} portfolioImg={portfolioImg} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CardsContainer;
