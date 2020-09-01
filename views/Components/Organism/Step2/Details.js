import React from 'react';
import { Card, CardHeader } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomButton from '../../Atoms/CustomButton';
//import FilterGroup from './FilterGroup';

class FilterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    //const { gears, companies, types, seats, bags } = this.props.items;
    return (
      <Card>
        <div className="ar-card-details-title">
          <h1>Detalles de la reserva</h1>
        </div>
        <div className="ar-card-details-subtitle">
          <h2>PLAN SELECCIONADO</h2>
          <CustomButton
            text={'Cambiar plan'}
            event={console.log('cambiar plan click')}
            color={'red-0'}
            name={'ar-button-change-plan'}
            icon={'ar-icon-chevron-right'}
            justify={'justify-content-between'}
          />
        </div>
      </Card>
    );
  }
}

FilterList.propTypes = {
  dispatch: PropTypes.func,
  searchLocation: PropTypes.func,
  loadCountries: PropTypes.func,
  items: PropTypes.object,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(FilterList);
