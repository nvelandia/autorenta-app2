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
    return (
      <Card>
        <CardHeader className="ar-blue-0-text font-weight-600">Filtrar resultados</CardHeader>
        <FilterGroup title={'COMPAÑÍA RENTADORA'} items={['Todos', 'Avis', 'Budget', 'Payless', 'Alamo']} />
        <FilterGroup
          title={'TIPOS DE VEHÍCULO'}
          items={[
            'Todos',
            'Pequeños / Económicos',
            'Compactos',
            'Intermedios',
            'Standars',
            'Grandes',
            'Premiuns / De Lujo',
            'Deportivos /Convertibles',
            'Minivans / Maxivans',
            'SUVs / Todoterrenos',
          ]}
        />
        <FilterGroup
          title={'CANTIDAD DE PASAJEROS'}
          items={['Todos', '4 personas', '5 personas', '7 personas', '8 personas', '12 ó más personas']}
        />
        <FilterGroup title={'TIPO DE TRANSMISIÓN'} items={['Transmisión automática', 'Transmisión manual']} />
        <FilterGroup title={'RANGO DE PRECIO'} priceRange={true} />
      </Card>
    );
  }
}

FilterList.propTypes = {
  dispatch: PropTypes.func,
  searchLocation: PropTypes.func,
  loadCountries: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(FilterList);
