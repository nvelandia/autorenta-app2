import React from 'react';
import { Button, Card, CardBody, CardTitle, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DomParser from 'dom-parser';
import { pages, redirectTo } from '../../../../utils/helpers/redirectTo';

class GridPromotion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

  stringToHTML = (value) => {
    let parser = new DomParser();
    let doc = parser.parseFromString(value, 'text/html');

    return <div dangerouslySetInnerHTML={{ __html: doc.rawHTML }} />;
  };

  handleSelectPromotion = (id) => {
    window.location.replace(`${pages.promotion}?id=${id}`);
  };

  renderCards = (translate) => {
    let size = 3;
    if (this.props.isMobile || this.props.isSmallTablet) {
      size = 12;
    }
    if (this.props.isTablet) {
      size = 6;
    }
    const cards = this.props.offers.map((offer, index) => {
      return (
        <Col xs={size} key={index} className="justify-content-center d-flex ar-offer-card">
          <Card className="w-auto m-0 ar-border-round">
            <div className="ar-card-image">
              <img className="ar-image" src={offer.thumb} />
              <img className="ar-logo" src={offer.company.logo_banner} />
              <div className="ar-border-image-offer" />
            </div>
            <CardBody className="ar-card-body-offer">
              <CardTitle className={`ar-card-title ${offer.color}`} style={{ color: offer.company.color }}>
                {offer.title}
              </CardTitle>
              <Row className="justify-content-center">
                <Button
                  className={`ar-round-button  ar-promo-button ${offer.button} w-100 ml-3 mr-3`}
                  style={{ backgroundColor: offer.company.color, borderColor: offer.company.color }}
                  onClick={() => this.handleSelectPromotion(offer.post_id)}
                >
                  {translate('home.offers.button')}
                </Button>
              </Row>
            </CardBody>
          </Card>
        </Col>
      );
    });
    return cards;
  };

  render() {
    const { translate } = this.props;
    return (
      <div className="d-flex justify-content-center w-100 my-5">
        <Row className="ar-promotion-grid-container mx-0">{this.renderCards(translate)}</Row>
      </div>
    );
  }
}

GridPromotion.proptypes = {
  dispatch: PropTypes.func,
  loadOffers: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.promotionReducer;
};

export default connect(mapStateToProps)(GridPromotion);
