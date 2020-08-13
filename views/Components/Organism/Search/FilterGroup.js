import React from 'react';
import classnames from 'classnames';

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
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
import Sliders from '../../Atoms/Sliders';

class FilterGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedCollapses: ['collapseOne'],
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  collapsesToggle = (collapse) => {
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: [],
      });
    } else {
      this.setState({
        openedCollapses: [collapse],
      });
    }
  };

  handleOnLoad = () => {};

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  renderBadge = (item) => {
    return (
      <Badge className={item === 'Todos' || item === 'All' ? 'ar-badge-total' : 'ar-badge'} pill>
        40
      </Badge>
    );
  };

  render() {
    const { title, items, priceRange } = this.props;
    return (
      <div className={'accordion ar-filters-collapse'}>
        <CardHeader
          role="tab"
          onClick={() => this.collapsesToggle('collapseOne')}
          aria-expanded={this.state.openedCollapses.includes('collapseOne')}
          className="bg-ar-white-3 ar-filter-title"
        >
          <h5>{title}</h5>
        </CardHeader>

        <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseOne')}>
          <CardBody className="pl-3">
            {!priceRange ? (
              items.map((item) => {
                return (
                  <div className="d-flex m-1">
                    <div className="custom-control custom-checkbox mr-2">
                      <input className="custom-control-input" id={title + item} type="checkbox" />
                      <label className="custom-control-label ar-filter-items" htmlFor={title + item}>
                        {item}
                      </label>
                    </div>
                    {this.renderBadge(item)}
                  </div>
                );
              })
            ) : (
              <Sliders />
            )}
          </CardBody>
        </Collapse>
      </div>
    );
  }
}

FilterGroup.propTypes = {
  dispatch: PropTypes.func,
  searchLocation: PropTypes.func,
  loadCountries: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(FilterGroup);
