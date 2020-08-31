import React from 'react';
import { Card, CardBody, FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClientTypeDropdown from '../../Molecules/dropdowns/ClientTypeDropdown';

class ClientType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {};

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Card className="card-frame ar-client-type-card">
        <CardBody className="p-0">
          <div className="ar-icon-customer-type ar-title-with-icon">Tipo de cliente</div>
          <div className="ar-select-client-type-container">
            <ClientTypeDropdown
              items={[0, 1, 3, 4, 5]}
              title={'Selecciona una opción'}
              color={'white-0'}
              dispatch={this.props.dispatch}
              classes={'ar-select-button'}
            />
          </div>
        </CardBody>
      </Card>
    );
  }
}

ClientType.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
  showDetailModal: PropTypes.func,
  showAditionalModal: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(ClientType);
