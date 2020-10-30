import React from 'react';
import classnames from 'classnames';
import { Button, Card, CardBody, CardImg, CardTitle, CardText, CardHeader, Col, Container, Row } from 'reactstrap';
import Pagination from '../../Atoms/Pagination';
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
    const { dataCards } = this.props;
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
