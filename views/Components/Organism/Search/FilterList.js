import React from 'react';
import classnames from 'classnames';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterGroup from './FilterGroup';

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
    const { gears, companies, types, seats, bags } = this.props.items;
    return (
      <Card>
        <CardHeader className="ar-blue-0-text font-weight-600">Filtrar resultados</CardHeader>
        <FilterGroup title={'COMPAÑÍA RENTADORA'} items={companies} type={'check'} badge={true} text={''} />
        <FilterGroup title={'TIPOS DE VEHÍCULO'} items={types} type={'check'} badge={true} text={''} />
        <FilterGroup title={'CANTIDAD DE PASAJEROS'} items={seats} type={'check'} badge={false} text={'pasajeros'} />
        <FilterGroup title={'CAPACIDAD DE MALETAS'} items={bags} type={'radio'} badge={false} text={''} />
        <FilterGroup title={'TIPO DE TRANSMISIÓN'} items={gears} type={'check'} badge={false} text={''} />
        <FilterGroup title={'RANGO DE PRECIO'} priceRange={true} />
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
