import React from 'react';
import { Card, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DomParser from 'dom-parser';

class CardPromotion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPages: 3,
      selectedPage: 1,
    };
    this.dispatch = props.dispatch;
  }

  stringToHTML = (value) => {
    let parser = new DomParser();
    let doc = parser.parseFromString(value, 'text/html');

    return <div dangerouslySetInnerHTML={{ __html: doc.rawHTML }} />;
  };

  render() {
    const { isMobile, isSmallTablet, isTablet } = this.props;
    if (!isMobile && !isSmallTablet && !isTablet) {
      return (
        <Row className="justify-content-center m-0">
          <div className="ar-central-container">
            <Card className="ar-card-promotion-container">
              <div className="ar-card-promotion-image-container">
                <img src={this.props.offers[0].image_vertical} className="ar-card-promotion-image" />
                <img src={this.props.offers[0].company.logo_banner} className="ar-card-promotion-logo" />
              </div>
              <div className="ar-card-promotion-data">
                <h3>{this.props.offers[0].lead}</h3>
                {this.stringToHTML(this.props.offers[0].body)}
              </div>
            </Card>
          </div>
        </Row>
      );
    } else {
      return (
        <div className="px-25 pt-3 d-flex justify-content-center">
          <Card className="ar-card-promotion-container">
            <div className="ar-card-promotion-image-container">
              <img src={this.props.offers[0].image_vertical} className="ar-card-promotion-image" />
              <img src={this.props.offers[0].company.logo_banner} className="ar-card-promotion-logo" />
            </div>
            <div className="ar-card-promotion-data">
              <h3>{this.props.offers[0].lead}</h3>
              {this.stringToHTML(this.props.offers[0].body)}
            </div>
          </Card>
        </div>
      );
    }
  }
}

CardPromotion.proptypes = {
  dispatch: PropTypes.func,
  loadOffers: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.promotionReducer;
};

export default connect(mapStateToProps)(CardPromotion);
