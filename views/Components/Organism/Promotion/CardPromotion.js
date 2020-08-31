import React from 'react';
import classnames from 'classnames';

import { Button, Card, CardBody, CardImg, CardTitle, CardText, CardHeader, Col, Container, Row } from 'reactstrap';
import Pagination from '../../Atoms/Pagination';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CardPromotion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPages: 3,
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
          title: 'Recorre Europa con un 15% de descuento por reserva anticipada.',
          thumb: '/img/custom/logo-avis.png',
          color: 'ar-red-1-text',
          image: '/img/custom/avis-promo-thumb-1.jpg',
          button: 'avis',
        },
        {
          title: '20% de descuento prepagando tu reserva para Estados Unidos.',
          thumb: '/img/custom/logo-payless.png',
          color: 'ar-blue-3-text',
          image: '/img/custom/payless-promo-thumb-4.jpg',
          button: 'payless',
        },
        {
          title: 'Recibe un ascenso de categoría en tu reserva para Estados Unidos.',
          thumb: '/img/custom/logo-budget.png',
          color: 'ar-orange-text',
          image: '/img/custom/budget-promo-thumb-3.jpg',
          button: 'budget',
        },
      ],
    };
    this.dispatch = props.dispatch;
  }

  // metodo con lo que viene del back

  // renderCards = () => {
  //   return this.props.offers
  //     .map((offer, index) => {
  //       return (
  //         <Col key={index} className="justify-content-center d-flex" xl="3" lg="5" md="5" sm="10" xs="12">
  //           <Card className="w-auto m-2">
  //             <div className="ar-card-image">
  //               <img className="ar-image" src={offer.thumb} />
  //               <img className="ar-logo" src={offer.company.logo} />
  //               <div className="ar-border-image-offer" />
  //             </div>
  //             <CardBody>
  //               <CardTitle className={`ar-card-title ${offer.color}`}>{offer.title}</CardTitle>
  //               <Row className="justify-content-center">
  //                 <Button
  //                   className={`ar-round-button  ar-promo-button ${offer.button} w-100 ml-3 mr-3`}
  //                   style={{ backgroundColor: offer.company.color, borderColor: offer.company.color }}
  //                 >
  //                   Ver más información <i className="ar-icon-chevron-right" />
  //                 </Button>
  //               </Row>
  //             </CardBody>
  //           </Card>
  //         </Col>
  //       );
  //     })
  //     .slice(0, 4);
  // };

  render() {
    const { dataCards } = this.props;
    return (
      <Row className="justify-content-center m-0">
        <Col xl="9" lg="10" md="11" className="pl-0 pr-0">
          <Card className="ar-card-promotion-container">
            <div className="ar-card-promotion-image-container">
              <img src="/img/custom/promotion/avis-promotion-image.jpg" className="ar-card-promotion-image" />
              <img src="/img/custom/promotion/logo-avis.png" className="ar-card-promotion-logo" />
            </div>
            <div className="ar-card-promotion-data">
              <h3>Obtenga 500 millas AAdvantage con cada alquiler.</h3>
              <h5>
                Alquila en USA y recibe más millas de acuerdo a la duración de la renta. Válido para reservas en
                oficinas participantes. Utilice el código de descuento <b>K817100</b>
              </h5>
              <h6> Estas son las millas que obtendrá con cada alquiler válido:</h6>
              <h6 className="ar-card-promotion-miles">
                <strong>
                  <i className="ar-icon-chevron-right" />
                  &nbsp;500 millas{' '}
                </strong>
                - socios AAdvantage.®
              </h6>
              <h6 className="ar-card-promotion-miles">
                <strong>
                  <i className="ar-icon-chevron-right" />
                  &nbsp;750 millas{' '}
                </strong>
                - Titulares de tarjetas Cit® / AAdvantage® y AAdvantage® Aviator® MasterCard.®
              </h6>
              <h6 className="ar-card-promotion-miles">
                <strong>
                  <i className="ar-icon-chevron-right" />
                  &nbsp;1,000 millas{' '}
                </strong>
                - Socios Platinum Pro, Platinum y Gold
              </h6>
              <h6 className="ar-card-promotion-miles">
                <strong>
                  <i className="ar-icon-chevron-right" />
                  &nbsp;1,250 millas{' '}
                </strong>
                - Socios Executive Platinum
              </h6>
              <div className="ar-card-promotion-data-small-letter">
                <p>
                  Los alquileres que comprenden el uso ya sea de un solo vehículo durante más de un día o de distintos
                  vehículos durante el mismo día o en días consecutivos, en la misma oficina, serán considerados como un
                  solo alquiler, incluso si el socio devuelve el vehículo y lo retira nuevamente durante ese mismo
                  príodo. Para obtener las millas, se deberá hacer la reservación por anticipado y el vehículo deberá
                  ser alquilado a nombre del socio. Las millas AAdvantage serán acreditadas a un solo socio AAdvantage
                  por cada alquiler de vehículo. Las millas AAdvantage solo pueden ser obtenidas en las oficinas de Avis
                  y Budget participantes en aeropuertos en EE.UU., Canadá, Europa, Medio Oriente, África, México,
                  Latinoamérica y el Caribe.
                </p>
                <p>
                  Los socios Gold, Platinum, Platinum Pro, Executive Platinum y los titulares de tarjetas Citi® /
                  AAdvantage® y AAdvantage® Aviator® MasterCard® obtendrá los valores base más altos.
                </p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}

CardPromotion.proptypes = {
  dispatch: PropTypes.func,
  loadOffers: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(CardPromotion);
