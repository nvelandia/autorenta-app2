import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Row, Card, CardBody, CardHeader, Button } from 'reactstrap';
import CustomCarousel from '../../Molecules/Carousels/CustomCarousel';

class ModalChangePlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.rateSelected,
    };
    this.dispatch = props.dispatch;
  }

  changePage = (page) => {
    if (page < this.props.carSelected.rates.length && page >= 0) {
      this.setState({ page });
    } else if (page < 0) {
      this.setState({ page: this.props.carSelected.rates.length - 1 });
    } else {
      this.setState({ page: 0 });
    }
  };

  changePlan = (page) => {
    const body = {
      ...this.props.searchParams,
      vendor: this.props.carSelected.company.code,
      sipp: this.props.carSelected.type,
    };
    let nextAction = null;
    if (this.props.discount.rate_code) {
      const body = this.props.searchParams;
      body.rate = this.props.carSelected.rates[page].rate_code;
      nextAction = this.props.validatePromotion(body);
    }

    this.props.dispatch(
      this.props.changePlan(this.props.carSelected, this.props.location, body, page, this.props.clientType, nextAction),
    );

    this.props.hideModal();
  };

  renderCardPlan = () => {
    const { translate } = this.props;
    const cards = this.props.carSelected.rates.map((rate) => {
      return (
        <Card className="mb-0 shadow m-3">
          <CardHeader className="">
            <Row className="mx-0">
              <span className="ar-card-change-plan-title">{rate.name}</span>
            </Row>
          </CardHeader>
          <CardBody className="zi-1200">
            {rate.includes.map((item, index) => {
              return (
                <div className="d-flex" key={index}>
                  <p className="mb-1">
                    <i className="ar-icon-check-solid ar-green-text" />
                  </p>
                  <p className="mb-1">{'  ' + item}</p>
                </div>
              );
            })}
            {rate.not_includes
              ? rate.not_includes.map((item, index) => {
                  return (
                    <div className="d-flex" key={index}>
                      <p className="mb-1">
                        <i className="ar-icon-close-solid ar-red-text" />
                      </p>
                      <p className="mb-1">{'  ' + item}</p>
                    </div>
                  );
                })
              : null}
            <div className="ar-button-confirm-container">
              <Button
                className="btn-icon ar-round-button ar-button-confirm"
                color="red-0"
                type="button"
                disabled={this.state.page === this.props.rateSelected}
                onClick={() => this.changePlan(this.state.page)}
              >
                {this.state.page !== this.props.rateSelected
                  ? translate('step2.changePlan.quoteFee')
                  : translate('step2.changePlan.selectedFee')}
                <i className="ar-icon-chevron-right" />
              </Button>
            </div>
          </CardBody>
        </Card>
      );
    });

    let iterations = cards.length;
    const cleanedCards = [];

    for (let i = 0; i < iterations; i++) {
      cleanedCards.push(cards.slice(i, i + 1));
    }

    return cleanedCards;
  };

  render() {
    const { translate, isMobile } = this.props;
    return (
      <Modal
        className="modal-dialog-centered ar-modal-change-plan"
        isOpen={this.props.showModal}
        toggle={() => this.props.hideModal()}
      >
        <div className="modal-header">
          <h6 className="modal-title" id="exampleModalLabel">
            {translate('step2.changePlan.title')}
          </h6>
          <button
            aria-label="Close"
            className="close ar-blue-0-text"
            data-dismiss="modal"
            type="button"
            onClick={() => this.props.hideModal()}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body ar-card-change-plan">
          <CustomCarousel
            activeIndex={this.state.page}
            items={this.renderCardPlan()}
            justify="justify-content-center"
            isMobile={isMobile}
            height={'h-450'}
          />
          <div className="ar-car-chevron">
            <span onClick={() => this.changePage(this.state.page - 1)} className={'ar-icon-chevron-left zi-1'} />
            <span onClick={() => this.changePage(this.state.page + 1)} className={'ar-icon-chevron-right zi-1'} />
          </div>
        </div>
      </Modal>
    );
  }
}

ModalChangePlan.propTypes = {
  dispatch: PropTypes.func,
  showModal: PropTypes.bool,
  hideModal: PropTypes.func,
  changePlan: PropTypes.func,
  validatePromotion: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step2Reducer;
};

export default connect(mapStateToProps)(ModalChangePlan);
