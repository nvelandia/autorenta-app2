import React from 'react';
import classnames from 'classnames';

import { Button, Card, CardBody, CardImg, CardTitle, CardText, CardHeader, Col, Container, Row } from 'reactstrap';
import Pagination from '../../Atoms/Pagination';

class Offer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          title: 'Recorre Europa con un 15% de descuento por reserva anticipada.',
          color: 'ar-red-1-text',
          img: '/img/custom/avis-promo-thumb-1.jpg',
          button: 'avis',
        },
        {
          title: 'Latinoamérica y el Caribe te esperan con un 10% de descuento.',
          color: 'ar-blue-1-text',
          img: '/img/custom/alamo-promo-thumb-2.jpg',
          button: 'alamo',
        },
        {
          title: 'Recibe un ascenso de categoría en tu reserva para Estados Unidos.',
          color: 'ar-orange-text',
          img: '/img/custom/budget-promo-thumb-3.jpg',
          button: 'budget',
        },
        {
          title: '20% de descuento prepagando tu reserva para Estados Unidos.',
          color: 'ar-blue-3-text',
          img: '/img/custom/payless-promo-thumb-4.jpg',
          button: 'payless',
        },
      ],
    };
  }

  renderCards = () => {
    return this.state.cards.map((card, index) => {
      return (
        <Col key={index} className="justify-content-center d-flex" xl="3" lg="5" md="5" sm="10" xs="12">
          <Card className="w-auto m-2">
            <CardImg alt="..." src={card.img} top />
            <CardBody>
              <CardTitle className={`ar-card-title ${card.color}`}>{card.title}</CardTitle>
              <Row className="justify-content-center">
                <Button className={`ar-round-button  ar-promo-button ${card.button} w-100 ml-3 mr-3`}>
                  Ver más información <i className="icon-chevron-right" />
                </Button>
              </Row>
            </CardBody>
          </Card>
        </Col>
      );
    });
  };

  render() {
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
          <Pagination />
        </div>
      </div>
    );
  }
}

export default Offer;
