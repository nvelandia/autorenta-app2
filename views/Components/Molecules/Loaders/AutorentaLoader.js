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
    if (this.props.loader) {
      return (
        <div className="ar-loader-container">
          <div className="ar-loader">
            <img src={'/svg/autorenta-icon.svg'} />
            <div className="circle" />
          </div>
          <div className="ar-text ar-blue-3-text">
            <p>Estamos buscando las mejores ofertas de autos para las fechas escogidas.</p>
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