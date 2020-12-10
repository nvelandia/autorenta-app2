import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AutorentaLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
  }

  render() {
    const { translate } = this.props;
    if (this.props.loader) {
      return (
        <div className="ar-loader-container">
          <div className="ar-loader">
            <img src={'/svg/autorenta-icon.svg'} />
            <div className="circle" />
          </div>
          <div className="ar-text ar-blue-3-text">
            {this.props.loaderMessage === 'cancel' ? (
              <p>{translate('common.loader.cancel')}</p>
            ) : this.props.loaderMessage === 'searching' ? (
              <p>{translate('common.loader.searching')}</p>
            ) : this.props.loaderMessage === 'creating' ? (
              <p>{translate('common.loader.creating')}</p>
            ) : this.props.loaderMessage === 'paying' ? (
              <p>{translate('common.loader.paying')}</p>
            ) : null}
          </div>
        </div>
      );
    }
    return null;
  }
}

AutorentaLoader.propTypes = {
  dispatch: PropTypes.func,
  loader: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return state.generalReducer;
};

export default connect(mapStateToProps)(AutorentaLoader);
