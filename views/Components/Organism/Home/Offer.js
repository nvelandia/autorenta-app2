import React from 'react';
import { Button, Card, CardBody, CardTitle, Col, Row } from 'reactstrap';
import Pagination from '../../Atoms/Pagination';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pages, redirectTo } from '../../../../utils/helpers/redirectTo';
import CustomCarousel from '../../Molecules/Carousels/CustomCarousel';
import CustomCarouselMobile from '../../Molecules/Carousels/CustomCarousel.mobile';

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
    redirectTo(`${pages.promotion}?id=${id}`);
  };

  renderCards = () => {
    const { translate, isMobile, isTablet, isSmallTablet } = this.props;

    const cards = this.props.offers.map((offer, index) => {
      return (
        <Col key={index} className="justify-content-center d-flex ar-offer-card">
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

    let iterations = 0;
    if (isMobile) {
      iterations = cards.length;
    } else if (isTablet || isSmallTablet) {
      iterations = Math.ceil(cards.length / 2);
    } else {
      iterations = Math.ceil(cards.length / 3);
    }
    const cleanedCards = [];

    for (let i = 0; i < iterations; i++) {
      if (isMobile) {
        cleanedCards.push(cards.slice(i * 1, i * 1 + 1));
      } else if (isTablet || isSmallTablet) {
        cleanedCards.push(cards.slice(i * 2, i * 2 + 2));
      } else {
        cleanedCards.push(cards.slice(i * 4, i * 4 + 4));
      }
    }

    return cleanedCards;
  };

  render() {
    const { translate, isMobile, isTablet, isSmallTablet } = this.props;
    const isMobileDevice = isMobile || isTablet || isSmallTablet

    console.log(this.state.selectedPage)
    return (
      <>
        <Row className="justify-content-center ml-0 mr-0">
          <div className="d-flex flex-column align-items-center justify-content-center ar-central-container ">
            <Row className="mb--3 ml-0 mr-0">
              <Col className="justify-content-center text-center">
                {!isMobile ? (
                  <h2 className="ar-offer-title">{translate('home.offers.mainTitle')}</h2>
                ) : (
                  <h2>{translate('home.offers.mainTitleMobile')}</h2>
                )}
              </Col>
            </Row>
            <Row className="ar-offer-carousel">
              {isMobileDevice ? (
                <CustomCarouselMobile
                  activeIndex={this.state.selectedPage - 1}
                  items={this.renderCards()}
                  justify="justify-content-center"
                  isMobile={true}
                  height={'h-auto'}
                />
              ) : (
                <CustomCarousel
                  activeIndex={this.state.selectedPage - 1}
                  items={this.renderCards()}
                  justify="justify-content-center"
                  isMobile={isMobile}
                  height={'h-auto'}
              />
              )}
            </Row>
          </div>
        </Row>
        {!isMobileDevice && <div className="ar-pagination-container">
          <Pagination
            totalPages={
              isMobile
                ? this.props.offers.length
                : isTablet || isSmallTablet
                ? Math.ceil(this.props.offers.length / 2)
                : Math.ceil(this.props.offers.length / 4)
            }
            selectPage={this.selectPage}
            active={this.state.selectedPage}
          />
        </div>}
      </>
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
