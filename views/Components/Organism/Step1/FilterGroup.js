import React from 'react';
import { Badge, CardBody, CardHeader, Collapse } from 'reactstrap';
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

  isChecked = (category, value) => {
    if (value === 'total' && this.props.filterBy[category].length === 0) {
      return true;
    }
    if (this.props.filterBy[category].includes(value) && value !== 'total') {
      return true;
    }
    return false;
  };

  render() {
    const { title, items, priceRange, badge, type, text, category, translate } = this.props;
    let filters;
    if (items) {
      filters = Object.keys(items);
    }
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
              filters.map((key, index) => {
                return (
                  <div key={index} className="d-flex m-1 align-items-center">
                    {type === 'check' ? (
                      <div className="custom-control custom-checkbox mr-1">
                        <input
                          className="custom-control-input"
                          id={title + key}
                          type="checkbox"
                          checked={this.isChecked(category, key)}
                          onChange={(e) => this.props.handleOnSelect(key, category)}
                        />
                        <label className="custom-control-label ar-filter-items" htmlFor={title + key}>
                          {key.charAt(0).toUpperCase() + key.slice(1) + `  ${text}`}
                        </label>
                      </div>
                    ) : null}
                    {type === 'radio' ? (
                      <div className="custom-control custom-radio mr-1">
                        <input
                          className="custom-control-input"
                          name={title}
                          id={title + key}
                          type="radio"
                          onClick={(e) => this.props.handleOnChange(key)}
                        />
                        <label className="custom-control-label ar-filter-items" htmlFor={title + key}>
                          {key + translate('step1.result.filterList.moreBags')}
                        </label>
                      </div>
                    ) : null}
                    {badge ? (
                      !items[key].quantity ? (
                        <Badge className={key === 'total' ? 'ar-badge-total' : 'ar-badge'} pill>
                          &nbsp;{`${items[key]}`}&nbsp;
                        </Badge>
                      ) : (
                        <Badge className={key === 'total' ? 'ar-badge-total' : 'ar-badge'} pill>
                          &nbsp;{`${items[key].quantity}`}&nbsp;
                        </Badge>
                      )
                    ) : null}
                  </div>
                );
              })
            ) : (
              <Sliders priceRange={this.props.priceRange} handlePriceChange={this.props.handlePriceChange} />
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
  badge: PropTypes.bool,
  type: PropTypes.string,
  items: PropTypes.object,
  handleOnSelect: PropTypes.func,
  handleOnChange: PropTypes.func,
  handlePriceChange: PropTypes.func,
  priceRange: PropTypes.object,
};

const mapStateToProps = (state) => {
  return state.searchReducer;
};

export default connect(mapStateToProps)(FilterGroup);
