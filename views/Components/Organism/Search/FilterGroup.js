import React from 'react';
import classnames from 'classnames';

import {
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
import ProgressBar from '../../Atoms/ProgressBar';
import RangeDatePicker from '../../Atoms/RangeDatePicker';
import CustomDropDown from '../../Atoms/CustomDropDown';
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

  render() {
    const { title, items, priceRange } = this.props;
    return (
      <div className={'accordion'}>
        <CardHeader
          role="tab"
          onClick={() => this.collapsesToggle('collapseOne')}
          aria-expanded={this.state.openedCollapses.includes('collapseOne')}
          className="bg-ar-white-3 ar-filters-collapse"
        >
          <h5 className="mb-0 ar-blue-0-text">{title}</h5>
        </CardHeader>

        <Collapse role="tabpanel" isOpen={this.state.openedCollapses.includes('collapseOne')}>
          <CardBody>
            {!priceRange ? (
              items.map((item) => {
                return (
                  <div className="custom-control custom-checkbox mr-3">
                    <input className="custom-control-input" id={title + item} type="checkbox" />
                    <label className="custom-control-label ws-pre" htmlFor={title + item}>
                      {item}
                    </label>
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
