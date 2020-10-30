import React from 'react';
import classnames from 'classnames';

import { Button, Card, CardBody, CardImg, CardTitle, CardText, CardHeader, Col, Container, Row } from 'reactstrap';
import Pagination from '../../Atoms/Pagination';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pages, redirectTo } from '../../../../utils/helpers/redirectTo';
import CustomCarousel from '../../Molecules/Carousels/CustomCarousel';

class Offer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPages: 3,
      selectedPage: 1,
      cards: [],
    };
    this.dispatch = props.dispatch;
    this.loadCards();
  }

  loadCards = () => {
    this.dispatch(this.props.loadOffers());
  };

  selectPage = (page) => {
    this.setState({ selectedPage: page });
  };

  handleSelectPromotion = (id) => {
    redirectTo(`${pages.promotion}/${id}`);
  };

  renderCards = () => {
    const { translate, isMobile } = this.props;

    const cards = this.props.offers.map((offer, index) => {
      return (
        <Col key={index} className="justify-content-center d-flex ar-offer-card" xl="3" lg="5" md="5" sm="10" xs="12">
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

    let iterations = isMobile ? cards.length : Math.ceil(cards.length / 3);
    const cleanedCards = [];

    for (let i = 0; i < iterations; i++) {
      if (isMobile) {
        cleanedCards.push(cards.slice(i * 1, i * 1 + 1));
      } else {
        cleanedCards.push(cards.slice(i * 4, i * 4 + 4));
      }
    }

    return cleanedCards;
  };

  render() {
    const { translate, isMobile } = this.props;
    return (
      <div>
        <Row className="justify-content-center ml-0 mr-0">
          <div className="justify-content-center ar-central-container">
            <Row className="mb--3 ml-0 mr-0">
              <Col className="justify-content-center text-center">
                {!isMobile ? (
                  <h2>{translate('home.offers.mainTitle')}</h2>
                ) : (
                  <h2>{translate('home.offers.mainTitleMobile')}</h2>
                )}
              </Col>
            </Row>
            <Row className=" justify-content-md-around justify-content-sm-center ar-offer-carousel">
              <CustomCarousel
                activeIndex={this.state.selectedPage - 1}
                items={this.renderCards()}
                justify="justify-content-center"
                isMobile={isMobile}
              />
            </Row>
          </div>
        </Row>
        <div className="ar-pagination-container">
          <Pagination
            totalPages={isMobile ? this.props.offers.length : Math.ceil(this.props.offers.length / 4)}
            // totalPages={this.state.totalPages}
            selectPage={this.selectPage}
            active={this.state.selectedPage}
          />
        </div>
      </div>
    );
  }
}

Offer.proptypes = {
  dispatch: PropTypes.func,
  loadOffers: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(Offer);
