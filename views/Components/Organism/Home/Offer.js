import React from 'react';
import classnames from 'classnames';

import { Button, Card, CardBody, CardImg, CardTitle, CardText, CardHeader, Col, Container, Row } from 'reactstrap';

class Offer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          title: 'Recorre Europa con un 15% de descuento por reserva anticipada.',
          color: 'ar-red-1-text',
          img: '/img/custom/avis-promo-thumb-1.jpg',
          button: 'ar-promo-button-avis',
        },
        {
          title: 'Latinoamérica y el Caribe te esperan con un 10% de descuento.',
          color: 'ar-blue-1-text',
          img: '/img/custom/alamo-promo-thumb-2.jpg',
          button: 'ar-promo-button-alamo',
        },
        {
          title: 'Recibe un ascenso de categoría en tu reserva para Estados Unidos.',
          color: 'ar-orange-text',
          img: '/img/custom/budget-promo-thumb-3.jpg',
          button: 'ar-promo-button-budget',
        },
        {
          title: '20% de descuento prepagando tu reserva para Estados Unidos.',
          color: 'ar-blue-3-text',
          img: '/img/custom/payless-promo-thumb-4.jpg',
          button: 'ar-promo-button-payless',
        },
      ],
    };
  }

  renderCards = () => {
    return this.state.cards.map((card) => {
      return (
        <Card className="w-23">
          <CardImg alt="..." src={card.img} top />
          <CardBody>
            <CardTitle className={`ar-title ${card.color}`}>{card.title}</CardTitle>
            <Row className="justify-content-center">
              <Button className={`ar-round ${card.button} w-100 ml-4 mr-4`}>
                Ver mas información <i className="icon-chevron-right" />
              </Button>
            </Row>
          </CardBody>
        </Card>
      );
    });
  };

  render() {
    return (
      <Row className="justify-content-center">
        <Col className="justify-content-center" lg="8">
          <Row>
            <Col className="justify-content-center text-center">
              <h2>Descubre todas las ofertas y promociones</h2>
            </Col>
          </Row>
          <Row className="justify-content-lg-between mt-5">{this.renderCards()}</Row>
        </Col>
      </Row>
    );
  }
}

export default Offer;
