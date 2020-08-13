import React from 'react';
import classnames from 'classnames';

import { Button, Card, CardBody, CardImg, CardTitle, CardText, CardHeader, Col, Container, Row } from 'reactstrap';
import Pagination from '../../Atoms/Pagination';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Offer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPages: 1,
      selectedPage: 1,
      cards: [
        {
          title: 'Recorre Europa con un 15% de descuento por reserva anticipada.',
          thumb: '/img/custom/logo-avis.png',
          color: 'ar-red-1-text',
          image: '/img/custom/avis-promo-thumb-1.jpg',
          button: 'avis',
        },
        {
          title: 'Latinoamérica y el Caribe te esperan con un 10% de descuento.',
          thumb: '/img/custom/logo-alamo.png',
          color: 'ar-blue-1-text',
          image: '/img/custom/alamo-promo-thumb-2.jpg',
          button: 'alamo',
        },
        {
          title: 'Recibe un ascenso de categoría en tu reserva para Estados Unidos.',
          thumb: '/img/custom/logo-budget.png',
          color: 'ar-orange-text',
          image: '/img/custom/budget-promo-thumb-3.jpg',
          button: 'budget',
        },
        {
          title: '20% de descuento prepagando tu reserva para Estados Unidos.',
          thumb: '/img/custom/logo-payless.png',
          color: 'ar-blue-3-text',
          image: '/img/custom/payless-promo-thumb-4.jpg',
          button: 'payless',
        },
      ],
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

  renderCards = () => {
    return this.state.cards.map((card, index) => {
      return (
        <Col key={index} className="justify-content-center d-flex" xl="3" lg="5" md="5" sm="10" xs="12">
          <Card className="w-auto m-2">
            <div className="ar-card-image">
              <img className="ar-image" src={card.image} />
              <img className="ar-logo" src={card.thumb} />
              <div className="ar-border-image-offer" />
            </div>
            <CardBody>
              <CardTitle className={`ar-card-title ${card.color}`}>{card.title}</CardTitle>
              <Row className="justify-content-center">
                <Button className={`ar-round-button  ar-promo-button ${card.button} w-100 ml-3 mr-3`}>
                  Ver más información <i className="ar-icon-chevron-right va-middle" />
                </Button>
              </Row>
            </CardBody>
          </Card>
        </Col>
      );
    });
  };

  // metodo con lo que viene del back
  //
  // renderCards = () => {
  //   return this.props.offers.map((offer, index) => {
  //     return (
  //       <Col key={index} className="justify-content-center d-flex" xl="3" lg="5" md="5" sm="10" xs="12">
  //         <Card className="w-auto m-2">
  //           <div className="ar-card-image">
  //             <img className="ar-image" src={offer.thumb} />
  //             <img className="ar-logo" src={offer.company.logo} />
  //             <div className="ar-border-image-offer" />
  //           </div>
  //           <CardBody>
  //             <CardTitle className={`ar-card-title ${offer.color}`}>{offer.title}</CardTitle>
  //             <Row className="justify-content-center">
  //               <Button
  //                 className={`ar-round-button  ar-promo-button ${offer.button} w-100 ml-3 mr-3`}
  //                 style={{ backgroundColor: offer.company.color, borderColor: offer.company.color }}
  //               >
  //                 Ver más información <i className="ar-icon-chevron-right" />
  //               </Button>
  //             </Row>
  //           </CardBody>
  //         </Card>
  //       </Col>
  //     );
  //   });
  // };

  render() {
    const { dataCards } = this.props;
    return (
      <div>
        <Row className="justify-content-center">
          <Col className="justify-content-center" lg="9">
            <Row>
              <Col className="justify-content-center text-center">
                <h2>Descubre todas las ofertas y promociones</h2>
              </Col>
            </Row>
            <Row className="justify-content-md-around justify-content-sm-center  mt-5">{this.renderCards()}</Row>
          </Col>
        </Row>
        <div className="ar-pagination-container">
          <Pagination
            totalPages={Math.ceil(this.props.offers.length / 4)}
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
